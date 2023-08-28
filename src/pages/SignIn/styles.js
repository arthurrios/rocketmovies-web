import { styled } from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: stretch;
`

export const Form = styled.form`
  min-width: 21.25rem;
  padding: 10rem 8.375rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.pink};
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray_100};
    margin-bottom: 3rem;
  }

  > h2 {
    font-weight: 500;
    margin-bottom: 3rem;
  }

  > div {
    margin-bottom: 0.5rem;

    > input {
      font-family: 'Roboto Slab', serif;
    }
  }

  > button {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }

  > a {
    text-align: center;
    color: ${({ theme }) => theme.colors.pink};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
