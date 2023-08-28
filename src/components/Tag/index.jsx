import { Container } from './styles'

export function Tag({ title, ...props }) {
  return <Container {...props}>{title}</Container>
}
