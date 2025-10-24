import { useState } from 'react' 
import Styles from '../css/login.module.css'
import logo from '../imagem/logo_login.png'
import Faixa from './faixa'
import icon_entrar from '../imagem/icon_entrar.png'

function Login(){
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (login === 'blima' && senha === '12345') {
            localStorage.setItem('nomeUsuario', 'Bruna Santos')
            window.location.href = '/entregas'
        } else {
            setErro('Usuário ou senha incorretos.')
        }
    }

    return(

        <>
        <Faixa/>
        <section className={Styles.login}>
            <div className={Styles.container}>
                <div className={Styles.logo}>
                    <img src={logo} alt="logo área de login"/>
                </div>

                <div className={Styles.informacoes}>
                    <h1>Bem-vindo(a)</h1>

                    <div className={Styles.area_infos}>
                        <form className={Styles.form} onSubmit={handleSubmit}>
                            <label>Login:</label>
                            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Digite seu login" />

                            <label>Senha:</label>
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />

                            {erro && <p className={Styles.erro}>{erro}</p>}

                            <a href="#" className={Styles.link_esqueci}>
                                Esqueceu a senha?
                            </a>

                            <button type="submit" className={Styles.botao_entrar}>
                                Entrar
                                <img src={icon_entrar} alt="icone entrar"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
    
}

export default Login