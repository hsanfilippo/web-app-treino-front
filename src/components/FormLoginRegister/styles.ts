import styled from 'styled-components'
import { cores } from '../../styles'

export const AvisoSenha = styled.div`
  text-align: center;
  margin-top: 32px;

  p {
    margin-top: 16px;
  }
`

export const CardLogin = styled.div`
  margin-top: 90px; // Ajustar essas medidas ou o background
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: ${cores.corSecundaria};

  .image-placeholder {
    background-color: ${cores.corSecundariaSub};
    padding: 24px;
    border-radius: 8px;
  }

  img {
    height: 100px;
  }

  .formContainer {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 16px;
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
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  p {
    margin-top: 20px;
    transition: 0.1s ease;

    &:hover {
      transition: 0.1s ease;
      color: ${cores.corSecundariaSub};
    }
  }
`

export const LoginButton = styled.button`
  background-color: ${cores.corSecundariaSub};
  color: ${cores.textoPrimario};
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
