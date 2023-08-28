import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2.25rem 7.6875rem 0;

  > main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2.375rem;
    padding-right: 1rem;
    max-height: 30.375rem;
    width: 100%;
    overflow-y: scroll;
  }
`

export const TitleAndButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-weight: 400;
    font-size: 2rem;
  }

  > button {
    width: 13rem;
  }
`
