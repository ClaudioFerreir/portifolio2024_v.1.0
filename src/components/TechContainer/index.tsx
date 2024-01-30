import {
  DiRuby,
  DiJava,
  DiPython,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiJqueryLogo,
  DiSass,
  DiGrunt
} from 'react-icons/di'

import { FaBootstrap, FaLess, FaVuejs } from 'react-icons/fa'

import { SiTypescript, SiTestinglibrary, SiRubyonrails } from 'react-icons/si'

import { TbBrandCypress } from 'react-icons/tb'

import { Title } from '../../styles'
import { Container, TechItem, TechList } from './styles'

const technologies = [
  { id: 'Ruby', name: 'Ruby', icon: DiRuby },
  { id: 'Rails', name: 'Rails', icon: SiRubyonrails },
  { id: 'Java', name: 'Java', icon: DiJava },
  { id: 'Python', name: 'Python', icon: DiPython },
  { id: 'HTML5', name: 'HTML5', icon: DiHtml5 },
  { id: 'CSS3', name: 'CSS3', icon: DiCss3 },
  { id: 'JavaScript', name: 'JavaScript', icon: DiJavascript1 },
  { id: 'TypeScript', name: 'TypeScript', icon: SiTypescript },
  { id: 'React', name: 'React', icon: DiReact },
  { id: 'NodeJS', name: 'Node.js', icon: DiNodejsSmall },
  { id: 'jQuery', name: 'jQuery', icon: DiJqueryLogo },
  { id: 'Bootstrap', name: 'Bootstrap', icon: FaBootstrap },
  { id: 'Sass', name: 'Sass', icon: DiSass },
  { id: 'Less', name: 'Less', icon: FaLess },
  { id: 'VueJS', name: 'Vue.js', icon: FaVuejs },
  { id: 'Grunt', name: 'Grunt', icon: DiGrunt },
  { id: 'TestingLibrary', name: 'Testing Library', icon: SiTestinglibrary },
  { id: 'Cypress', name: 'Cypress', icon: TbBrandCypress }
]

const TechContainer = () => (
  <Container>
    <Title>Tecnologias</Title>
    <TechList>
      {technologies.map((tech) => (
        <TechItem id={tech.id} key={tech.id}>
          {tech.icon({ size: 30 })}
          <p>{tech.name}</p>
        </TechItem>
      ))}
    </TechList>
  </Container>
)

export default TechContainer
