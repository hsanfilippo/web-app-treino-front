import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex-box;
  max-width: 100%;

  .exercicios {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
  }

  .numeric-container {
    margin-right: 10px;
  }

  .isActive {
  }
`

export const InputTreino = styled.input`
  color: #fff;
  width: 100%;
  height: 8vh;
  font-size: 30px;
  padding: 6px;
  background: none;
  border: none;
  margin-bottom: 20px;
  text-align: center;
`

export const TextAreaTreino = styled.textarea`
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
`

export const InputExercicio = styled.input`
  border: none;
  height: 40px;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  margin: 8px 0;
  background-color: rgba(0, 0, 0, 0.07);
  color: #fff;
`

export const InputExercicioNumber = styled.input`
  border: 2px solid orange;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 8px;
`

export const LabelExercicio = styled.label`
  color: #fff;
  margin-left: 8px;
`
