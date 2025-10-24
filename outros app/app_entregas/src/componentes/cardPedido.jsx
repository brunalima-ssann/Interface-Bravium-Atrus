import { useState } from 'react'
import Styles from '../css/cardPedido.module.css'
import icon_lista from '../imagem/icon_lista.png'
import icon_lugar from '../imagem/icon_lugar.png'
import icon_telefone from '../imagem/icon_telefone.png'

function CardPedido({ pedido, onMarcarEntregue }) {
  if (!pedido) return null

  const [aberto, setAberto] = useState(false)

  return (
    <div className={Styles.card}>
      {!aberto ? (
        <div className={Styles.cardResumo}>
          <p>Cliente</p>
          <div className={Styles.infos}> 
            {pedido.cliente}<br></br>
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
            {pedido.cliente}<br></br>

            <img className={Styles.telefone} src={icon_telefone}/> 
            {pedido.telefone}<br></br><br></br>

            <img className={Styles.lugar} src={icon_lugar}/>
            {pedido.endereco} <br></br>
            <div className={Styles.conteudo1}>{pedido.enderecoCompleto}</div>

         </div>

          <div className={Styles.botoesDetalhes2}>
            <button onClick={() => onMarcarEntregue(pedido.id)} className={Styles.botaoEntregue}>
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
