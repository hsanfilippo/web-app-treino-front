import * as Global from '../../styles'
import * as S from './styles'

const FormLoginRegister = () => {
  return (
    <>
      <Global.Container>
        <S.CardLogin>
          <div className="image-placeholder">
            <h3>image</h3>
          </div>
          <div className="formContainer">
            <form action="submit">
              <label htmlFor="userEmail">E-mail</label>
              <input type="email" name="userEmail" id="" />
              <label htmlFor="userPass">Senha</label>
              <input type="password" name="userPass" id="" />
              <S.LoginButton type="submit">Entrar</S.LoginButton>
              <S.RegisterButton type="button">Criar conta</S.RegisterButton>
              <a href="/">
                <p>Esqueceu sua senha?</p>
              </a>
            </form>
          </div>
        </S.CardLogin>
      </Global.Container>
    </>
  )
}

export default FormLoginRegister
