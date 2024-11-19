import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

import * as S from '../../styles/index'
import * as txt from '../../styles/text'
import * as styles from './styles'

const ListTreinos = () => {
  const [treinos, setTreinos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const fetchTreinos = async () => {
    try {
      const response = await fetch(
        `http://ec2-54-209-36-161.compute-1.amazonaws.com/api/treinos/?format=json`
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
        `http://ec2-54-209-36-161.compute-1.amazonaws.com/api/treinos/${id_treino}/`,
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
        {treinos.map((treino) => {
          const formatDate = format(new Date(treino.updated_at), 'dd/MM/yyyy')
          const formatTime = format(new Date(treino.updated_at), 'HH:mm')

          return (
            <S.Card key={treino.id}>
              <txt.TitleBig>{treino.nome}</txt.TitleBig>
              <styles.DescTreinoContainer>
                <txt.TextMd>{treino.descricao}</txt.TextMd>
              </styles.DescTreinoContainer>
              <S.LineDivision />
              <S.Lista>
                {treino.exercicios.map(
                  (exercicio: {
                    id: string
                    nome_exerc: string
                    series: number
                    reps: number
                    carga: number
                  }) => (
                    <S.ItemLista key={exercicio.id}>
                      <txt.TitleSm>{exercicio.nome_exerc}</txt.TitleSm>
                      <styles.TreinoInfoContainer>
                        <txt.TextNum>
                          {exercicio.series} <span>x</span> {exercicio.reps}{' '}
                          <span>reps -</span> {exercicio.carga}kg
                        </txt.TextNum>
                      </styles.TreinoInfoContainer>
                    </S.ItemLista>
                  )
                )}
              </S.Lista>
              <S.ButtonContainer>
                <div>
                  <S.ButtonDeleteEdit onClick={() => deleteTreino(treino.id)}>
                    Excluir
                  </S.ButtonDeleteEdit>
                  <S.ButtonDeleteEdit
                    onClick={() => navigate(`/treinos/${treino.id}/edit/`)}
                  >
                    Editar
                  </S.ButtonDeleteEdit>
                </div>
                <S.ButtonPrimary>Abrir treino</S.ButtonPrimary>
              </S.ButtonContainer>
              <styles.EditadoEm>
                <txt.TextSm>
                  Editado por ultimo em: {formatDate} às {formatTime}
                </txt.TextSm>
              </styles.EditadoEm>
            </S.Card>
          )
        })}
      </S.Container>
    </>
  )
}

export default ListTreinos
