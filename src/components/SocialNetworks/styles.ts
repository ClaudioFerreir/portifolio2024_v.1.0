import styled from 'styled-components'
import { variables } from '../../styles'

export const SocialContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  .social-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    background-color: ${variables.secondaryBgColor};
    border-radius: ${variables.cardBorderRadius};
    color: #333;
    font-size: 1.3rem;
  }

  #linkedIn {
    color: #0072b1;
  }

  #github {
    color: #111;
  }

  .social-btn:hover {
    background: ${variables.gradient};
    > svg {
      color: ${variables.primaryTextColor};
    }
  }
`
