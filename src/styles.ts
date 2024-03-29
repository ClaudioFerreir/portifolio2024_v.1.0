import styled, { createGlobalStyle, css } from 'styled-components'

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

    @media (max-width: 768px) {
      padding: 1rem;
      gap: 2rem;
    }
  }
  `

export const MainTitle = styled.h1`
  width: 100%;
  font-size: 5rem;
  margin-bottom: 4rem;
  background: ${variables.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
`

export const BtnLink = styled.a`
  display; inline-block;
  padding: 1rem 1.2rem;
  color: ${variables.primaryTextColor};
  background: ${variables.gradient};
  text-decoration: none;
  border-radius: 3rem;
`

export const GradientBorder = css`
  content: '';
  background: ${variables.gradient};
  height: 3px;
  width: 30%;
`

//Sections Standard

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  color: ${variables.primaryTextColor};
  font-size: 2.2rem;
  margin-bottom: 1.3rem;

  &:after {
    ${GradientBorder};
  }
`
export const Content = styled.p`
  color: ${variables.secondaryTextColor};
  font-size: 1rem;
  line-height: 1.5;
`
