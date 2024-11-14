import { Navigate, useNavigate } from 'react-router-dom'
import * as S from './styles'

const CardNovo = () => {
  const navigate = useNavigate()

  return (
    <>
      <S.Container>
        <S.Card onClick={() => navigate('/treinos/')}>
          <S.CardTitle>
            Meus <br /> Treinos
          </S.CardTitle>
          <img src="https://static-file-vault.vercel.app/sapiens_fem_color.svg" />
        </S.Card>
        <S.Card onClick={() => navigate('/treinos/new')}>
          <S.CardTitle>
            Novo <br /> Treino
          </S.CardTitle>
          <img src="https://static-file-vault.vercel.app/sapiens_color.svg" />
        </S.Card>
      </S.Container>
    </>
  )
}

export default CardNovo
