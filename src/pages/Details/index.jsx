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
  const [date, setDate] = useState({})

  const params = useParams()
  const navigate = useNavigate()

  const authorAvatar = data.author_avatar
    ? `${api.defaults.baseURL}/files/${data.author_avatar}`
    : avatarPlaceholder

  async function handleRemove() {
    const confirm = window.confirm('Are you sure you want to delete this note?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()

    async function fetchCreatedAt() {
      const response = await api.get(`/notes/${params.id}`)
      const createdAt = response.data.created_at
      const [date, time] = createdAt.split(' ')
      const [yearLong, month, day] = date.split('-')
      const [hourRaw, minute] = time.split(':')
      const year = yearLong.slice(2)
      const hour = (hourRaw - 3).toString().padStart(2, '0')

      const formattedDate = `${day}/${month}/${year}`
      const formattedTime = `${hour}:${minute}`

      setDate({ formattedDate, formattedTime })
    }

    fetchCreatedAt()
  }, [params.id])
  console.log(data.tags)
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
                  <span>
                    {date.formattedDate} às {date.formattedTime}
                  </span>
                </div>
              </AuthorAndDate>
              {data.tags && <Tags data={data} />}
              <p style={{ whiteSpace: 'pre-wrap' }}>{data.description}</p>
            </main>
            <Button exclude title="Excluir filme" onClick={handleRemove} />
          </>
        )}
      </Container>
    </>
  )
}
