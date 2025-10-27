import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../css/cardPedido.module.css'
import { FaPhone, FaMapMarkerAlt} from 'react-icons/fa'

function CardPedido({ pedido, onMarcarEntregue, atualizarStatus }) {
  if (!pedido) return null; // Se não houver pedido, não renderiza nada

  const [aberto, setAberto] = useState(false); // Estado que controla se o card está aberto ou no resumo
  const navigate = useNavigate(); // Para navegar para detalhes do pedido

  /**
   * Função chamada ao clicar em "Marcar como entregue"
   * Chama a função passada pelo componente pai e navega para a página de detalhes
   */
  const handleMarcarEntregue = () => {
    onMarcarEntregue(pedido.id);
    navigate(`/detalhes/${pedido.id}`);
  };

  /**
   * Função chamada quando o pedido é marcado como "Cliente não encontrado"
   * Atualiza apenas o status do pedido específico
   * Fecha o card após atualizar >> Ainda não esta funcional 
   */
  const handleClienteNaoEncontrado = () => {
    atualizarStatus(pedido.id, 'Cliente não encontrado');
    setAberto(false);
  };

  return (
    <div className={Styles.card}>

      {/* Exibição resumida do pedido */}
      {!aberto ? (
        <div className={Styles.cardResumo}>
          <p>Cliente</p>
          <div className={Styles.infos}>
            {pedido.cliente}<br />
            {pedido.endereco}
          </div>

          <button onClick={() => setAberto(true)} className={Styles.botaoDetalhes}>
            Ver detalhes
          </button>
        </div>

      ) : (

        /* Exibição detalhada do pedido */
        <div className={Styles.cardDetalhes}>
          <h1>Cliente</h1>
          <h2>Dados:</h2>
          <div className={Styles.infos2}>
            {pedido.cliente}<br />

            <FaPhone className={Styles.icone} />
            {pedido.telefone}<br /><br />

            <FaMapMarkerAlt className={Styles.icone} />
            {pedido.endereco}<br />
            <div className={Styles.conteudo1}>{pedido.enderecoCompleto}</div>
          </div>

          <div className={Styles.botoesDetalhes2}>
            <button onClick={handleMarcarEntregue} className={Styles.botaoEntregue}>
              Marcar como entregue
            </button>

            <button onClick={() => setAberto(false)} className={Styles.botaoFechar}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardPedido;
