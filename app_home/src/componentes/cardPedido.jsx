import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../css/cardPedido.module.css'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function CardPedido({ pedido, onMarcarEntregue, atualizarStatus }) {
  if (!pedido) return null; // Se não houver pedido, não renderiza nada

  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();

  /**
   * Função chamada ao clicar em "Marcar como entregue"
   * Navega para a página de confirmação do pedido
   */
  const handleMarcarEntregue = () => {
    onMarcarEntregue(pedido.id); // mantém sua função original
    navigate(`/detalhes/${pedido.id}`); // AGORA vai para a rota correta
  };

  /**
   * Cliente não encontrado
   */
  const handleClienteNaoEncontrado = () => {
    atualizarStatus(pedido.id, 'Cliente não encontrado');
    setAberto(false);
  };

  return (
    <div className={Styles.card}>

      {/* Exibição resumida */}
      {!aberto ? (
        <div className={Styles.cardResumo}>
          <div className={Styles.infos}>
            <strong>{pedido.nomes}<br /></strong>
            {pedido.itoaddress} {pedido.itoaddressnumber}
          </div>

          <button onClick={() => setAberto(true)} className={Styles.botaoDetalhes}>
            Ver detalhes
          </button>
        </div>
) : (
        /* Exibição detalhada */
        <div className={Styles.cardDetalhes}>
          <h2>Dados:</h2>

          <div className={Styles.infos2}>
            {pedido.nomes}<br />

            <FaPhone className={Styles.icone} />
            {pedido.telefone}<br /><br />

            <FaMapMarkerAlt className={Styles.icone} />
            {pedido.itoaddress} {pedido.itoaddressnumber}<br />
            <div className={Styles.conteudo1}>
              {pedido.itoquarter}  |  {pedido.cep}
            </div>
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
