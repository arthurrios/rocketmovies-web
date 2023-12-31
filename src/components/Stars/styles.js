import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: ${({ $card }) => ($card === 'true' ? '0.375rem' : '0.625rem')};
  font-size: ${({ $card }) => ($card === 'true' ? '0.75rem' : '1.25rem')};
  color: ${({ theme }) => theme.colors.pink};
`
