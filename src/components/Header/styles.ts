import styled from 'styled-components'
import { cores } from '../../styles'


export const Header = styled.header`
  background-color: ${cores.corPrincipal};
  height: 15vh;

  h1 {
    color: #fff;
  }

  img {
    border-radius: 50%;
  }
`

export const HeaderContainer = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
