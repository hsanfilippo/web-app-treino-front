import { useState } from "react"

const FormEditTreino = () => {
  const [nome, SetNome] = useState<string>('')
  const [descricao, SetDescricao] = useState<string>('')
  const [exerNome, SetExerNome] = useState<string>('')
  const [exerReps, setExerReps] = useState<number>(0)
  const [exerSeries, setExerSeries] = useState<number>(0)
  const [exerTecnica, setExerTecnica] = useState<string>('')

  return (
    <>
      <h1>Página de editar o treino</h1>
    </>
  )
}

export default FormEditTreino
