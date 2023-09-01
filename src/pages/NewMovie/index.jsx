import { ReturnButton } from '../../components/ReturnButton'
import { Header } from '../../components/Header'
import { Container, Form, Tags } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

export function NewMovie() {
  const { user } = useAuth()
  const author = user.name

  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deletedTag) {
    setTags((prevState) => prevState.filter((tag) => tag !== deletedTag))
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Please provide a title.')
    }

    if (!rating) {
      return alert('Please provide a rating.')
    }

    if (rating > 5 || rating < 1) {
      return alert('Please provide a rating between 1 and 5.')
    }

    if (!description) {
      return alert('Please provide a description.')
    }

    if (newTag) {
      return alert(
        'You left a tag in the field. Please add the new tag or leave the field empty.',
      )
    }

    await api.post('/notes', {
      title,
      rating,
      description,
      tags,
      author,
    })

    alert('Movie note created successfully!')
    navigate(-1)
  }

  return (
    <>
      <Header />
      <Container>
        <ReturnButton type="button" onClick={handleBack} />

        <main>
          <h1>Novo filme</h1>
          <Form>
            <div>
              <Input
                type="text"
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <TextArea
              type="text"
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
            <h2>Marcadores</h2>
            <Tags>
              {tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={String(tag).toLowerCase()}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <MovieItem
                isnew
                placeholder="Novo marcador"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
                value={newTag}
              />
            </Tags>

            <div className="buttons">
              <Button title="Salvar alterações" onClick={handleNewNote} />
            </div>
          </Form>
        </main>
      </Container>
    </>
  )
}
