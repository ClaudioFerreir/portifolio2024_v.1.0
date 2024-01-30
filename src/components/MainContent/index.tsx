import AboutContainer from '../AboutContainer'
/* import ProjectsContainer from '../ProjectsContainer' */
import TechContainer from '../TechContainer'
import { MainContentContainer } from './styles'

const MainContent = () => (
  <MainContentContainer>
    <AboutContainer />
    <TechContainer />
    {/* <ProjectsContainer /> */}
  </MainContentContainer>
)

export default MainContent
