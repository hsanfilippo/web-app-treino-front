import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  corTexto: '#121714',
  corFundo: '#2b2b2b',
  corPrincipal: '#B2FF54',
  corSecundaria: '#833EE2',
  corBotaoPrimario: '#fff',
  corBotaoSecundario: '#6340FF',
  corBotaoDelete: 'red',
  corBotaoEdit: 'orange'
}

export const gradients = {
  gradientPurple: 'linear-gradient(180deg, #110d17, #231339);'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto}
  }

  body {
    background: ${gradients.gradientPurple};
    padding-bottom: 80px;
    height: 100vh;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`
export const Container = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 0 auto;
`

export const MediumTitle = styled.p`
  color: ${cores.corPrincipal};
  font-size: 24px;
  text-align: center;
  margin-top: 48px;
  font-weight: bold;
`
// Card class

export const Card = styled.div`
  margin-top: 36px;
  padding: 32px;
  border: 2px solid ${cores.corSecundaria};
  border-radius: 8px;
  text-align: center;
`

export const CardTitle = styled.h2`
  color: ${cores.corSecundaria};
  font-size: 30px;
`

export const CardTitleSmall = styled.h2`
  color: ${cores.corSecundaria};
  font-size: 20px;
`

// List class

export const Lista = styled.ul`
  color: ${cores.corSecundaria};
  margin: 24px 0 48px 0;
`

export const ItemLista = styled.li`
  margin-top: 8px;
  text-align: left;
  color: ${cores.corSecundaria};
  font-size: 18px;
`

// Buttons class

export const ButtonContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const ButtonPrimary = styled.button`
  background-color: ${cores.corBotaoPrimario};
  color: ${cores.corPrincipal};
  height: 40px;
  width: 100px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const ButtonSecondary = styled.button`
  background-color: ${cores.corBotaoSecundario};
  color: ${cores.corSecundaria};
  height: 40px;
  width: 100px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const LgButtonPrimary = styled.button`
  background-color: transparent;
  color: ${cores.corSecundaria};
  height: 40px;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: 2px solid ${cores.corSecundaria};
  cursor: pointer;
  margin-bottom: 8px;
`
export const LgButtonSecondary = styled.button`
  background-color: ${cores.corSecundaria};
  color: #fff;
  height: 40px;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
`

export const ButtonDelete = styled.button`
  background-color: ${cores.corBotaoDelete};
  color: ${cores.corSecundaria};
  height: 40px;
  width: 100px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`

export const ButtonEdit = styled.button`
  background-color: ${cores.corBotaoEdit};
  color: ${cores.corSecundaria};
  height: 40px;
  width: 100px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`

// Form Styles

export const FormContainer = styled.form`
  display: flex-box;
  max-width: 100%;

  input {
    width: 100%;
    height: 8vh;
    font-size: 30px;
    padding: 6px;
    background: none;
    border: none;
    margin-bottom: 20px;
    text-align: center;
    color: #fff;
  }

  textarea {
    width: 100%;
    height: 80px;
    resize: none;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.07);
    border: none;
    border-radius: 8px;
    padding: 16px;
    color: #fff;
    text-align: center;
    margin-bottom: 16px;
  }
`

// Misc

export const LineDivision = styled.div`
  background-color: #fff;
  height: 2px;
  margin: 20px 0;
`
