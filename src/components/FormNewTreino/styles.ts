import styled from 'styled-components'

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
