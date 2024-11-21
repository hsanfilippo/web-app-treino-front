import { useEffect, useState } from 'react'

import * as S from './styles'
import * as Txt from '../../styles/text'

const LoadingMsg = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <S.LoadingCard>
        <S.LoadingSpinner />
        <Txt.TextMd>
          Pode levar até 50s para carregar a página completamente.
        </Txt.TextMd>
        <img
          src="https://static-file-vault.vercel.app/esteira_modificado.svg"
          alt=""
        />
        <Txt.TextMd>
          Isto ocorre, pois a aplicação ainda está em fase inicial de
          desenvolvimento.
        </Txt.TextMd>
        <Txt.TextMd>
          Portanto, ao ficar um tempo sem nenhum acesso, o backend entra em
          pausa, e retorna apenas quando uma requisição é enviada.
        </Txt.TextMd>
      </S.LoadingCard>
    </>
  )
}

export default LoadingMsg
