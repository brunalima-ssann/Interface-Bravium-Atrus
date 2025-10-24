import { useState, useEffect } from 'react'
import Styles from '../css/relogio.module.css'

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date())

  useEffect(() => {
    // Atualiza a hora a cada 1 segundo
    const intervalo = setInterval(() => {
      setHoraAtual(new Date())
    }, 1000)

    // limpa o intervalo ao desmontar
    return () => clearInterval(intervalo)
  }, [])

  const opcoesData = { year: 'numeric', month: 'numeric', day: 'numeric' }
  const dataFormatada = horaAtual.toLocaleDateString('pt-BR', opcoesData)
  const horaFormatada = horaAtual.toLocaleTimeString('pt-BR', { hour12: false })

  return (
    <div className={Styles.relogio}>
      <div className={Styles.relogio2}>
        <span className={Styles.hora}>{horaFormatada}</span>
        <span className={Styles.data}>{dataFormatada}</span>
      </div>
    </div>
  )
}

export default Relogio
