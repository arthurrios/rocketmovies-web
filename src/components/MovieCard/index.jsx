/* eslint-disable react/no-unescaped-entities */
import { Container } from './styles'
import { Tags } from '../Tags'

import { Stars } from '../Stars'

export function MovieCard({ data, ...props }) {
  return (
    <Container {...props}>
      <h2>{data.title}</h2>
      <Stars data={data} card />
      <p>{data.description}</p>
      <Tags data={data} card />
    </Container>
  )
}
