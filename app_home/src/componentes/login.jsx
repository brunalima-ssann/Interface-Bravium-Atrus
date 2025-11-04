import { useState, useEffect } from 'react'
import { FaSignInAlt, FaChevronDown } from 'react-icons/fa'
import Styles from '../css/login.module.css'
import logo from '../imagem/logo_login.png'
import Faixa from './faixa'

function Login() {
    const [motoristas, setMotoristas] = useState([])
    const [carros, setCarros] = useState([])
    const [placa, setPlaca] = useState('')
    const [modelo, setModelo] = useState('')
    const [erro, setErro] = useState('')
    const [carroValido, setCarroValido] = useState(false)
    const [motoristaSelecionado, setMotoristaSelecionado] = useState(null)
    const [dropdownAberto, setDropdownAberto] = useState(false)

    useEffect(() => {
        // Carrega motoristas
        fetch('/motoristas.json')
            .then((res) => res.json())
            .then((data) => setMotoristas(data))
            .catch((err) => console.error('Erro ao carregar motoristas:', err))

        // Carrega carros
        fetch('/carros.json')
            .then((res) => res.json())
            .then((data) => setCarros(data))
            .catch((err) => console.error('Erro ao carregar carros:', err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (carros.length === 0) {
            setErro('Os dados dos carros ainda estão sendo carregados. Tente novamente em alguns segundos.')
            return
        }

        const carroEncontrado = carros.find(
            (carro) =>
                carro.Placa?.toUpperCase() === placa.toUpperCase() &&
                carro.Modelo?.toUpperCase() === modelo.toUpperCase()
        )

        if (carroEncontrado) {
            setCarroValido(true)
            setErro('')
        } else {
            setErro('Carro não encontrado.')
            setCarroValido(false)
        }
    }

    const handleConfirmarMotorista = () => {
        if (!motoristaSelecionado || !motoristaSelecionado.Nome) {
            setErro('Selecione um motorista antes de continuar.')
            return
        }

        const nomeCompleto = motoristaSelecionado.Nome?.trim().split(' ') || []
        const primeiroNome = nomeCompleto[0] || ''
        const nomeFormatado = primeiroNome

        const carroEncontrado = carros.find(
            (carro) =>
                carro.Placa?.toUpperCase() === placa.toUpperCase() &&
                carro.Modelo?.toUpperCase() === modelo.toUpperCase()
        )

        // 🔹 Salva no localStorage
        localStorage.setItem('motorista', JSON.stringify({
            ...motoristaSelecionado,
            nomeFormatado,
            nomeCompleto
        }))

        localStorage.setItem('carro', JSON.stringify(carroEncontrado))

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

                                {carroValido && (
                                    <>
                                        <label>Motorista:</label>
                                        <div className={Styles.dropdown} onClick={() => setDropdownAberto(!dropdownAberto)}>
                                            {motoristaSelecionado ? motoristaSelecionado.Nome : 'Selecione o motorista'}
                                            <FaChevronDown className={Styles.dropdownLabel} />

                                            {dropdownAberto && (
                                                <ul className={Styles.dropdownList}>
                                                    {motoristas.map((m) => (
                                                        <li key={m.Id}>
                                                            <div className={`${Styles.dropdownItem} ${motoristaSelecionado?.Id === m.Id ? Styles.dropdownItemSelecionado : ''}`}
                                                                onClick={() => {
                                                                    setMotoristaSelecionado(m)
                                                                    setDropdownAberto(false)
                                                                    setErro('')
                                                                }}
                                                            >
                                                                {m.Nome}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </>
                                )}

                                {erro && <p className={Styles.erro}>{erro}</p>}

                                {carroValido ? (
                                    <button type="button" onClick={handleConfirmarMotorista} className={Styles.botao_entrar}>
                                        Confirmar
                                        <FaSignInAlt className={Styles.icon_entrar} />
                                    </button>
                                ) : (
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
