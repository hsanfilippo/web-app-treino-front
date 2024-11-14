import * as S from '../../styles'
import * as Styles from './styles'
import * as Txt from '../../styles/text'

const Aviso = () => {
  return (
    <S.Container>
      <Styles.AvisoBody>
        <Txt.TitleBig>Aviso do desenvolvedor:</Txt.TitleBig>
        <S.LineDivision />
        <Txt.TextMd>
          Este site se trata de um projeto pessoal que ainda está em
          desenvolvimento, e serve como estudo tanto de front, quanto de back
          end.
        </Txt.TextMd>
        <Txt.TitleMd>Tecnologias utilizadas:</Txt.TitleMd>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          height="40"
          alt="python logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          height="40"
          alt="django logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          height="40"
          alt="django logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          height="40"
          alt="django logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          height="40"
          alt="django logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          height="40"
          alt="django logo"
        />
        <img width="12" />
        <Txt.TitleMd>Fale comigo:</Txt.TitleMd>
        <a href="https://www.linkedin.com/in/hsanfilippo/">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            height="40"
            alt="django logo"
          />
          <img width="12" />
        </a>
        <a href="https://www.instagram.com/h.sanfilippo_/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.png"
            height="40"
            alt="django logo"
          />
          <img width="12" />
        </a>
        <a href="https://github.com/hsanfilippo">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            height="40"
            alt="django logo"
          />
          <img width="12" />
        </a>
      </Styles.AvisoBody>
    </S.Container>
  )
}

export default Aviso
