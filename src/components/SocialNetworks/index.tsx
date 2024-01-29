import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { SocialContainer } from './styles'

const socialNetworks = [
  { name: 'linkedIn', icon: <FaLinkedinIn /> },
  { name: 'github', icon: <FaGithub /> }
]

const SocialNetworks = () => (
  <SocialContainer>
    {socialNetworks.map((network) => (
      <a href="#" className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
  </SocialContainer>
)

export default SocialNetworks
