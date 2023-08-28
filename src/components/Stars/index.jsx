import { IoStar, IoStarOutline } from 'react-icons/io5'
import { Container } from './styles'

export function Stars({ sm = false }) {
  return (
    <Container $sm={sm.toString()}>
      <IoStar />
      <IoStar />
      <IoStar />
      <IoStar />
      <IoStarOutline />
    </Container>
  )
}
