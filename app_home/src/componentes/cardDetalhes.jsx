import { FaPhone, FaMapMarkerAlt, FaRegFileAlt } from 'react-icons/fa'
import Styles from '../css/cardDetalhes.module.css'

function CardDetalhe({ pedido }) {//Puxando informações do componente 'detalhes' dentro do array 'pedido'
  return (
    <div className={Styles.card}>

      {/* Nome do cliente */}
      <h3>Cliente:</h3>
      <p className={Styles.nome}>{pedido.nomes}</p>

      {/* Telefone do cliente */}
      <div className={Styles.linha}>
        <FaPhone className={Styles.icone} />
        <p>{pedido.telefone}</p>
      </div>

      {/* Endereço do cliente */}
      <h3>Endereço:</h3>
      <div className={Styles.linha}>
        <FaMapMarkerAlt className={Styles.icone} />
        <p>{pedido.itoaddress} {pedido.itoaddressnumber}</p>
      </div>
      {/* Endereço completo (bairro e CEP) */}
      <p className={Styles.indent}>{pedido.itoquarter} | {pedido.cep}</p>

      {/* Informações do pedido */}
      <h3>Pedido:</h3>
      <div className={Styles.linha}>
        <FaRegFileAlt className={Styles.icone} />
        <p>Id Pedido: {pedido.pedidoformatado}</p>
      </div>
      {/* Data de entrega */}
      <p className={Styles.indent}>N° Nota fiscal: {pedido.nf}</p>

    </div>
  );
}

export default CardDetalhe;
