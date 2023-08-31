import { useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import { Container, HomeLink, Profile } from './styles'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleProfile() {
    navigate('/profile')
  }

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Container>
      <HomeLink to="/">
        <h1>RocketMovies</h1>
      </HomeLink>
      <div>
        <Input placeholder="Pesquisar pelo título" />
        <Profile to="/profile">
          <div>
            <button
              className="profile-name"
              type="button"
              onClick={handleProfile}
            >
              Arthur Rios
            </button>
            <button
              type="button"
              className="logout-button"
              onClick={handleSignOut}
            >
              sair
            </button>
          </div>
          <button
            type="button"
            className="profile-image"
            onClick={handleProfile}
          >
            <img
              src="https://github.com/arthurrios.png"
              alt="Foto do usuário"
            />
          </button>
        </Profile>
      </div>
    </Container>
  )
}
