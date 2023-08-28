import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Container, TitleAndButton } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { MovieCard } from '../../components/MovieCard'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <TitleAndButton>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <Button title="Adicionar filme" icon={AiOutlinePlus} />
          </Link>
        </TitleAndButton>
        <main>
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </main>
      </Container>
    </>
  )
}
