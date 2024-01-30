import { SidebarContainer, Title } from './styles'
import { BtnLink } from '../../styles'
import avatar from '../../assets/img/Foto CV.jpg'
import SocialNetworks from '../SocialNetworks'
import InformationContainer from '../InfomationContainer'

const Sidebar = () => (
  <SidebarContainer>
    <img src={avatar} alt="Claudio Ferreira" />
    <Title>Desenvolvedor</Title>
    <SocialNetworks />
    <InformationContainer />
    <BtnLink href="">Download curriculo</BtnLink>
  </SidebarContainer>
)

export default Sidebar
