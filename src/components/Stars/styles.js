import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.625rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.pink};
`
