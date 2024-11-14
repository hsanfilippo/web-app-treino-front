import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 0 auto;
`

export const MediumTitle = styled.p`
  color: ${cores.corPrincipal};
  font-size: 24px;
  text-align: center;
  margin-top: 48px;
  font-weight: bold;
`

export const Card = styled.div`
  background-color: ${cores.corPrincipal};
  margin-top: 36px;
  padding: 32px;
  border-radius: 8px;
  text-align: left;
  overflow: hidden;
  position: relative;
  height: 150px;
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    transition: 0.4s ease;
    scale: 1.03;
  }

  img {
    width: 60%;
    object-fit: cover;
    position: absolute;
    top: -10px;
    right: -20px;
  }
`

export const CardTitle = styled.h2`
  color: ${cores.corSecundaria};
  font-size: 30px;
`

export const CardTitleSmall = styled.h2`
  color: ${cores.corSecundaria};
  font-size: 20px;
`

export const Lista = styled.ul`
  color: ${cores.corSecundaria};
  margin: 24px 0 48px 0;
`

export const ItemLista = styled.li`
  margin-top: 8px;
  text-align: left;
  color: ${cores.corSecundaria};
  font-size: 18px;
`

export const ButtonContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const ButtonPrimary = styled.button`
  background-color: ${cores.corPrincipal};
  color: ${cores.corPrincipal};
  height: 40px;
  width: 100px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const ButtonSecondary = styled.button`
  background-color: ${cores.corSecundaria};
  color: ${cores.corSecundaria};
  height: 40px;
  width: 100px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
