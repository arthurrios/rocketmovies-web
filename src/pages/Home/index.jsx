/* eslint-disable react/no-unescaped-entities */
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Container, TitleAndButton } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { MovieCard } from '../../components/MovieCard'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Input } from '../../components/Input'

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])
  return (
    <>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <Container>
        <TitleAndButton>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <Button title="Adicionar filme" icon={AiOutlinePlus} />
          </Link>
        </TitleAndButton>
        <main>
          {notes.map((note) => (
            <MovieCard
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </main>
      </Container>
    </>
  )
}
