import styled from 'styled-components'
import { BtnLink, variables } from '../../styles'

export const FrontProject = styled.div`
  display: flex;
  gap: 2rem;

  img {
    max-width: 50%;
    background-size: cover;
    background-size: contain;
  }
`
export const IconsContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
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
