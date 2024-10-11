import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as S from '../../styles/index'

const FormEditTreino = () => {
  const { id } = useParams()
  const [error, setError] = useState<string | null>(null)
  const [treino, setTreino] = useState<any>(null)
  const [nome, SetNome] = useState<string>('')
  const [descricao, SetDescricao] = useState<string>('')

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8000/api/treinos/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setTreino(data)
        SetNome(data.nome)
        SetDescricao(data.descricao)
      })
      .catch((error) => console.error('Erro ao carregar o treino', error))
  }, [id])

  const putTreino = async (nome: string, descricao: string) => {
    try {
      const novoTreino = {
        nome,
        descricao
      }

      const response = await fetch(`http://localhost:8000/api/treinos/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoTreino)
      })
      if (!response.ok) {
        throw new Error('Erro ao salvar o treino')
      }
      const data = await response.json()
      console.log('Treino atualizado:', data)
    } catch (err: any) {
      setError(err.message)
    }
  }

  const salvarTreino = (e: React.FormEvent) => {
    e.preventDefault()
    putTreino(nome, descricao)
    alert('Seu treino foi criado! ([POST]localhost:8000/api/treinos/)')
    navigate('/treinos/')
  }

  if (!treino) return <div>Carregando...</div>

  return (
    <>
      <h1>Página de editar o treino</h1>
      <S.Container>
        <S.Card>
          <S.FormContainer>
            <input
              type="text"
              onChange={(e) => SetNome(e.target.value)}
              value={nome}
            />
            <textarea
              onChange={(e) => SetDescricao(e.target.value)}
              value={descricao}
            />
            <S.LgButtonSecondary type="button" onClick={salvarTreino}>
              Salvar treino
            </S.LgButtonSecondary>
          </S.FormContainer>
        </S.Card>
      </S.Container>
    </>
  )
}

export default FormEditTreino
