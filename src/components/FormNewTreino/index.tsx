import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from '../../styles/index'
import * as Styles from './styles'

const FormNewTreino = () => {
  type Exercicio = {
    nome_exerc: string
    series: number
    reps: number
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

  const postTreino = async (nome: string, descricao: string) => {
    try {
      const novoTreino = {
        nome,
        descricao
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

  const addExercicio = () => {
    const newExercicio: Exercicio = {
      nome_exerc: nomeExercicio,
      series: series,
      reps: reps,
      interv_seg: intervSeg
    }

    setExercicios([...exercicios, newExercicio])

    setNomeExercicio('')
    setSeries(0)
    setReps(0)
    setIntervSeg(0)

    setIsAdding(!isAdding)
  }

  function validateFields(inputNome: string, inputDesc: string) {
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

  const apenasCriar = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateFields(nome, descricao)) {
      postTreino(nome, descricao)
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
                  <S.CardTitleSmall>{exercicio.nome_exerc}</S.CardTitleSmall>
                  <S.CardTitleSmall>{exercicio.series}</S.CardTitleSmall>
                  <S.CardTitleSmall>{exercicio.reps}</S.CardTitleSmall>
                  <S.CardTitleSmall>{exercicio.interv_seg}</S.CardTitleSmall>
                </li>
              ))}
            </ul>
            <S.LgButtonPrimary
              type="button"
              className={isAdding ? 'isNotActive' : 'isActive'}
              onClick={() => setIsAdding(!isAdding)}
            >
              Novo exercicio
            </S.LgButtonPrimary>

            <form
              action="submit"
              className={isAdding ? 'isActive' : 'isNotActive'}
            >
              <Styles.InputExercicio
                type="text"
                placeholder="Novo exercicio:"
                className="isActive"
                onChange={(e) => setNomeExercicio(e.target.value)}
              />
              <div className="exercicios">
                <div className="numeric-container">
                  <Styles.InputExercicioNumber
                    type="number"
                    name="series"
                    min="0"
                    max="15"
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
                    onChange={(e) => setReps(Number(e.target.value))}
                  />
                  <Styles.LabelExercicio htmlFor="reps">
                    Reps
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
                  onChange={(e) => setIntervSeg(Number(e.target.value))}
                />
                <Styles.LabelExercicio htmlFor="intervalo">
                  Segundos
                </Styles.LabelExercicio>
              </div>
              <div className="exercicios">
                <S.LgButtonPrimary
                  type="button"
                  className={isAdding ? 'isActive' : 'isNotActive'}
                  onClick={addExercicio}
                >
                  Adicionar exercicio
                </S.LgButtonPrimary>
              </div>
            </form>

            <S.LgButtonSecondary type="submit">Criar</S.LgButtonSecondary>
          </Styles.FormContainer>
        </S.Card>
      </S.Container>
    </>
  )
}

export default FormNewTreino
