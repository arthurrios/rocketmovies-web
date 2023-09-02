/* eslint-disable react/no-unescaped-entities */
import { LuClock3 } from 'react-icons/lu'
import { Header } from '../../components/Header'
import { ReturnButton } from '../../components/ReturnButton'
import { AuthorAndDate, Container, TitleWithStars } from './styles'
import { Tags } from '../../components/Tags'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { Stars } from '../../components/Stars'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Details() {
  const [data, setData] = useState({})

  const params = useParams()
  const navigate = useNavigate()

  const authorAvatar = data.author_avatar
    ? `${api.defaults.baseURL}/files/${data.author_avatar}`
    : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [params.id])

  return (
    <>
      <Header />
      <Container>
        <ReturnButton onClick={handleBack} />
        {data && (
          <>
            <main>
              <TitleWithStars>
                <h1>{data.title}</h1>
                <Stars data={data} />
              </TitleWithStars>
              <AuthorAndDate>
                <div>
                  <img src={authorAvatar} alt="Foto do usuário" />
                  <span>Por {data.author}</span>
                </div>
                <div>
                  <LuClock3 />
                  <span>27/08/23 às 08:00</span>
                </div>
              </AuthorAndDate>
              <Tags />
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para
                uma sociedade agrária em futuro de data desconhecida. Cooper,
                ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
                filha de dez anos de Cooper, acredita que seu quarto está
                assombrado por um fantasma que tenta se comunicar com ela. Pai e
                filha descobrem que o "fantasma" é uma inteligência desconhecida
                que está enviando mensagens codificadas através de radiação
                gravitacional, deixando coordenadas em binário que os levam até
                uma instalação secreta da NASA liderada pelo professor John
                Brand. O cientista revela que um buraco de minhoca foi aberto
                perto de Saturno e que ele leva a planetas que podem oferecer
                condições de sobrevivência para a espécie humana. As "missões
                Lázaro" enviadas anos antes identificaram três planetas
                potencialmente habitáveis orbitando o buraco negro Gargântua:
                Miller, Edmunds e Mann – nomeados em homenagem aos astronautas
                que os pesquisaram. Brand recruta Cooper para pilotar a nave
                espacial Endurance e recuperar os dados dos astronautas; se um
                dos planetas se mostrar habitável, a humanidade irá seguir para
                ele na instalação da NASA, que é na realidade uma enorme estação
                espacial. A partida de Cooper devasta Murphy.
                <br />
                <br />
                Além de Cooper, a tripulação da Endurance é formada pela bióloga
                Amelia, filha de Brand; o cientista Romilly, o físico planetário
                Doyle, além dos robôs TARS e CASE. Eles entram no buraco de
                minhoca e se dirigem a Miller, porém descobrem que o planeta
                possui enorme dilatação gravitacional temporal por estar tão
                perto de Gargântua: cada hora na superfície equivale a sete anos
                na Terra. Eles entram em Miller e descobrem que é inóspito já
                que é coberto por um oceano raso e agitado por ondas enormes.
                Uma onda atinge a tripulação enquanto Amelia tenta recuperar os
                dados de Miller, matando Doyle e atrasando a partida. Ao
                voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos
                se passaram. Eles entram em Miller e descobrem que é inóspito já
                que é coberto por um oceano raso e agitado por ondas enormes.
                Uma onda atinge a tripulação enquanto Amelia tenta recuperar os
                dados de Miller, matando Doyle e atrasando a partida. Ao
                voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos
                se passaram.
              </p>
            </main>
            <Button exclude title="Excluir filme" />
          </>
        )}
      </Container>
    </>
  )
}
