import { Container } from './styles'

export function Button({
  icon: Icon,
  title,
  loading = false,
  exclude = false,
  ...props
}) {
  return (
    <Container
      type="button"
      disabled={loading}
      $exclude={exclude.toString()}
      {...props}
    >
      {Icon && <Icon />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
