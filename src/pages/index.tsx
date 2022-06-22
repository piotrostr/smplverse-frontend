import 'react-toastify/dist/ReactToastify.css'

import { useBreakpointIndex } from '@theme-ui/match-media'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { LandingPage, MintPage } from '../components'

const Home: NextPage = () => {
  const [entered, setEntered] = useState(false)
  const breakpointIndex = useBreakpointIndex()
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="NFTs from the computational infrastructure of the metaverse, assigned using facial recognition"
        />
        <meta
          property="og:description"
          content="NFTs from the computational infrastructure of the metaverse, assigned using facial recognition"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="smplverse.xyz/logo192.png" />
        <meta property="og:site_name" content="SMPLverse" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="smplverse.xyz" />
        <meta name="twitter:site" content="@smplverse" />
        <meta
          name="twitter:image"
          content="https://www.smplverse.xyz/static/media/smpl.56e0a381d45f5970f53a.png"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="Keywords" content="SMPLverse, NFT, art" />
        {/*
        <meta
          http-equiv="Content-Security-Policy"
          content="
            default-src 'self' rinkeby.infura.io api.smplverse.xyz;
            font-src 'self';
            img-src 'self';
            manifest-src 'self';
            style-src 'self' 'unsafe-inline';
            frame-src 'self';
            script-src 'self' 'unsafe-eval';
          "
        />
      * */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=63072000; includeSubDomains; preload;"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>SMPLverse</title>
      </Head>
      <>
        {!entered && breakpointIndex != 0 ? (
          <LandingPage setEntered={setEntered} />
        ) : (
          <MintPage />
        )}
      </>
    </div>
  )
}

export default Home
