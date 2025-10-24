import { useState } from 'react'
import Styles from '../css/detalhes.module.css'



function Detalhes(){

    return(
        <section className={Styles.detalhes}>
            <div className={Styles.texto1}>
                <h1>Detalhes da entrega</h1>
            </div>
        </section>
    )
}

export default Detalhes