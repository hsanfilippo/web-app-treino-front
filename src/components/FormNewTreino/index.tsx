import * as S from '../../styles/index'
import * as Styles from './styles'

const FormNewTreino = () => {
  return (
    <>
      <S.Container>
        <S.Card>
          <Styles.FormContainer>
            <input
              type="text"
              name="nome_do_treino"
              placeholder="nome do treino"
            />
            <textarea placeholder="Descrição" />
          </Styles.FormContainer>
          <S.LgButtonSecondary>Criar</S.LgButtonSecondary>
        </S.Card>
      </S.Container>
    </>
  )
}

export default FormNewTreino
