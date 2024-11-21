import styled from 'styled-components'
import { cores } from '../../styles'

export const LoadingCard = styled.div`
  background-color: ${cores.corSecundariaSub};
  margin-top: 36px;
  padding: 32px;
  border: 2px solid ${cores.corSecundaria};
  border-radius: 8px;
  text-align: center;

  p {
    margin-top: 16px;
  }
`

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid ${cores.corSecundaria};
  border-top: 5px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 20px auto 50px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
