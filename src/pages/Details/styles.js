import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2.25rem 7.6875rem 0;

  > main {
    padding-right: 1.5rem;
    max-height: 36.375rem;
    width: 100%;
    overflow-y: auto;

    p {
      margin-top: 2.5rem;
      text-align: justify;
    }
  }
`

export const TitleWithStars = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  > div {
    display: flex;
    gap: 0.625rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.pink};
  }
`
export const AuthorAndDate = styled.div`
  margin-top: 1.5rem;
  font-family: 'Roboto', sans-serif;
  display: flex;
  gap: 1rem;
  align-items: center;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    img {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.gray_600};
    }

    svg {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`
export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2.5rem;
`
