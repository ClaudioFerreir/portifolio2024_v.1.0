import styled from 'styled-components'
import { variables } from '../../styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${variables.primaryBgColor};
  gap: 1rem;
  border-radius: ${variables.containerBorderRadius};
  padding: 3rem;
`
