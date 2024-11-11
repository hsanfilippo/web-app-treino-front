import styled from 'styled-components'

import { cores } from '../../styles'

export const ExercicioCard = styled.div`
  background: linear-gradient(0deg, ${cores.corSecundaria} 0%, #533ee2 85%);
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icones {
    background-color: #fff;
    cursor: pointer;
    font-size: 35px;
    border-radius: 8px;
    padding: 4px;
  }

  .alarm-icon {
    background-color: #fff;
    border-radius: 3px;
    height: 20 px;
    margin-right: 8px;
  }
`

export const ExercicioContainer = styled.div`
  width: 230px;
`

export const SubsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 150px;
`

export const SubsExercicio = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  width: 120px;
  margin-right: 6px;
  margin-bottom: 8px;

  span {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    margin: 0 6px;
  }
`

export const IconExcluir = styled.img`
  max-width: 55px;
  border-radius: 50px;
`

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

  .hidden {
    display: none;
  }
`

export const InputTreinoEdit = styled.input`
  color: #fff;
  width: 250px;
  height: 5vh;
  font-size: 16px;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 12px;
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

export const InputNumberEdit = styled.input`
  border: none;
  width: 38px;
  height: 26px;
  text-align: center;
  border-radius: 4px;
  margin-right: 6px;
  margin: 0;
  padding: 2px;
`

export const LabelExercicio = styled.label`
  color: #fff;
  margin-left: 8px;
`
