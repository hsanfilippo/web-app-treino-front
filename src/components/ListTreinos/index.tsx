import React, { useState, useEffect } from 'react'

import * as S from '../../styles/index'

const ListTreinos = () => {
  const [treinos, setTreinos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

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
            <S.ButtonPrimary>Abrir treino</S.ButtonPrimary>
          </S.Card>
        ))}
      </S.Container>
    </>
  )
}

export default ListTreinos
