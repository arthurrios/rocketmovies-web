import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input
          type="email"
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
