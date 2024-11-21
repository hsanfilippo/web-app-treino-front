import { cores } from '../../styles'

import styled from 'styled-components'

export const DescTreinoContainer = styled.div`
  margin: 24px 0 30px;
`

export const TreinoInfoContainer = styled.div`
  display: inline;

  span {
    font-weight: 400;
  }
`

export const ResumoTreino = styled.div`
  background-color: red;
`

export const EditDeleteDiv = styled.div`
  display: inline;
`

export const ButtonEditDelete = styled.button`
  background-color: transparent;
  color: ${cores.textoPrimario};
  height: 40px;
  width: 70px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: 2px solid ${cores.corSecundaria};
  cursor: pointer;
  margin-right: 8px;
`

export const EditadoEm = styled.div`
  margin-top: 20px;
`
