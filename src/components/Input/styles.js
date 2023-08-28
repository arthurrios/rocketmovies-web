import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_800};
  color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 10px;
  padding: 1rem 1.5rem;
  gap: 0.75rem;

  > input {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.gray_800};
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
      font-size: 0.875rem;
    }
  }
`
