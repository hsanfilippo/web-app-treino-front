import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as S from '../../styles/index'
import * as Styles from './styles'

const FormEditTreino = () => {
  type Exercicio = {
    nome_exerc: string
    series: number
    reps: number
    carga: number
    interv_seg: number
  }

  const { id } = useParams()
  const [error, setError] = useState<string | null>(null)
  const [treino, setTreino] = useState<any>(null)
  const [nome, SetNome] = useState<string>('')
  const [descricao, SetDescricao] = useState<string>('')
  const [exercicios, setExercicios] = useState<Exercicio[]>([])

  const [nomeExercicio, setNomeExercicio] = useState<string>('')
  const [series, setSeries] = useState<number>(0)
  const [reps, setReps] = useState<number>(0)
  const [carga, setCarga] = useState<number>(0)
  const [intervSeg, setIntervSeg] = useState<number>(0)

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8000/api/treinos/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setTreino(data)
        SetNome(data.nome)
        SetDescricao(data.descricao)
        setExercicios(data.exercicios)
      })
      .catch((error) => console.error('Erro ao carregar o treino', error))
  }, [id])

  const putTreino = async (
    nome: string,
    descricao: string,
    exercicios?: Exercicio
  ) => {
    try {
      const payloadAlteracoes = {
        nome,
        descricao,
        exercicios
      }

      const response = await fetch(`http://localhost:8000/api/treinos/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payloadAlteracoes)
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
    alert('As alterações no treino foram salvas.')
    navigate('/treinos/')
  }

  if (!treino) return <div>Carregando...</div>

  return (
    <>
      <h1>Página de editar o treino</h1>
      <S.Container>
        <S.Card>
          <S.FormContainer>
            <S.NomeTreinoForm
              type="text"
              onChange={(e) => SetNome(e.target.value)}
              value={nome}
            />
            <S.DescTreinoForm
              onChange={(e) => SetDescricao(e.target.value)}
              value={descricao}
            />
            {exercicios.map((exercicio, index) => (
              <div key={index}>
                <Styles.ExercicioCard>
                  <Styles.ExercicioContainer>
                    <Styles.InputTreinoEdit
                      type="text"
                      onChange={(e) => setNomeExercicio(e.target.value)}
                      value={exercicio.nome_exerc}
                    />
                    <Styles.SubsContainer>
                      <div>
                        <Styles.SubsExercicio>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) => setSeries(Number(e.target.value))}
                            value={exercicio.series}
                          />
                          <span>Serie(s)</span>
                        </Styles.SubsExercicio>
                        <Styles.SubsExercicio>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) => setReps(Number(e.target.value))}
                            value={exercicio.reps}
                          />
                          <span>Reps</span>
                        </Styles.SubsExercicio>
                      </div>
                      <div>
                        <Styles.SubsExercicio>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) => setCarga(Number(e.target.value))}
                            value={exercicio.carga}
                          />
                          <span>kg</span>
                        </Styles.SubsExercicio>
                        <Styles.SubsExercicio>
                          <span>Interv.</span>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) =>
                              setIntervSeg(Number(e.target.value))
                            }
                            value={exercicio.interv_seg}
                          />
                          <span>s</span>
                        </Styles.SubsExercicio>
                      </div>
                    </Styles.SubsContainer>
                  </Styles.ExercicioContainer>
                </Styles.ExercicioCard>
              </div>
            ))}
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
