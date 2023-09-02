import { useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import { Container, HomeLink, Profile } from './styles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const userAvatar = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

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
              {user.name}
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
            <img src={userAvatar} alt="Foto do usuário" />
          </button>
        </Profile>
      </div>
    </Container>
  )
}
