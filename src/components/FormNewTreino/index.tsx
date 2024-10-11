import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from '../../styles/index'
import * as Styles from './styles'

const FormNewTreino = () => {
  const [error, setError] = useState<string | null>(null)
  const [nome, SetNome] = useState<string>('')
  const [descricao, SetDescricao] = useState<string>('')
  const [treinos, setTreinos] = useState<any[]>([])

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
            <input
              type="text"
              value={nome}
              onChange={(e) => SetNome(e.target.value)}
              placeholder="Nome do treino"
            />
            <textarea
              value={descricao}
              onChange={(e) => SetDescricao(e.target.value)}
              placeholder="Descrição"
            />
            <S.LgButtonPrimary type="button">
              Adicionar exercício
            </S.LgButtonPrimary>
            <S.LgButtonSecondary type="submit">Criar</S.LgButtonSecondary>
          </Styles.FormContainer>
        </S.Card>
      </S.Container>
    </>
  )
}

export default FormNewTreino
