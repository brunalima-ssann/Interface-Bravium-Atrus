import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // ✅ adicionei useParams
import { FaFileAlt, FaPaperclip, FaTrashAlt, FaCamera } from 'react-icons/fa';
import Styles from '../css/confirmacao.module.css';
import Relogio from './relogio';
import Faixa from './faixa';

function Confirmacao() {
    const { id } = useParams(); // ✅ captura o ID do pedido
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [arquivos, setArquivos] = useState([]);

    // 🔥 busca pedido pelo ID
    const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || [];
    const pedido = pedidosSalvos.find(p => Number(p.id) === Number(id));

    useEffect(() => {
        const motoristaSalvo = JSON.parse(localStorage.getItem('motorista'));
        if (motoristaSalvo) setNome(motoristaSalvo.nomeFormatado);
    }, []);

    if (!pedido) return <p>Nenhum pedido encontrado</p>;

    const handleArquivoChange = (event) => {
        const novosArquivos = Array.from(event.target.files);
        setArquivos(prev => [...prev, ...novosArquivos]);
    };

    const handleRemoverArquivo = (index) => {
        setArquivos(prev => prev.filter((_, i) => i !== index));
    };

    const confirmarEntrega = () => {
        if (arquivos.length === 0) {
            alert('É necessário anexar pelo menos uma foto para confirmar a entrega.');
            return;
        }

        // Atualiza o status do pedido
        const pedidosAtualizados = pedidosSalvos.map(p => 
            p.id === pedido.id ? { ...p, status: 'Entregue' } : p
        );
        localStorage.setItem('pedidos', JSON.stringify(pedidosAtualizados));

        navigate("/posConfirmacao");
    };

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
                        {nome ? nome : '[Nome]'}, anexe abaixo o termo de entrega assinado pelo cliente
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
    );
}

export default Confirmacao;
