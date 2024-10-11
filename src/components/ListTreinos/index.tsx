import React, { useState, useEffect } from 'react'

import * as S from '../../styles/index'
import { useNavigate } from 'react-router-dom'

const ListTreinos = () => {
  const [treinos, setTreinos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const fetchTreinos = async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/treinos/?format=json'
      )
      if (!response.ok) {
        throw new Error('Erro ao requisitar os treinos da API')
      }
      const data = await response.json()
      setTreinos(data)
      setLoading(false)
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  const deleteTreino = async (id_treino: string) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/treinos/${id_treino}/`,
        {
          method: 'DELETE'
        }
      )
      if (!response.ok) {
        throw new Error('Erro ao deletar o treino da API')
      }
      setTreinos(treinos.filter((treino) => treino.id !== id_treino))
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchTreinos()
  }, [])

  if (loading) {
    return (
      <S.Container>
        Mensagem de loading aqui, precisa fazer algo bonitinho depois
      </S.Container>
    )
  }

  if (error) {
    return <S.Container>Msg de erro: {error}</S.Container>
  }

  return (
    <>
      <S.Container>
        {treinos.map((treino) => (
          <S.Card key={treino.id}>
            <S.CardTitleSmall>{treino.nome}</S.CardTitleSmall>
            <S.ItemLista>{treino.descricao}</S.ItemLista>
            <S.LineDivision />
            <S.Lista>
              {treino.exercicios.map(
                (exercicio: {
                  id: string
                  nome_exerc: string
                  series: number
                  reps: number
                }) => (
                  <S.ItemLista key={exercicio.id}>
                    {exercicio.nome_exerc} - {exercicio.series} x{' '}
                    {exercicio.reps} reps
                  </S.ItemLista>
                )
              )}
            </S.Lista>
            <S.ButtonContainer>
              <div>
                <S.ButtonDelete onClick={() => deleteTreino(treino.id)}>
                  Excluir
                </S.ButtonDelete>
                <S.ButtonEdit
                  onClick={() => navigate(`/treinos/${treino.id}/edit/`)}
                >
                  Editar
                </S.ButtonEdit>
              </div>
              <S.ButtonPrimary>Abrir treino</S.ButtonPrimary>
            </S.ButtonContainer>
            <S.ItemLista>
              Editado por ultimo em: {treino.updated_at}
            </S.ItemLista>
          </S.Card>
        ))}
      </S.Container>
    </>
  )
}

export default ListTreinos
