import styled from 'styled-components'
import { colors } from '@/app/styles'

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  justify-content: space-between;
  background-color: ${colors.principal.DEFAULT};
  color: #ffffff;
  margin-bottom: 1.125rem;

  h1 {
    font-weight: 600;
    font-size: 2rem;

    span {
      font-weight: 300;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 7.25rem;
    padding: 1.75rem 4rem;

    h1 {
      font-weight: 600;
      font-size: 2.5rem;

      span {
        font-weight: 300;
        font-size: 1.25rem;
      }
    }
  }
`
