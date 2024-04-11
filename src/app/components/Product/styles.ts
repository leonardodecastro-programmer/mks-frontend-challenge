import styled from 'styled-components'
import { colors } from '@/app/styles'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
  justify-content: space-between;
  overflow: hidden;

  button {
    width: 100%;
    background-color: ${colors.principal.DEFAULT};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;
    font-weight: 600;
    font-size: 0.875rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`

export const ProductSpecs = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${colors.neutral[120]};
  padding: 1rem;
  justify-content: center;

  p {
    font-weight: 300;
    font-size: 0.625rem;
  }
`

export const NameAndPriceContainer = styled.div`
  display: flex;
  margin: 1.25rem 0;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 400;
`

export const PriceContainer = styled.span`
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  height: fit-content;
  font-size: 0.875rem;
  font-weight: 700;
  background-color: ${colors.neutral[110]};
  color: #ffffff;
`
