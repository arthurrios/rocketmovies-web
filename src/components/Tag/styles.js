import { styled } from 'styled-components'

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink_low};
`
