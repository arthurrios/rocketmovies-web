import { ReturnButton } from '../../components/ReturnButton'
import { Header } from '../../components/Header'
import { Container, Form, Tags } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'
import { Link } from 'react-router-dom'

export function NewMovie() {
  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <ReturnButton />
        </Link>
        <main>
          <h1>Novo filme</h1>
          <Form>
            <div>
              <Input type="text" placeholder="Título" />
              <Input type="number" placeholder="Sua nota (de 0 a 5)" />
            </div>
            <TextArea type="text" placeholder="Observações" />
            <h2>Marcadores</h2>
            <Tags>
              <MovieItem value="React" />
              <MovieItem value="Styled-components" />
              <MovieItem value="Nodejs" />
              <MovieItem isnew placeholder="Novo marcador" />
            </Tags>

            <div className="buttons">
              <Button exclude title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
          </Form>
        </main>
      </Container>
    </>
  )
}
