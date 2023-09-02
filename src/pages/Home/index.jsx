/* eslint-disable react/no-unescaped-entities */
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Container, TitleAndButton } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Stars } from '../../components/Stars'
import { MovieCard } from '../../components/MovieCard'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])
  console.log(notes)
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
          {notes.map((note) => (
            <MovieCard key={String(note.id)} data={note} />
          ))}
        </main>
      </Container>
    </>
  )
}
