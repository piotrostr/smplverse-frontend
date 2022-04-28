import styled from '@emotion/styled'
import { SMPLverse } from 'contract'
import { useContract } from 'hooks'
import { sha256 } from 'js-sha256'
import { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Webcam from 'react-webcam'
import { Spinner } from 'theme-ui'

import { API_URL } from '../constants'
import { useAvailableTokenId } from '../hooks'
import { ButtonContainer } from './ButtonContainer'
import { CenteredRow } from './Flex'
import { MintTime } from './MintTime'
import { displayErrorToast, displaySuccessToast, Toast } from './Toast'

const WebcamButtonContainer = styled(ButtonContainer)`
  width: 150px;
  display: flex;
  justify-content: center;
`
const InvertOnHover = styled.div`
  &:hover {
    filter: invert(1);
  }
`

const EmptySpace = styled.div`
  width: 30px;
`

const WaitingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 512px;
  width: 512px;
`

const videoConstraints = {
  width: 512,
  height: 512,
  facingMode: 'user',
}

export const WebcamCapture = () => {
  const webcamRef = useRef(null) as any
  const contract = useContract() as SMPLverse
  const [waiting, setWaiting] = useState<boolean>(false)
  const [photo, setPhoto] = useState<string>('')
  const [landmarkedPhoto, setLanmarkedPhoto] = useState<string>('')
  const [hash, setHash] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)
  const availableTokenId = useAvailableTokenId()

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    if (imageSrc) {
      setLanmarkedPhoto('')
      const image = imageSrc.split(',')[1]
      const _hash = '0x' + sha256(image)
      console.log(image)
      setPhoto(imageSrc)
      setHash(_hash)
    }
  }, [webcamRef])

  useEffect(() => {
    ;(async function () {
      if (photo) {
        try {
          setWaiting(true)
          const res = await fetch(API_URL + '/detect-face', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              image: photo.split(',')[1],
            }),
          })
          const json = await res.json()
          if (!json.error) {
            setLanmarkedPhoto('data:image/jpeg;base64,' + json.image)
          } else {
            displayErrorToast(json.error, 'dark')
          }
          setWaiting(false)
        } catch (e) {
          if (e.message == 'Failed to fetch') {
            displayErrorToast(
              "Couldn't connect to the backend. Please try again later.",
              'dark'
            )
          }
          setWaiting(false)
        }
      }
    })()
  }, [photo])

  async function upload() {
    if (contract) {
      if (
        !photo ||
        !hash ||
        !landmarkedPhoto ||
        !contract.signer ||
        availableTokenId === undefined
      ) {
        return
      }
      setIsUploading(true)
      try {
        const tx = await contract.uploadImage(hash, availableTokenId)
        displaySuccessToast(tx.hash, 'dark')
        setIsUploading(false)
      } catch (e) {
        if (e.message.includes('cannot estimate gas')) {
          alert(e.message)
        } else {
          displayErrorToast(e.message, 'dark')
        }
      }
      setIsUploading(false)
    }
  }

  return (
    <>
      {!photo ? (
        <>
          <Webcam
            audio={false}
            forceScreenshotSourceSize={true}
            mirrored={true}
            screenshotQuality={1}
            onUserMedia={(media) => console.log(media)}
            onUserMediaError={(e) => alert(e.toString())}
            imageSmoothing={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={520}
            height={520}
            videoConstraints={videoConstraints}
          />
          <MintTime />
          <WebcamButtonContainer onClick={capture}>
            <InvertOnHover>
              CAPTURE PHOTO
            </InvertOnHover>
          </WebcamButtonContainer>
        </>
      ) : (
        <>
          {waiting ? (
            <WaitingContainer>
              <Spinner />
            </WaitingContainer>
          ) : (
            <img
              width={520}
              height={520}
              src={landmarkedPhoto ? landmarkedPhoto : photo}
              alt="photo"
            />
          )}
          {hash && <p>{hash}</p>}
          <MintTime />
          <CenteredRow>
            <WebcamButtonContainer
              onClick={() => {
                setPhoto('')
                toast.dismiss()
              }}
            >
              <InvertOnHover>
                TRY AGAIN
              </InvertOnHover>
            </WebcamButtonContainer>
            {landmarkedPhoto && (
              <>
                <EmptySpace />
                <WebcamButtonContainer
                  onClick={!isUploading ? upload : () => null}
                >
                  {isUploading ? (
                    <Spinner size={24} color={'black'} />
                  ) : (
                    <>Upload</>
                  )}
                </WebcamButtonContainer>
              </>
            )}
          </CenteredRow>
        </>
      )}
      <Toast />
    </>
  )
}
