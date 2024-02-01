import BackEndProjects from '../BackEndProjects'
import FrontEndProjects from '../FrontEndProjects'
import { Container } from './styles'

const ProjectsContainer = () => (
  <Container>
    <BackEndProjects />
    <FrontEndProjects />
  </Container>
)

export default ProjectsContainer
