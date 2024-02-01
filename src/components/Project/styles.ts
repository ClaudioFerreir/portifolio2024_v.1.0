import styled from 'styled-components'
import { variables } from '../../styles'

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

export const Container = styled.div`
  background-color: ${variables.secondaryBgColor};
  border-radius: ${variables.cardBorderRadius};
  padding: 1rem;
`
