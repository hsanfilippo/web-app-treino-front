import styled from 'styled-components'

import { cores } from '../../styles'

export const ExercicioCard = styled.div`
  background: linear-gradient(0deg, ${cores.corSecundaria} 0%, #533ee2 85%);
  margin-bottom: 16px;
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

    path {
      color: ${cores.corSecundaria};
    }
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

// export const NomeExercicio = styled.h4`
//   color: #fff;
//   font-size: 22px;
//   margin-bottom: 8px;
// `

export const SubsExercicio = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: #fff;

  span {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
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
  font-weight: bold;
  color: ${cores.textoSecundario};
`

export const LabelExercicio = styled.label`
  color: #fff;
  margin-left: 8px;
`
