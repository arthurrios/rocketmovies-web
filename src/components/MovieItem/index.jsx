import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function MovieItem({ isnew, value, onClick, ...props }) {
  function InputLength() {
    if (!isnew) {
      const { length } = value

      const inputLength = (length * 8 + 2) / 16

      return inputLength
    }
  }

  return (
    <Container $isnew={isnew}>
      <input
        type="text"
        value={value}
        readOnly={!isnew}
        style={{ width: `${InputLength()}rem` }}
        {...props}
      />
      <button onClick={onClick} type="button">
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
