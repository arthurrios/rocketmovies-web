import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    width: 100%;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.gray_800};
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
      font-size: 0.875rem;
    }
  }
`
