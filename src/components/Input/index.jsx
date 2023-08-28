import { Container } from './styles'

export function Input({ icon: Icon, ...props }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...props} />
    </Container>
  )
}
