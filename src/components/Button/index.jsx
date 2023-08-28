import { Container } from './styles'

export function Button({ icon: Icon, title, loading = false, ...props }) {
  return (
    <Container type="button" disabled={loading} {...props}>
      {Icon && <Icon />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
