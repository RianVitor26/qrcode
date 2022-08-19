import { GlobalStyle } from './globalStyle'
import * as C from './style'
import QRCode from 'react-qr-code'
import { useState } from 'react'

function App() {

  const [link, setLink] = useState('')

  function handleQrCode(e: any) {
    setLink(e.target.value)
  }

  return (
    <C.Container>
      <QRCode value={link} />
      <input onChange={(e) => handleQrCode(e)} type="text" placeholder='Digite um link'/>
      <GlobalStyle />
    </C.Container>
  )
}

export default App
