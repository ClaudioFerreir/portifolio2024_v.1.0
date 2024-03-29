import styled from 'styled-components'

import { variables } from '../../styles'

export const MainContentContainer = styled.main`
  background-color: ${variables.primaryBgColor};
  flex: 2 1 0;
  border-radius: ${variables.containerBorderRadius};
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
    width: 100%;
  }
`
