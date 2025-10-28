import { useState } from 'react'
import { FaSignInAlt, FaChevronDown } from 'react-icons/fa'
import Styles from '../css/login.module.css'
import logo from '../imagem/logo_login.png'
import Faixa from './faixa'

function Login() {
    const [placa, setPlaca] = useState('')
    const [modelo, setModelo] = useState('')
    const [erro, setErro] = useState('')
    const [carroValido, setCarroValido] = useState(false)
    const [motoristaSelecionado, setMotoristaSelecionado] = useState(null)
    const [dropdownAberto, setDropdownAberto] = useState(false)

    const motoristas = [
        { id: 1, nome: 'Bruna Santos Lima' },
        { id: 2, nome: 'João Vitor Amaral' },
        { id: 3, nome: 'Isabella Preto' },
        { id: 4, nome: 'Victor Ramon'}
    ]

    // Validação fixa do carro
    const handleSubmit = (e) => {
        e.preventDefault()
        if (placa.toUpperCase() === 'ABC1234' && modelo.toUpperCase() === 'FIAT FIORINO') {
            setCarroValido(true)
            setErro('')
        } else {
            setErro('Carro não encontrado.')
        }
    }

    const handleConfirmarMotorista = () => {
        if (!motoristaSelecionado) {
            setErro('Selecione um motorista antes de continuar.')
            return
        }

        localStorage.setItem('nomeUsuario', motoristaSelecionado.nome)
        localStorage.setItem('placaCarro', placa)
        localStorage.setItem('modeloCarro', modelo)
        window.location.href = '/entregas'
    }

    return (
        <>
            <Faixa />

            <section className={Styles.login}>
                <div className={Styles.container}>
                    <div className={Styles.logo}>
                        <img src={logo} alt="logo área de login" />
                    </div>

                    <div className={Styles.informacoes}>
                        <h1>Bem-vindo(a)</h1>
                        <h3>Entre com as informações do carro!</h3>

                        <div className={Styles.area_infos}>
                            <form className={Styles.form} onSubmit={handleSubmit}>
                                <label>Placa:</label>
                                <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Digite a placa do carro" />

                                <label>Modelo:</label>
                                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Digite o modelo do carro" />

                                {/* Campo Motorista aparece somente se o carro for validado */}
                                {carroValido && (
                                    <>
                                        <label>Motorista:</label>
                                        <div className={Styles.dropdown} onClick={() => setDropdownAberto(!dropdownAberto)}>
                                            {motoristaSelecionado? motoristaSelecionado.nome: 'Selecione o motorista'}
                                            <FaChevronDown className={Styles.dropdownLabel} />

                                            {dropdownAberto && (
                                                <ul className={Styles.dropdownList}> {motoristas.map((m) => (
                                                        <li key={m.id}>
                                                            <div
                                                                className={`${Styles.dropdownItem} ${motoristaSelecionado?.id === m.id ? Styles.dropdownItemSelecionado : ''}`}
                                                                onClick={() => {setMotoristaSelecionado(m) 
                                                                    setDropdownAberto(false)
                                                                }}>
                                                                {m.nome}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </>
                                )}

                                {erro && <p className={Styles.erro}>{erro}</p>}

                                {/* Botão Confirmar só aparece depois do campo motorista */}
                                {carroValido && (
                                    <button type="button" onClick={handleConfirmarMotorista} className={Styles.botao_entrar}>
                                        Confirmar
                                        <FaSignInAlt className={Styles.icon_entrar} />
                                    </button>
                                )}

                                {/* Botão Entrar só aparece antes da validação do carro */}
                                {!carroValido && (
                                    <button type="submit" className={Styles.botao_entrar}>
                                        Entrar
                                        <FaSignInAlt className={Styles.icon_entrar} />
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
