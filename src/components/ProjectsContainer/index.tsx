import { Title, Content, Container, BtnLink } from '../../styles'
import { BtnContainer } from './styles'

const ProjectsContainer = () => (
  <Container>
    <Title>Projetos</Title>
    <Content>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit
      iste ad excepturi blanditiis laborum omnis sapiente laboriosam totam
      explicabo? Quae obcaecati ipsum quas ullam vel officiis blanditiis ut
      reprehenderit.
    </Content>
    <BtnContainer>
      <BtnLink>Demo</BtnLink>
      <BtnLink>GitHub</BtnLink>
    </BtnContainer>
  </Container>
)

export default ProjectsContainer
