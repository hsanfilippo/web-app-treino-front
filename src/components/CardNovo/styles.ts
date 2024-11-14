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
  background-color: ${cores.corSecundaria};
  margin-top: 36px;
  padding: 32px;
  border-radius: 8px;
  text-align: left;
  overflow: hidden;
  position: relative;
  height: 150px;
  cursor: pointer;
  transition: 0.4s ease;

  h2 {
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.4));
    font-size: 36px;
  }

  &:hover {
    transition: 0.2s ease;
    background: none;
    border: 3px solid ${cores.corSecundaria};

    img {
      transition: 0.2s ease;
      filter: grayscale(0%);
    }
  }

  img {
    width: 60%;
    object-fit: cover;
    position: absolute;
    top: -10px;
    right: -20px;
    filter: grayscale(100%);
  }
`

export const CardTitle = styled.h2`
  color: ${cores.textoPrimario};
  font-size: 30px;
`

export const CardSubTitle = styled.h3`
  color: ${cores.textoPrimario};
  font-size: 24px;
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
