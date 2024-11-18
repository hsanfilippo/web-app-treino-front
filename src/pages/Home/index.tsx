import Aviso from '../../components/Aviso'
import CardNovo from '../../components/CardNovo'
import Header from '../../components/Header'

import * as S from '../../styles'

const Home = () => {
  return (
    <>
      <Header />
      <S.MediumTitle>Bem vindo, Usuário!</S.MediumTitle>
      <CardNovo />
      <Aviso />
    </>
  )
}

export default Home
