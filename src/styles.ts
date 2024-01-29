import styled, { createGlobalStyle } from 'styled-components'

export const variables = {
  primaryTextColor: '#FFF',
  secondaryTextColor: '#a6a6a6',
  bodyBgColor: '#271B31',
  primaryBgColor: '#111',
  secondaryBgColor: '#1d1d1d',
  containerBorderRadius: '10px',
  cardBorderRadius: '5px',
  gradient:
    'linear-gradient(90deg, rgba(250,32,32,1), 0%, rgba(221,36,118,1) 100%)'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
  }

  body {
    background-color: ${variables.bodyBgColor};
  }

  a, svg {
    transition: .4s
  }

  #portifolio {
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
    gap: 3rem;
  }
  `

export const Title = styled.h1`
  width: 100%;
  font-size: 5rem;
  margin-bottom: 4rem;
  background: ${variables.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const BtnLink = styled.a`
  padding: 1rem 1.2rem;
  color: ${variables.primaryTextColor};
  background: ${variables.gradient};
  text-decoration: none;
  border-radius: 3rem;
`
