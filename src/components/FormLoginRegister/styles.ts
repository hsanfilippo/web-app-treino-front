import styled from 'styled-components'
import { cores } from '../../styles'

export const CardLogin = styled.div`
  margin: 57% 0; // Ajustar essas medidas ou o background
  padding: 32px;
  border-radius: 8px;
  text-align: center;
  background-color: ${cores.corSecundaria};

  .formContainer {
    display: flex;
    justify-content: center;
    margin-top: 80px;
  }

  form {
    width: 80%;
  }

  label {
    font-weight: 400;
    font-size: 16px;
  }

  input {
    margin: 8px 0px 36px 0px;
    display: block;
    height: 40px;
    width: 100%;
    color: ${cores.corSecundaria};
    padding: 16px;
    border-radius: 10px;
    border: none;
  }

  p {
    margin-top: 20px;
  }
`

export const LoginButton = styled.button`
  background-color: #fff;
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

export const RegisterButton = styled.button`
  background-color: transparent;
  color: ${cores.textoPrimario};
  height: 40px;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: 2px solid ${cores.corSecundariaSub};
  cursor: pointer;
  margin-bottom: 8px;
`
