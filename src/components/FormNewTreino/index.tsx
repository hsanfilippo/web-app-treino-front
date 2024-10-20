import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiEditAlt } from 'react-icons/bi'

import * as S from '../../styles/index'
import * as Styles from './styles'

const FormNewTreino = () => {
  type Exercicio = {
    nome_exerc: string
    series: number
    reps: number
    carga: number
    interv_seg: number
  }

  const [error, setError] = useState<string | null>(null)
  const [treinos, setTreinos] = useState<any[]>([])
  const [nome, setNome] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  const [exercicios, setExercicios] = useState<Exercicio[]>([])

  const [isAdding, setIsAdding] = useState<boolean>(false)

  const [nomeExercicio, setNomeExercicio] = useState<string>('')
  const [series, setSeries] = useState<number>(0)
  const [reps, setReps] = useState<number>(0)
  const [carga, setCarga] = useState<number>(0)
  const [intervSeg, setIntervSeg] = useState<number>(0)

  const fetchTreinos = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/treinos/')
      if (!response.ok) {
        throw new Error('Erro ao requisitar os treinos da API')
      }
      const data = await response.json()
      setTreinos(data)
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchTreinos()
  }, [])

  const navigate = useNavigate()

  const postTreino = async (
    nome: string,
    descricao: string,
    exercicios?: Exercicio[]
  ) => {
    try {
      const novoTreino = {
        nome,
        descricao,
        exercicios
      }

      const response = await fetch('http://localhost:8000/api/treinos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoTreino)
      })
      if (!response.ok) {
        throw new Error('Erro ao requisitar os treinos da API')
      }
      const data = await response.json()
    } catch (err: any) {
      setError(err.message)
    }
  }

  function validateFieldsTreino(inputNome: string, inputDesc: string) {
    if (inputNome.length === 0) {
      alert('Campo "Nome do treino" está vazio.')
      return false
    } else if (inputDesc.length === 0) {
      alert('Campo "Descrição" está vazio.')
      return false
    } else {
      return true
    }
  }

  function validateFieldsExerc(
    inputNome: string,
    inputSeries: number,
    inputReps: number,
    inputCarga: number,
    inputInterval: number
  ) {
    if (inputNome.length === 0) {
      alert('Campo "Nome do exercício" está vazio.')
      return false
    } else if (inputSeries < 1) {
      alert('Insira um número de séries à realizar.')
      return false
    } else if (inputReps < 1) {
      alert('Insira um número de repetições à realizar.')
      return false
    } else if (inputCarga < 0) {
      alert('Insira um peso adequado')
      return false
    } else if (inputInterval < 1) {
      alert('Insira um tempo de descanso (segundos).')
      return false
    } else {
      return true
    }
  }

  const addExercicio = () => {
    const newExercicio: Exercicio = {
      nome_exerc: nomeExercicio,
      series: series,
      reps: reps,
      carga: carga,
      interv_seg: intervSeg
    }

    if (validateFieldsExerc(nomeExercicio, series, reps, carga, intervSeg)) {
      setExercicios([...exercicios, newExercicio])

      setNomeExercicio('')
      setSeries(0)
      setReps(0)
      setCarga(0)
      setIntervSeg(0)

      setIsAdding(!isAdding)
    }
  }

  const apenasCriar = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateFieldsTreino(nome, descricao)) {
      postTreino(nome, descricao, exercicios)
      alert('Seu treino foi criado! ([POST]localhost:8000/api/treinos/)')
      navigate('/treinos/')
    }
  }

  if (error) {
    return <S.Container>Msg de erro: {error}</S.Container>
  }

  return (
    <>
      <S.Container>
        <S.Card>
          <Styles.FormContainer onSubmit={apenasCriar}>
            <Styles.InputTreino
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do treino"
            />
            <Styles.TextAreaTreino
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
            />
            <ul>
              {exercicios.map((exercicio, index) => (
                <li key={index}>
                  <Styles.ExercicioCard>
                    <Styles.ExercicioContainer>
                      <Styles.NomeExercicio>
                        {exercicio.nome_exerc}
                      </Styles.NomeExercicio>
                      <Styles.SubsContainer>
                        <div>
                          <Styles.SubsExercicio>
                            {exercicio.series} Series
                          </Styles.SubsExercicio>
                          <Styles.SubsExercicio>
                            {exercicio.reps} Reps
                          </Styles.SubsExercicio>
                        </div>
                        <div>
                          <Styles.SubsExercicio>
                            {exercicio.carga} kg
                          </Styles.SubsExercicio>
                          <Styles.SubsExercicio>
                            Desc. {exercicio.interv_seg}s
                          </Styles.SubsExercicio>
                        </div>
                      </Styles.SubsContainer>
                    </Styles.ExercicioContainer>
                    <BiEditAlt className="icones" />
                  </Styles.ExercicioCard>
                </li>
              ))}
            </ul>
            <S.LgButtonPrimary
              type="button"
              className={isAdding ? 'hidden' : 'isActive'}
              onClick={() => setIsAdding(!isAdding)}
            >
              Novo exercicio
            </S.LgButtonPrimary>

            <div className={isAdding ? 'isActive' : 'hidden'}>
              <Styles.InputExercicio
                type="text"
                placeholder="Novo exercicio:"
                className="isActive"
                value={nomeExercicio}
                onChange={(e) => setNomeExercicio(e.target.value)}
              />
              <div className="exercicios">
                <div className="numeric-container">
                  <Styles.InputExercicioNumber
                    type="number"
                    name="series"
                    min="0"
                    max="15"
                    value={series}
                    onChange={(e) => setSeries(Number(e.target.value))}
                  />
                  <Styles.LabelExercicio htmlFor="series">
                    Series
                  </Styles.LabelExercicio>
                </div>
                <div>
                  <Styles.InputExercicioNumber
                    type="number"
                    name="reps"
                    min="0"
                    max="50"
                    value={reps}
                    onChange={(e) => setReps(Number(e.target.value))}
                  />
                  <Styles.LabelExercicio htmlFor="reps">
                    Reps
                  </Styles.LabelExercicio>
                </div>
                <div>
                  <Styles.InputExercicioNumber
                    type="number"
                    name="carga"
                    min="0"
                    max="300"
                    value={carga}
                    onChange={(e) => setCarga(Number(e.target.value))}
                  />
                  <Styles.LabelExercicio htmlFor="carga">
                    Kg
                  </Styles.LabelExercicio>
                </div>
              </div>
              <div className="exercicios">
                <S.CardTitleSmall>Intervalo de</S.CardTitleSmall>
                <Styles.InputExercicioNumber
                  type="number"
                  name="intervalo"
                  min="0"
                  max="500"
                  value={intervSeg}
                  onChange={(e) => setIntervSeg(Number(e.target.value))}
                />
                <Styles.LabelExercicio htmlFor="intervalo">
                  Segundos
                </Styles.LabelExercicio>
              </div>
              <div>
                <S.LgButtonPrimary
                  type="button"
                  className={isAdding ? 'isActive' : 'hidden'}
                  onClick={() => setIsAdding(!isAdding)}
                >
                  Cancelar
                </S.LgButtonPrimary>
                <S.LgButtonPrimary
                  type="button"
                  className={isAdding ? 'isActive' : 'hidden'}
                  onClick={addExercicio}
                >
                  Adicionar exercicio
                </S.LgButtonPrimary>
              </div>
            </div>

            <S.LgButtonSecondary type="submit">Criar</S.LgButtonSecondary>
          </Styles.FormContainer>
        </S.Card>
      </S.Container>
    </>
  )
}

export default FormNewTreino
