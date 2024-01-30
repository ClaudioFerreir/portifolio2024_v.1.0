import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import { GlobalStyle, MainTitle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="portifolio">
        <MainTitle>Claudio Ferreira</MainTitle>
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
