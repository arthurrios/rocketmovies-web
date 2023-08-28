import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'
import { Button } from '../../components/Button'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="email" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />
        <Button title="Entrar" />

        <Link to="/">
          <IoMdArrowBack />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
