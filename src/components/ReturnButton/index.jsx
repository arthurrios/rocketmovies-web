import { IoMdArrowBack } from 'react-icons/io'
import { Container } from './styles'

export function ReturnButton({ ...props }) {
  return (
    <Container {...props}>
      <IoMdArrowBack />
      <p>Voltar</p>
    </Container>
  )
}
