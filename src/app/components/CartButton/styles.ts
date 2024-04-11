import styled from 'styled-components'
import Image from 'next/image'

export const CartButton = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  height: 1.625rem;
  width: 3.25rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  span {
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    height: 2.75rem;
    width: 5.625rem;

    span {
      font-size: 1.125rem;
    }
  }
`

export const StyledImage = styled(Image)`
  @media (min-width: 768px) {
    width: 1.25rem;
    height: 1.125rem;
  }
`
