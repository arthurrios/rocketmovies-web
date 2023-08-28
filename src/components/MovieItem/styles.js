import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.colors.gray_800};
  color: ${({ theme }) => theme.colors.white};

  border: ${({ theme, $isnew }) =>
    $isnew ? `2px dashed ${theme.colors.gray_200}` : 'none'};

  padding: 1rem;
  border-radius: 10px;

  > button {
    border: none;
    background: none;

    > svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.pink};
    }
  }

  > input {
    display: block;
    width: ${($isnew) => $isnew && '7rem'};
    border: none;
    background: transparent;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.white};
  }
`
