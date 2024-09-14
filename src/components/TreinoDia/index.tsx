import * as S from './styles'

const TreinoDia = () => {

  return (
    <>
      <S.Container>
        <S.MediumTitle>Seu treino de hoje</S.MediumTitle>
        <S.Card>
          <S.CardTitle>Dia de Peito</S.CardTitle>
          <S.Lista>
            <S.ItemLista>Supino inclinado halter</S.ItemLista>
            <S.ItemLista>Supino reto halter</S.ItemLista>
            <S.ItemLista>Supino inclinado maq.</S.ItemLista>
            <S.ItemLista>Flexao de braco</S.ItemLista>
            <S.ItemLista>Esteira 6.5km/h - 20min</S.ItemLista>
          </S.Lista>
          <S.ButtonContainer>
            <S.ButtonSecondary>Ver mais</S.ButtonSecondary>
            <S.ButtonPrimary>Comecar</S.ButtonPrimary>
          </S.ButtonContainer>
        </S.Card>
      </S.Container>
    </>

  )
}

export default TreinoDia;
