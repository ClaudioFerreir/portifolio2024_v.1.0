import styled from 'styled-components'
import { variables } from '../../styles'

export const SidebarContainer = styled.aside`
  background-color: ${variables.primaryBgColor};
  flex: 1 1 0;
  border-radius: ${variables.containerBorderRadius};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 3rem 0;

  img {
    max-width: 70%;
    border-radius: ${variables.containerBorderRadius};
    position: absolute;
    top: -3rem;
  }
`

export const Title = styled.h2`
  color: ${variables.secondaryTextColor};
  background-color: ${variables.secondaryBgColor};
  border-radius: ${variables.cardBorderRadius};
  margin-top: 12rem;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
`
