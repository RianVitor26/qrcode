import { GlobalStyle } from './globalStyle'
import * as C from './style'
import QRCode from 'react-qr-code'

function App() {
  return (
    <C.Container>
      <QRCode value='www.google.com'/>
      <input type="text" placeholder='Digite um link'/>
      <GlobalStyle />
    </C.Container>
  )
}

export default App
