import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;
    background: ${({ theme }) => theme.colors.pink_low};

    display: flex;
    align-items: center;
    padding: 4rem 9rem;

    > button {
      background: none;
      border: 0;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 21.25rem;
  margin: -6rem auto 0;

  > div:nth-child(4) {
    margin-top: 1rem;
  }

  > button {
    margin-top: 1rem;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.5rem;

  height: 11.625rem;
  width: 11.625rem;

  > img {
    height: 11.625rem;
    width: 11.625rem;
    border-radius: 50%;
  }

  > label {
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0.375rem;
    bottom: 0.375rem;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray_700};
    }
  }
`
