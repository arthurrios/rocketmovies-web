import { IoStar, IoStarOutline } from 'react-icons/io5'
import { Container } from './styles'

export function Stars({ data }) {
  const stars = data.rating
  const outlinedStars = 5 - data.rating
  return (
    <Container>
      {Array.from({ length: stars }, (_, index) => (
        <IoStar key={index} />
      ))}
      {Array.from({ length: outlinedStars }, (_, index) => (
        <IoStarOutline key={index} />
      ))}
    </Container>
  )
}
