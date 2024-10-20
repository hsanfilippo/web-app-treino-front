import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-color: ${cores.corSecundaria};
  height: 15vh;

  h1 {
    color: #fff;
  }
`

export const ProfilePic = styled.img`
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    scale: 1.03;
  }
`

export const HeaderContainer = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
