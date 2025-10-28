import Styles from '../css/usuario.module.css'
import { useState, useEffect } from 'react'
import Faixa from './faixa' 
import Relogio from './relogio'

function Usuario(){

    const [nome, setNome] = useState('') // Armazena o nome do usuário logado

    // Recupera o nome do usuário do localStorage ao montar o componente
        useEffect(() => {
            const nomeSalvo = localStorage.getItem('nomeUsuario')
            if (nomeSalvo) setNome(nomeSalvo);
        }, [])

    return(
        <>
        <Faixa/>
        <Relogio/>

        <section className={Styles.usuario}>
            <div className={Styles.area_usuario}>
                <h1>Olá {nome ? nome : '[Nome]'}!</h1>
            </div>
            <div className={Styles.infos_usuario}>

            </div>
        </section>

        
        </>
    )
}

export default Usuario