import { useState } from 'react' // Hook useState para gerenciar estados locais
import Styles from '../css/login.module.css'
import logo from '../imagem/logo_login.png'
import Faixa from './faixa'
import icon_entrar from '../imagem/icon_entrar.png'

function Login() {
    // Estados do componente
    const [login, setLogin] = useState('') // Estado para armazenar o login digitado
    const [senha, setSenha] = useState('') // Estado para armazenar a senha digitada
    const [erro, setErro] = useState('') // Estado para armazenar mensagens de erro no login

    // Função para tratar o submit do formulário
    const handleSubmit = (e) => {
        e.preventDefault() // Evita o reload da página ao enviar o formulário

        // Validação simples de login e senha
        if (login === 'blima' && senha === '12345') {
            localStorage.setItem('nomeUsuario', 'Bruna Santos');
            window.location.href = '/entregas';
        } else if (login === 'jvamaral' && senha === '54321') {
            localStorage.setItem('nomeUsuario', 'João Amaral');
            window.location.href = '/entregas';
        } else {
            setErro('Usuário ou senha incorretos.');
        }
    }

    return (
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
                                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Digite seu login"/>

                                <label>Senha:</label>
                                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>

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

// Exporta o componente para ser usado em outras partes do projeto
export default Login
