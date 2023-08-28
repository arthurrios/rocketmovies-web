import { Input } from '../Input'
import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <div>
        <Input placeholder="Pesquisar pelo título" />
        <Profile href="#">
          <div>
            <strong>Arthur Rios</strong>
            <a href="#">sair</a>
          </div>

          <img src="https://github.com/arthurrios.png" alt="Foto do usuário" />
        </Profile>
      </div>
    </Container>
  )
}
