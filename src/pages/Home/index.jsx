import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Container, TitleAndButton } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { MovieCard } from '../../components/MovieCard'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <TitleAndButton>
          <h1>Meus filmes</h1>
          <Button title="Adicionar filme" icon={AiOutlinePlus} />
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
