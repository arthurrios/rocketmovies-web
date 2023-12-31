import { useNavigate } from 'react-router-dom'
import { Container, HomeLink, Profile } from './styles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ children }) {
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
        <h1>Rocket Movies</h1>
      </HomeLink>
      <div>
        {children}
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
