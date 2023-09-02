/* eslint-disable react/no-unescaped-entities */
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Container, TitleAndButton } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Stars } from '../../components/Stars'
import { MovieCard } from '../../components/MovieCard'

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
          <MovieCard>
            <h2>Interestellar</h2>
            <Stars />
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se comunicar com ela. Pai e
              filha descobrem que o "fantasma" é uma inteligência desconhecida
              que está enviando mensagens codificadas através de radiação
              gravitacional, deixando coordenadas em binário que os levam até
              uma instalação secreta da NASA liderada pelo professor John Brand.
              O cientista revela que um buraco de minhoca foi aberto perto de
              Saturno e que ele leva a planetas que podem oferecer condições de
              sobrevivência para a espécie humana. As "missões Lázaro" enviadas
              anos antes identificaram três planetas potencialmente habitáveis
              orbitando o buraco negro Gargântua: Miller, Edmunds e Mann –
              nomeados em homenagem aos astronautas que os pesquisaram. Brand
              recruta Cooper para pilotar a nave espacial Endurance e recuperar
              os dados dos astronautas; se um dos planetas se mostrar habitável,
              a humanidade irá seguir para ele na instalação da NASA, que é na
              realidade uma enorme estação espacial. A partida de Cooper devasta
              Murphy.
            </p>
          </MovieCard>
          <MovieCard />
          <MovieCard />
        </main>
      </Container>
    </>
  )
}
