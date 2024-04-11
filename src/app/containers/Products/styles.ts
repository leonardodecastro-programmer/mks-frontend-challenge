import styled from 'styled-components'

export const Products = styled.div`
  display: grid;
  padding: 0 3.875rem;
  gap: 1.125rem;
  margin-bottom: 2.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-bottom: 10.75rem;
    gap: 2rem;
  }
`
