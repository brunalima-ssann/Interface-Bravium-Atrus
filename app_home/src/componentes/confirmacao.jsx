import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFileAlt, FaPaperclip, FaTrashAlt } from 'react-icons/fa'
import Styles from '../css/confirmacao.module.css'
import Relogio from './relogio'
import Faixa from './faixa'

function Confirmacao() {
    const [nome, setNome] = useState('')
    const [arquivos, setArquivos] = useState([])

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nomeUsuario')
        if (nomeSalvo) setNome(nomeSalvo)
    }, [])

    // Adicionar novos arquivos
    const handleArquivoChange = (event) => {
        const novosArquivos = Array.from(event.target.files)
        setArquivos((prev) => [...prev, ...novosArquivos])
    }

    // Remover arquivo individual
    const handleRemoverArquivo = (index) => {
        const novaLista = arquivos.filter((_, i) => i !== index)
        setArquivos(novaLista)
    }

    const navigate = useNavigate()
        const confirmarEntrega = () => {
        navigate("/posConfirmacao") // vai direto pra tela de pós confirmação
    }

    return (
        <>
            <Faixa />
            <Relogio />
            <section className={Styles.confirmacao}>
                <div className={Styles.texto1}>
                    <h1>Confirmação</h1>
                </div>

                <div className={Styles.area_usuario}>
                    <h1>
                        {nome ? nome : '[Nome]'}, anexe abaixo o termo de entrega assinadopelo cliente
                    </h1>
                </div>

                <div className={Styles.area_envio}>
                    <div className={Styles.uploadCard}>
                        <h2>TERMO DE ENTREGA</h2>
                        <label className={Styles.uploadLabel}>
                            <FaPaperclip className={Styles.iconClip} />
                            Selecionar arquivos
                            <input type="file" multiple onChange={handleArquivoChange} className={Styles.inputFile} />
                        </label>
                    </div>
                </div>

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
                <button onClick={confirmarEntrega} className={Styles.botaoConfirmar}>
                    Confirmar entrega
                </button>
            </section>
        </>
    )
}

export default Confirmacao
