import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'
import { Button } from '../../components/Button'
import { IoMdArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Please fill all required fields.')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('User successfully signed up!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Not able to sign up.')
          console.log(error)
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <IoMdArrowBack />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
