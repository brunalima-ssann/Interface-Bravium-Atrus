import { FaPhone, FaMapMarkerAlt, FaRegFileAlt } from 'react-icons/fa'
import Styles from '../css/cardDetalhes.module.css'

function CardDetalhe({ pedido }) {
  return (
    <div className={Styles.card}>
      <h3>Cliente:</h3>
      <p className={Styles.nome}>{pedido.cliente}</p>
      <div className={Styles.linha}>
        <FaPhone className={Styles.icone} />
        <p>{pedido.telefone}</p>
      </div>

      <h3>Endereço:</h3>
      <div className={Styles.linha}>
        <FaMapMarkerAlt className={Styles.icone} />
        <p>{pedido.endereco}</p>
      </div>
      <p className={Styles.indent}>{pedido.enderecoCompleto}</p>

      {/* Pedido */}
      <h3>Pedido:</h3>
      <div className={Styles.linha}>
        <FaRegFileAlt className={Styles.icone} />
        <p>Id Pedido: {pedido.idPedido}</p>
      </div>
      <p className={Styles.indent}>Entrega até {pedido.dataEntrega}</p>
    </div>
  );
}

export default CardDetalhe;
