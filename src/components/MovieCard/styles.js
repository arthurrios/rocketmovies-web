import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 14rem;
  padding: 2rem;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.pink_low};

  > h2 {
    margin-bottom: 0.5rem;
  }

  > p {
    margin-bottom: 1.5rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.gray_300};
    margin-top: 1rem;
    text-align: justify;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const Stars = styled.div`
  display: flex;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.pink};
`
