import { Container } from './styles'

export function TextArea({ value, ...props }) {
  return <Container {...props}>{value}</Container>
}
