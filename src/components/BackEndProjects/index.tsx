import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiRuby,
  DiPostgresql,
  DiSass
} from 'react-icons/di'
import { SiRubyonrails } from 'react-icons/si'

import { FaBootstrap } from 'react-icons/fa'

import { Content, Title } from '../../styles'
import {
  BtnContainer,
  ProjectsContainer,
  FrontProject,
  ProjectItem,
  IconsContainers,
  BtnRef
} from './styles'

import FrontWineShop from '../../assets/img/frontWineshop.png'
import FrontSweetShop from '../../assets/img/frontSweetShop2.png'
import { TechItem, TechList } from '../TechContainer/styles'

const Projects = [
  {
    id: 'FrontWineShop',
    image: FrontWineShop,
    description:
      'Website para troca de objetos sem uso, com um algoritmo de clusterização para encontrar correspondências entre os itens. O projeto envolveu desde a concepção até a prototipagem no Sigma, com um front-end responsivo em HTML, CSS, Bootstrap e JavaScript. Os dados são armazenados no Postgres com Cloudnary. O sistema inclui cadastro de usuários e objetos, além de um algoritmo em Ruby para identificar "matches". O ambiente de desenvolvimento foi configurado com o framework Ruby on Rails.',
    languages: [
      { id: 'Ruby', name: 'Ruby', icon: DiRuby },
      { id: 'Rails', name: 'Rails', icon: SiRubyonrails },
      { id: 'HTML5', name: 'HTML5', icon: DiHtml5 },
      { id: 'CSS3', name: 'CSS3', icon: DiCss3 },
      { id: 'JavaScript', name: 'JavaScript', icon: DiJavascript1 },
      { id: 'Bootstrap', name: 'Bootstrap', icon: FaBootstrap },
      { id: 'PostgreSQL', name: 'PostgreSQL', icon: DiPostgresql },
      { id: 'Sass', name: 'Sass', icon: DiSass }
    ],
    demo: false,
    demoRef: '',
    gitHubRef: 'https://github.com/ClaudioFerreir/SWAP-IT-DEV'
  },
  {
    id: 'FrontSweetShop',
    image: FrontSweetShop,
    description:
      'Nosso aplicativo web de adoção de pets, desenvolvido com tecnologia Rails e linguagem Ruby. Os usuários podem facilmente criar, visualizar, atualizar e excluir perfis de usuário e informações de animais. Além disso, o aplicativo oferece um robusto sistema de filtragem, permitindo que os usuários encontrem facilmente o pet ideal com base em tipo, características específicas e proximidade geográfica. Os dados são armazenados no Postgres com Cloudnary.',
    languages: [
      { id: 'Ruby', name: 'Ruby', icon: DiRuby },
      { id: 'Rails', name: 'Rails', icon: SiRubyonrails },
      { id: 'HTML5', name: 'HTML5', icon: DiHtml5 },
      { id: 'CSS3', name: 'CSS3', icon: DiCss3 },
      { id: 'JavaScript', name: 'JavaScript', icon: DiJavascript1 },
      { id: 'Bootstrap', name: 'Bootstrap', icon: FaBootstrap },
      { id: 'PostgreSQL', name: 'PostgreSQL', icon: DiPostgresql },
      { id: 'Sass', name: 'Sass', icon: DiSass }
    ],
    demo: false,
    demoRef: '',
    gitHubRef: 'https://github.com/ClaudioFerreir/ANIMAL_ADOPTION'
  }
]

const BackEndProjects = () => (
  <ProjectsContainer>
    <Title>Projetos Back-End</Title>
    <ul>
      {Projects.map((p) => {
        return (
          <ProjectItem key={p.id}>
            <FrontProject>
              <img src={p.image} alt="" />
              <div>
                <Content>{p.description}</Content>
                <IconsContainers>
                  <BtnContainer>
                    <BtnRef href={p.gitHubRef}>GitHub</BtnRef>
                    {p.demo && <BtnRef href={p.demoRef}>Demo</BtnRef>}
                  </BtnContainer>
                  <TechList>
                    {p.languages.map((tech) => (
                      <TechItem id={tech.id} key={tech.id}>
                        {tech.icon({ size: 30 })}
                      </TechItem>
                    ))}
                  </TechList>
                </IconsContainers>
              </div>
            </FrontProject>
          </ProjectItem>
        )
      })}
    </ul>
  </ProjectsContainer>
)

export default BackEndProjects
