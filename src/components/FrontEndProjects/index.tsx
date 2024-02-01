import { DiHtml5, DiCss3, DiJavascript1, DiJqueryLogo } from 'react-icons/di'

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
import FrontCloneDecathlon from '../../assets/img/frontCloneDecathlonPT.png'
import FrontDoceria from '../../assets/img/frontDoceria.png'
import { TechItem, TechList } from '../TechContainer/styles'

const Projects = [
  {
    id: 'FrontSweetShop',
    image: FrontSweetShop,
    description:
      'O objetivo final deste projeto foi fornecer uma experiência de usuário agradável, com uma página responsiva que se adapta a diferentes dispositivos, combinando recursos do Bootstrap (carousel,cards, modal, toast, alert, collapse e layout grid) e JavaScript. Além disso, há ligação com uma API externa (IBGE) para exibir e acessar as cidades do Brasil de forma intuitiva, funcional e dinâmica.',
    languages: [
      { id: 'HTML5', name: 'HTML5', icon: DiHtml5 },
      { id: 'CSS3', name: 'CSS3', icon: DiCss3 },
      { id: 'JavaScript', name: 'JavaScript', icon: DiJavascript1 },
      { id: 'Bootstrap', name: 'Bootstrap', icon: FaBootstrap }
    ],
    demo: true,
    demoRef:
      'https://project-advanced-bootstrap.vercel.app/?vercelToolbarCode=PKILJ5MASC99Oof',
    gitHubRef: 'https://github.com/ClaudioFerreir/project_AdvancedBootstrap'
  },
  {
    id: 'FrontCloneDecathlon',
    image: FrontCloneDecathlon,
    description:
      'O projeto consistiu na criação de um site responsivo, simulando um e-commerce de artigos esportivos. Foi utilizado o CSS Grid para criar um layout flexível que se adapta a diferentes tamanhos de tela, permitindo uma exibição harmoniosa dos produtos em grade. O menu lateral estático do Bootstrap foi implementado para facilitar a navegação do usuário, fornecendo categorias e filtros para refinar a busca de produtos.',
    languages: [
      { id: 'HTML5', name: 'HTML5', icon: DiHtml5 },
      { id: 'CSS3', name: 'CSS3', icon: DiCss3 },
      { id: 'JavaScript', name: 'JavaScript', icon: DiJavascript1 },
      { id: 'jQuery', name: 'jQuery', icon: DiJqueryLogo }
    ],
    demo: true,
    demoRef:
      'https://project-decathlon-pt-layout.vercel.app/?vercelToolbarCode=0lCfj-7tPcxryri#',
    gitHubRef: 'https://github.com/ClaudioFerreir/project_Decathlon.pt_layout'
  },
  {
    id: 'FrontDoceria',
    image: FrontDoceria,
    description:
      'A página foi baseada em HTML e CSS, e apresenta uma estrutura comumente encontrada em muitos sites. Há imagens e vídeos, além de um formulário de contato. O objetivo foi criar uma página com design atraente, e elementos bem estruturados e estilizados, usando HTML e CSS.',
    languages: [
      { id: 'HTML5', name: 'HTML5', icon: DiHtml5 },
      { id: 'CSS3', name: 'CSS3', icon: DiCss3 }
    ],
    demo: true,
    demoRef:
      'https://projeto-doceria-two.vercel.app/?vercelToolbarCode=V_GaZ_g8wfQ7-dl',
    gitHubRef: 'https://github.com/ClaudioFerreir/Projeto_Doceria'
  },
  {
    id: 'FrontWineShop',
    image: FrontWineShop,
    description:
      'Este projeto consiste em um site e-commerce de vinhos e foi projetado para oferecer uma experiência de compra intuitiva e agradável aos usuários. Ele possui uma navegação facilitada, com categorias bem definidas, que permitem aos usuários explorar diferentes tipos de vinhos, como tintos, brancos e espumantes. Além disso, o site é responsivo, adaptando-se a diferentes tamanhos de tela.',
    languages: [
      { id: 'HTML5', name: 'HTML5', icon: DiHtml5 },
      { id: 'CSS3', name: 'CSS3', icon: DiCss3 },
      { id: 'JavaScript', name: 'JavaScript', icon: DiJavascript1 },
      { id: 'jQuery', name: 'jQuery', icon: DiJqueryLogo }
    ],
    demo: true,
    demoRef:
      'https://project-wine-shop.vercel.app/?vercelToolbarCode=TjWlYHCPS2Z7vH-',
    gitHubRef: 'https://github.com/ClaudioFerreir/project_wineShop'
  }
]

const FrontEndProjects = () => (
  <ProjectsContainer>
    <Title>Projetos Front-End</Title>
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

export default FrontEndProjects
