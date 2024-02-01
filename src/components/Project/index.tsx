import { BtnLink, Content } from '../../styles'
import { BtnContainer, Container } from './styles'

type Props = {
  description: string
  demo?: boolean
}

const Project = ({ description, demo }: Props) => (
  <Container>
    <Content>{description}</Content>
    <BtnContainer>
      <BtnLink>GitHub</BtnLink>
      {demo && <BtnLink>Demo</BtnLink>}
    </BtnContainer>
  </Container>
)

export default Project
