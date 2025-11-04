import Styles from '../css/usuario.module.css'
import { useState, useEffect } from 'react'
import Faixa from './faixa'
import Relogio from './relogio'
import { Link } from 'react-router-dom'
import icon_user from '../imagem/icon_user.png'

function Usuario() {
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        telefone: '',
        email: ''
    })
    const [carro, setCarro] = useState({
        Placa: '',
        Modelo: '',
        Cor: '',
        Ano: ''
    })

    useEffect(() => {
        const motoristaSalvo = JSON.parse(localStorage.getItem('motorista'))
        if (motoristaSalvo) {
            setNome(motoristaSalvo.nomeFormatado)
        }
    }, [])

    useEffect(() => {
        // 🔹 Puxa o motorista completo
        const motoristaSalvo = JSON.parse(localStorage.getItem('motorista'))
        if (motoristaSalvo) {
            setNome(motoristaSalvo.nomeFormatado)
            setUsuario({
                nomeCompleto: motoristaSalvo["Nome"] || '-',
                dataNascimento: motoristaSalvo["Data de nascimento"] || '-',
                telefone: motoristaSalvo["Telefone"] || '-',
                email: motoristaSalvo["Email"] || '-'
            })
        }

        // 🔹 Puxa o carro completo
        const carroSalvo = JSON.parse(localStorage.getItem('carro'))
        if (carroSalvo) {
            setCarro(carroSalvo)
        }
    }, [])

    return (
        <>
            <Faixa />
            <Relogio />

            <section className={Styles.usuario}>
                <div className={Styles.area_usuario}>
                    <h1>Meus dados</h1>
                    <Link to='/usuario' className={Styles.imgusuario}>
                        <img src={icon_user} alt='área do usuário' />
                    </Link>
                </div>

                <div className={Styles.infos_carro}>
                    <h2>Dados do carro</h2>
                    <div className={Styles.container_carro}>
                        <div className={Styles.informacoes_carro}>
                            <div className={Styles.infos}>
                                <h5>Placa:</h5>
                                <div className={Styles.campo}>
                                    <p>{carro.Placa || '-'}</p>
                                </div>
                            </div>
                            <div className={Styles.infos}>
                                <h5>Modelo:</h5>
                                <div className={Styles.campo}>
                                    <p>{carro.Modelo || '-'}</p>
                                </div>
                            </div>
                            <div className={Styles.infos}>
                                <h5>Cor:</h5>
                                <div className={Styles.campo}>
                                    <p>{carro.Cor || '-'}</p>
                                </div>
                            </div>
                            <div className={Styles.infos}>
                                <h5>Ano:</h5>
                                <div className={Styles.campo}>
                                    <p>{carro.Ano || '-'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.infos_usuario}>
                    <h2>Dados pessoais</h2>
                    <div className={Styles.container_usuario}>
                        <div className={Styles.informacoes_user}>
                            <div className={Styles.infos}>
                                <h5>Nome:</h5>
                                <div className={Styles.campo}>
                                    <p>{usuario.nomeCompleto || '-'}</p>
                                </div>
                            </div>
                            <div className={Styles.infos}>
                                <h5>Data de nascimento:</h5>
                                <div className={Styles.campo}>
                                    <p>{usuario.dataNascimento || '-'}</p>
                                </div>
                            </div>
                            <div className={Styles.infos}>
                                <h5>Telefone:</h5>
                                <div className={Styles.campo}>
                                    <p>{usuario.telefone || '-'}</p>
                                </div>
                            </div>
                            <div className={Styles.infos}>
                                <h5>E-mail:</h5>
                                <div className={Styles.campo}>
                                    <p>{usuario.email || '-'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Usuario
