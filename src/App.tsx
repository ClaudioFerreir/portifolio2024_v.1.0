import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import { GlobalStyle, Title } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="portifolio">
        <Title>Claudio Ferreira</Title>
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
