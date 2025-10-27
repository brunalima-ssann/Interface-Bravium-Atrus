import { FaPhone, FaMapMarkerAlt, FaRegFileAlt } from 'react-icons/fa'
import Styles from '../css/cardDetalhes.module.css'

function CardDetalhe({ pedido }) {//Puxando informações do componente 'detalhes' dentro do array 'pedido'
  return (
    <div className={Styles.card}>

      {/* Nome do cliente */}
      <h3>Cliente:</h3>
      <p className={Styles.nome}>{pedido.cliente}</p>

      {/* Telefone do cliente */}
      <div className={Styles.linha}>
        <FaPhone className={Styles.icone} />
        <p>{pedido.telefone}</p>
      </div>

      {/* Endereço do cliente */}
      <h3>Endereço:</h3>
      <div className={Styles.linha}>
        <FaMapMarkerAlt className={Styles.icone} />
        <p>{pedido.endereco}</p>
      </div>
      {/* Endereço completo (bairro e CEP) */}
      <p className={Styles.indent}>{pedido.enderecoCompleto}</p>

      {/* Informações do pedido */}
      <h3>Pedido:</h3>
      <div className={Styles.linha}>
        <FaRegFileAlt className={Styles.icone} />
        <p>Id Pedido: {pedido.idPedido}</p>
      </div>
      {/* Data de entrega */}
      <p className={Styles.indent}>Entrega até {pedido.dataEntrega}</p>

    </div>
  );
}

export default CardDetalhe;
