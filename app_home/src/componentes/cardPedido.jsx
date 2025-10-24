import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../css/cardPedido.module.css'
import { FaPhone, FaMapMarkerAlt, FaRegListAlt } from 'react-icons/fa'

function CardPedido({ pedido, onMarcarEntregue, atualizarStatus }) {
  if (!pedido) return null;

  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();

  const handleMarcarEntregue = () => {
    onMarcarEntregue(pedido.id);
    navigate(`/detalhes/${pedido.id}`);
  };

  const handleClienteNaoEncontrado = () => {
    // Atualiza apenas o status desse pedido
    atualizarStatus(pedido.id, 'Cliente não encontrado');
    setAberto(false); // opcional: fecha o card depois de atualizar
  };

  return (
    <div className={Styles.card}>
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
