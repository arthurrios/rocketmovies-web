import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Tag = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ theme, $card }) =>
    $card === 'true' ? theme.colors.gray_100 : theme.colors.white};
  background-color: ${({ theme, $card }) =>
    $card === 'true' ? theme.colors.gray_700 : theme.colors.pink_low};
`
