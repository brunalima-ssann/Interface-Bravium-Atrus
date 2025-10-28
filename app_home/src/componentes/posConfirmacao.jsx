// Componente para depois da tela de confirmação
import { FiCheck } from 'react-icons/fi';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../css/posConfirmacao.module.css'
import Relogio from './relogio'
import Faixa from './faixa'


function Pos_Confirmacao(){

    const navigate = useNavigate()//definindo navegação
    
   useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/entregas') 
   },5000)// tempo de permanência na tela (5 segundos)
    return () => clearTimeout(timer)
  }, [navigate])

    return(
        <>
        <Faixa/> {/* Decoração */}
        <Relogio/>{/* Decoração */}
        <section className={Styles.pos_confirmacao}>
            <div className={Styles.mensagem}>
                <div className={Styles.check}>
                    <FiCheck className={Styles.iconCheck}/>
                </div>
                <div className={Styles.texto}>
                    <h1>Entrega confirmada com sucesso!</h1>
                    <h3>Você já será direcionado para <br></br>a tela inicial</h3>
                </div>
            </div>
        </section>
        </>
    )
}

export default Pos_Confirmacao