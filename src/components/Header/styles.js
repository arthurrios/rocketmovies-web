// import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 7.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_600};

  display: flex;
  align-items: center;

  padding: 1.5rem 7.6875rem;

  > h1 {
    font-size: 1.5rem;
    margin-right: 4rem;
    color: ${({ theme }) => theme.colors.pink};
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 12.375rem;

  > div {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    width: 100%;
    text-align: right;

    strong {
      color: ${({ theme }) => theme.colors.white};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray_200};
    }
  }

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray_600};
  }
`
