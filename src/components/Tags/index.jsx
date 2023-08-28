import { Container, Tag } from './styles'

export function Tags({ card = false }) {
  return (
    <Container>
      <Tag $card={card.toString()}>Ficção Científica</Tag>
      <Tag $card={card.toString()}>Drama</Tag>
      <Tag $card={card.toString()}>Família</Tag>
    </Container>
  )
}
