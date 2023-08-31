import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Avatar, Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'
import { useNavigate } from 'react-router-dom'

export function Profile() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <ReturnButton />
        </button>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/arthurrios.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" disabled />
      </Form>
    </Container>
  )
}
