import { Navigate, useNavigate } from 'react-router-dom'
import * as S from './styles'

const CardNovo = () => {
  const navigate = useNavigate()

  return (
    <>
      <S.Container>
        <S.Card onClick={() => navigate('/treinos/new')}>
          <h2>
            Novo <br /> Treino
          </h2>
          <img src="https://static-file-vault.vercel.app/sapiens.svg" />
        </S.Card>
      </S.Container>
    </>
  )
}

export default CardNovo
