import { useNavigate } from 'react-router-dom'

import * as Global from '../../styles'
import * as Txt from '../../styles/text'
import * as S from './styles'

const FormLoginRegister = () => {
  const navigate = useNavigate()

  return (
    <>
      <Global.Container>
        <S.AvisoSenha>
          <Txt.TitleBig>Aviso</Txt.TitleBig>
          <Txt.TextMd>
            Ainda não criei a autenticação, e os modelos de usuários.
          </Txt.TextMd>
          <Txt.TextMd>Apenas clique em Entrar para continuar</Txt.TextMd>
        </S.AvisoSenha>
        <S.CardLogin>
          <div className="image-placeholder">
            <img
              src="https://static-file-vault.vercel.app/smash_fit/logo-white.png"
              alt=""
            />
          </div>
          <div className="formContainer">
            <form action="submit">
              <label htmlFor="userEmail">E-mail</label>
              <input type="email" name="userEmail" id="" />
              <label htmlFor="userPass">Senha</label>
              <input type="password" name="userPass" id="" />
              <S.LoginButton type="submit" onClick={() => navigate('/home')}>
                Entrar
              </S.LoginButton>
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
