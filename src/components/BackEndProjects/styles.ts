import styled from 'styled-components'
import { BtnLink, variables } from '../../styles'

export const FrontProject = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid #f0f0f0;

  img {
    max-width: 50%;
    background-size: cover;
    background-size: contain;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }
`

export const IconsContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`
export const BtnRef = styled(BtnLink)`
  padding: 0.5rem 1rem;
  margin-top: 0;
`

export const ProjectItem = styled.li`
  margin-bottom: 1rem;
`

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const ProjectsContainer = styled.div`
  background-color: ${variables.secondaryBgColor};
  border-radius: ${variables.cardBorderRadius};
  padding: 1rem;
`
