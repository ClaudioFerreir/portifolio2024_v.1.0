import MainContent from './components/MainContent'
import ProjectsContainer from './components/ProjectsContainer'
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
        <ProjectsContainer />
      </div>
    </>
  )
}

export default App
