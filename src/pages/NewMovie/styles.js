import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2.25rem 7.6875rem 0;

  > main {
    margin-top: 1.5rem;
    padding-right: 1.5rem;
    max-height: 36.375rem;
    width: 100%;
    overflow-y: auto;

    h1 {
      font-weight: 500;
    }
  }
`
export const Form = styled.form`
  margin-top: 2.5rem;

  > div:nth-child(1) {
    display: flex;
    gap: 2.5rem;
  }

  > textarea {
    margin-top: 2.5rem;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 1.25rem;
    margin-top: 2.5rem;
    font-weight: 400;
  }

  .buttons {
    display: flex;
    gap: 2.5rem;
    margin-top: 2.5rem;
  }
`
export const Tags = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  min-height: 5.5rem;
  background-color: ${({ theme }) => theme.colors.gray_dark};
  border-radius: 10px;
  margin-top: 1.5rem;
  padding: 1rem;
  flex-wrap: wrap;
`
