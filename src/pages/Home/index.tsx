import Aviso from '../../components/Aviso'
import CardNovo from '../../components/CardNovo'

import * as S from '../../styles'

const Home = () => {
  return (
    <>
      <S.MediumTitle>Bem vindo, Usuário!</S.MediumTitle>
      <CardNovo />
      <Aviso />
    </>
  )
}

export default Home
