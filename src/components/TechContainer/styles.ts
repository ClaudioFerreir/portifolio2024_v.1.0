import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0;
`
export const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  list-style: none;
  row-gap: 0.5rem;

  #Ruby {
    color: #cc342d;
  }

  #Rails {
    color: #cc0000;
  }

  #Java {
    color: #b07219;
  }

  #Python {
    color: #3572a5;
  }

  #HTML5 {
    color: #e34c26;
  }

  #CSS3 {
    color: #264de4;
  }

  #JavaScript {
    color: #f1e05a;
  }

  #TypeScript {
    color: #2b7489;
  }

  #React {
    color: #61dafb;
  }

  #VueJS {
    color: #41b883;
  }

  #NodeJS {
    color: #026e00;
  }

  #jQuery {
    color: #0769ad;
  }

  #Bootstrap {
    color: #563d7c;
  }

  #Sass {
    color: #c69;
  }

  #Less {
    color: #1d365d;
  }

  #Grunt {
    color: #fba919;
  }

  #TestingLibrary {
    color: #e33332;
  }

  #Cypress {
    color: #17202c;
  }
`

export const TechItem = styled.li`
  text-align: center;

  p {
    font-size: 0.8rem;
  }
`
