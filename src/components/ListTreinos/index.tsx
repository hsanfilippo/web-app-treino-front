import * as S from '../../styles/index'

const ListTreinos = () => {
  return (
    <>
      <S.Container>
        <S.Card>
          <S.CardTitleSmall>Nome do Treino 1</S.CardTitleSmall>
          <S.LineDivision />
          <S.Lista>
            <S.ItemLista>-- Exercicios</S.ItemLista>
            <S.ItemLista>-- minutos de cardio</S.ItemLista>
          </S.Lista>
          <S.ButtonPrimary>Abrir treino</S.ButtonPrimary>
        </S.Card>
      </S.Container>
    </>
  )
}

export default ListTreinos
