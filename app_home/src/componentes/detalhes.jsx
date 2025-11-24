import { useParams, useNavigate } from 'react-router-dom'
import CardDetalhe from './cardDetalhes'
import Faixa from './faixa'
import Relogio from './relogio'
import Styles from '../css/detalhes.module.css'
import { Link } from 'react-router-dom'

function Detalhes() {

  const { id } = useParams(); 
  const navigate = useNavigate();

  // 🔥 AGORA SIM: pega os pedidos do localStorage
  const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || [];

  // 🔥 encontra o pedido correto
  const pedido = pedidosSalvos.find(p => Number(p.id) === Number(id));

  if (!pedido) return <p>Nenhum pedido encontrado</p>;

  // 🔥 mantém sua função original, só trocando "pedidos" por "pedidosSalvos"
  const handleClienteNaoEncontrado = () => {
    const pedidosAtualizados = pedidosSalvos.map(p => 
      p.id === pedido.id ? { ...p, status: 'Cliente não encontrado' } : p
    );

    localStorage.setItem('pedidos', JSON.stringify(pedidosAtualizados));

    navigate('/entregas');
  };

  return (
    <>
      <Faixa />
      <Relogio />

      <section className={Styles.detalhes}>
        <div className={Styles.texto1}>
          <h1>Detalhes da entrega</h1>

          <div className={Styles.card}>
            <CardDetalhe pedido={pedido} />
          </div>

          <div className={Styles.botoes}>
            <Link to={`/confirmacao/${pedido.id}`} className={Styles.btnEntregue}>Marcar como entregue</Link>

            <button 
              className={Styles.btnNaoEncontrado} 
              onClick={handleClienteNaoEncontrado}
            >
              Cliente não encontrado
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detalhes;
