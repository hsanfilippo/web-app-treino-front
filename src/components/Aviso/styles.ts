import styled from 'styled-components'
import { cores } from '../../styles'

export const AvisoBody = styled.div`
  text-align: center;
  padding: 48px;

  h2,
  p {
    color: #fff;
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 32px;
  }

  img {
    filter: drop-shadow(0 0 3px ${cores.corSecundaria});
  }
`
