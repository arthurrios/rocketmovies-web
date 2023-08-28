import { Link } from 'react-router-dom'
import { Input } from '../Input'
import { Container, HomeLink, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <HomeLink to="/">
        <h1>RocketMovies</h1>
      </HomeLink>
      <div>
        <Input placeholder="Pesquisar pelo título" />
        <Profile to="/profile">
          <div>
            <strong>Arthur Rios</strong>
            <Link to="/">sair</Link>
          </div>

          <img src="https://github.com/arthurrios.png" alt="Foto do usuário" />
        </Profile>
      </div>
    </Container>
  )
}
