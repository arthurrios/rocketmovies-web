import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 0rem 7.6875rem;

  > main {
    margin-top: 2rem;
    padding-right: 1.5rem;
    max-height: 29rem;
    width: 100%;
    overflow-y: auto;

    p {
      margin-top: 2.5rem;
      text-align: justify;
    }
  }
  > button {
    margin-top: 2.5rem;
  }
`

export const TitleWithStars = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const Stars = styled.div`
  display: flex;
  gap: 0.625rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.pink};
`

export const AuthorAndDate = styled.div`
  margin-top: 1.5rem;
  font-family: 'Roboto', sans-serif;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2.5rem;

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
