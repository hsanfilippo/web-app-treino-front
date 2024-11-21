import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

import * as Global from '../../styles/index'
import * as Txt from '../../styles/text'
import * as S from './styles'
import LoadingMsg from '../LoadingMsg'

const ListTreinos = () => {
  const [treinos, setTreinos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const fetchTreinos = async () => {
    try {
      const response = await fetch(
        `https://web-app-treino-back.onrender.com/api/treinos/?format=json`
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
        `https://web-app-treino-back.onrender.com/api/treinos/${id_treino}/`,
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
      <Global.Container>
        <LoadingMsg />
      </Global.Container>
    )
  }

  if (error) {
    return <Global.Container>Msg de erro: {error}</Global.Container>
  }

  return (
    <>
      <Global.Container>
        {treinos.map((treino) => {
          const formatDate = format(new Date(treino.updated_at), 'dd/MM/yyyy')
          const formatTime = format(new Date(treino.updated_at), 'HH:mm')

          return (
            <Global.Card key={treino.id}>
              <Txt.TitleBig>{treino.nome}</Txt.TitleBig>
              <S.DescTreinoContainer>
                <Txt.TextMd>{treino.descricao}</Txt.TextMd>
              </S.DescTreinoContainer>
              <Global.LineDivision />
              <Global.Lista>
                {treino.exercicios.map(
                  (exercicio: {
                    id: string
                    nome_exerc: string
                    series: number
                    reps: number
                    carga: number
                  }) => (
                    <Global.ItemLista key={exercicio.id}>
                      <Txt.TitleSm>{exercicio.nome_exerc}</Txt.TitleSm>
                      <S.TreinoInfoContainer>
                        <Txt.TextNum>
                          {exercicio.series} <span>x</span> {exercicio.reps}{' '}
                          <span>reps -</span> {exercicio.carga}kg
                        </Txt.TextNum>
                      </S.TreinoInfoContainer>
                    </Global.ItemLista>
                  )
                )}
              </Global.Lista>
              <Global.ButtonContainer>
                <S.EditDeleteDiv>
                  <S.ButtonEditDelete onClick={() => deleteTreino(treino.id)}>
                    Excluir
                  </S.ButtonEditDelete>
                  <S.ButtonEditDelete
                    onClick={() => navigate(`/treinos/${treino.id}/edit/`)}
                  >
                    Editar
                  </S.ButtonEditDelete>
                </S.EditDeleteDiv>
                <Global.ButtonPrimary>Abrir treino</Global.ButtonPrimary>
              </Global.ButtonContainer>
              <S.EditadoEm>
                <Txt.TextSm>
                  Editado por ultimo em: {formatDate} às {formatTime}
                </Txt.TextSm>
              </S.EditadoEm>
            </Global.Card>
          )
        })}
      </Global.Container>
    </>
  )
}

export default ListTreinos
