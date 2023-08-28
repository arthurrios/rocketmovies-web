import { styled } from 'styled-components'

export const Container = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background: transparent;
  border: 0;

  color: ${({ theme }) => theme.colors.pink};
`
