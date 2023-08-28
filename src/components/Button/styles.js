import { styled } from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, $exclude }) =>
    $exclude === 'true' ? theme.colors.gray_dark : theme.colors.pink};
  color: ${({ theme, $exclude }) =>
    $exclude === 'true' ? theme.colors.pink : theme.colors.gray_900};

  height: 3rem;
  border: 0;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
