// import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;
  height: 7.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_600};

  display: flex;
  align-items: center;

  padding: 1.5rem 7.6875rem;

  > div {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 15rem;

  > div {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    width: 100%;
    position: relative;

    .profile-name {
      background: none;
      border: none;
      right: 0;
      top: -1.25rem;
      position: absolute;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
    }

    .logout-button {
      position: absolute;
      right: 0;
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.gray_200};
    }
  }

  .profile-image {
    background: none;
    border: none;

    img {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.gray_600};
    }
  }
`

export const HomeLink = styled(Link)`
  > h1 {
    font-size: 1.5rem;
    width: 12rem;
    margin-right: 1rem;
    color: ${({ theme }) => theme.colors.pink};
  }
`
