import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input type="email" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />
        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
