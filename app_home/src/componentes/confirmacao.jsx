import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFileAlt, FaPaperclip, FaTrashAlt, FaCamera } from 'react-icons/fa'
import Styles from '../css/confirmacao.module.css'
import Relogio from './relogio'
import Faixa from './faixa'

function Confirmacao() {
    const [nome, setNome] = useState('') // Armazena o nome do usuário logado
    const [arquivos, setArquivos] = useState([]) // Armazena arquivos anexados
    const [abrirCamera, setAbrirCamera] = useState(false) // Estado para abrir modal de câmera (em teste)

    const navigate = useNavigate() // Permite navegar para outra rota

     // Carrega o nome do usuário do localStorage
 useEffect(() => {
  const motoristaSalvo = JSON.parse(localStorage.getItem('motorista'))
  if (motoristaSalvo) {
    setNome(motoristaSalvo.nomeFormatado)
  }
}, [])

    /**
     * Adiciona novos arquivos à lista
     * Recebe arquivos do input e concatena aos já existentes
     */
    const handleArquivoChange = (event) => {
        const novosArquivos = Array.from(event.target.files)
        setArquivos((prev) => [...prev, ...novosArquivos])
    }

    /**
     * Remove um arquivo específico da lista
     * index: posição do arquivo a ser removido
     */
    const handleRemoverArquivo = (index) => {
        const novaLista = arquivos.filter((_, i) => i !== index)
        setArquivos(novaLista)
    }

    /**
     * Confirma a entrega e navega para a página de pós-confirmação
     */
    const confirmarEntrega = () => {
        if (arquivos.length === 0) {
        alert('É necessário anexar pelo menos uma foto para confirmar a entrega.')
        return // interrompe a execução da função
    }

        navigate("/posConfirmacao")
    }

    return (
        <>
            <Faixa /> {/* Decoração */}
            <Relogio /> {/* Decoração */}

            <section className={Styles.confirmacao}>
                <div className={Styles.texto1}>
                    <h1>Confirmação</h1>
                </div>

                <div className={Styles.area_usuario}>
                    <h1>
                        {nome ? nome : '[Nome]'}, anexe abaixo o termo de entrega assinado pelo cliente
                    </h1>
                </div>

                <div className={Styles.area_envio}>
                    <div className={Styles.uploadCard}>
                        <h2>TERMO DE ENTREGA</h2>

                        {/* Input para selecionar múltiplos arquivos */}
                        <label className={Styles.uploadLabel}>
                            <FaPaperclip className={Styles.iconClip} />
                            Selecionar arquivos
                            <input type="file" multiple onChange={handleArquivoChange} className={Styles.inputFile} />
                        </label>

                        {/* Botão para abrir a câmera (em teste) */}
                        {/* <button onClick={() => setAbrirCamera(true)} className={Styles.botaoCamera}>
                            <FaCamera className={Styles.iconCamera}/> Tirar foto
                        </button> */}
                    </div>

                    {/* Modal de câmera (em teste) */}
                    {/* {abrirCamera && (
                        <CameraModal 
                            onClose={() => setAbrirCamera(false)} 
                            onCapture={(foto) => setArquivos(prev => [...prev, foto])}
                        />
                    )} */}
                </div>

                {/* Lista de arquivos anexados */}
                {arquivos.length > 0 && (
                    <div className={Styles.listaArquivos}>
                        {arquivos.map((arquivo, index) => (
                            <div key={index} className={Styles.arquivoItem}>
                                <FaFileAlt className={Styles.iconeArquivo} />
                                <span>{arquivo.name}</span>
                                <button onClick={() => handleRemoverArquivo(index)} className={Styles.botaoRemover} title="Remover arquivo">
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Botão para confirmar entrega */}
                <button onClick={confirmarEntrega} className={Styles.botaoConfirmar}>
                    Confirmar entrega
                </button>
            </section>
        </>
    )
}

export default Confirmacao
