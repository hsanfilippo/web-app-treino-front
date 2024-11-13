import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BiSolidTrash } from 'react-icons/bi'

import * as S from '../../styles/index'
import * as Styles from './styles'
import * as Txt from '../../styles/text'

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
    exercicios?: Exercicio[]
  ) => {
    try {
      const payloadAlteracoes = {
        nome,
        descricao,
        exercicios
      }
      console.log(JSON.stringify(payloadAlteracoes, null, 2))
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

  // Função que atualiza os campos de um determinado exercício:
  const handleInputChange = (index: number, field: string, value: any) => {
    setExercicios((prevExercicios) =>
      prevExercicios.map((exercicio, i) =>
        i === index ? { ...exercicio, [field]: value } : exercicio
      )
    )
  }

  const salvarTreino = (e: React.FormEvent) => {
    e.preventDefault()
    putTreino(nome, descricao, exercicios)
    alert('As alterações no treino foram salvas.')
    navigate('/treinos/')
  }

  if (!treino) return <div>Carregando...</div>

  return (
    <>
      <S.Container>
        <S.Card>
          <S.FormContainer>
            <Txt.TextMd>Clique em qualquer campo para editar</Txt.TextMd>
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
                      onChange={(e) =>
                        handleInputChange(index, 'nome_exerc', e.target.value)
                      }
                      value={exercicio.nome_exerc}
                    />
                    <Styles.SubsContainer>
                      <div>
                        <Styles.SubsExercicio>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) =>
                              handleInputChange(index, 'series', e.target.value)
                            }
                            value={exercicio.series}
                          />
                          <span>Serie(s)</span>
                        </Styles.SubsExercicio>
                        <Styles.SubsExercicio>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) =>
                              handleInputChange(index, 'reps', e.target.value)
                            }
                            value={exercicio.reps}
                          />
                          <span>Reps</span>
                        </Styles.SubsExercicio>
                      </div>
                      <div>
                        <Styles.SubsExercicio>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) =>
                              handleInputChange(index, 'carga', e.target.value)
                            }
                            value={exercicio.carga}
                          />
                          <span>kg</span>
                        </Styles.SubsExercicio>
                        <Styles.SubsExercicio>
                          <span>Interv.</span>
                          <Styles.InputNumberEdit
                            type="number"
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                'interv_seg',
                                e.target.value
                              )
                            }
                            value={exercicio.interv_seg}
                          />
                          <span>s</span>
                        </Styles.SubsExercicio>
                      </div>
                    </Styles.SubsContainer>
                  </Styles.ExercicioContainer>
                  <BiSolidTrash className="icones" />
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
