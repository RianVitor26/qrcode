import { GlobalStyle } from './globalStyle'
import * as C from './style'
import QRCode from 'react-qr-code'
import { useState } from 'react'
import QRCodeLink from 'qrcode'

function App() {

  const [link, setLink] = useState('')
  const [qrCodeLink, setQrCodeLink] = useState('')
  
  function handleGenerate(link_url: any) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err: any, url: any) {
      setQrCodeLink(url)
    })
  }

  function handleQrCode(e: any) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <C.Container>
      <QRCode value={link} />
      <input onChange={(e) => handleQrCode(e)} type="text" placeholder='Digite um link'/>
      <GlobalStyle />

      <a href={qrCodeLink} download={`qrcode.png`}>Baixar QRCode</a>
    </C.Container>
  )
}

export default App
