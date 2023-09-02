import { Container, Tag } from './styles'

export function Tags({ card = false, data }) {
  return (
    <Container>
      {data.tags.map((tag) => (
        <Tag
          key={tag.id}
          $card={card.toString()}
          style={{ textTransform: 'capitalize' }}
        >
          {tag.name}
        </Tag>
      ))}
    </Container>
  )
}
