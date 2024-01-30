import styled from 'styled-components'

import { variables } from '../../styles'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${variables.secondaryBgColor};
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  width: 90%;
  border-radius: ${variables.cardBorderRadius};

  p {
    color: ${variables.primaryTextColor};
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0.3rem 0.2rem;
  }

  svg {
    background-color: ${variables.primaryBgColor};
    padding: 0.4rem;
    width: 2rem;
    height: 2rem;
    border-radius: ${variables.cardBorderRadius};
    color: #c17ceb;
  }
`
