import 'react-toastify/dist/ReactToastify.css'

import type { NextPage } from 'next'
import Head from 'next/head'

import { SybilMintPage } from '../components'

const Sybilverse: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>ƎꙄЯƎV⅃I𐐒YꙄ</title>
      </Head>
      <SybilMintPage />
    </div>
  )
}

export default Sybilverse
