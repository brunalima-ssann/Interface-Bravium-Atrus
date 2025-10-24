import { useParams, useNavigate } from 'react-router-dom';
import CardDetalhe from './cardDetalhes'; // <--- letra maiúscula, bate com JSX
import Faixa from './faixa';
import Relogio from './relogio';
import Styles from '../css/detalhes.module.css';


const pedidos = [
  {
            id: 1,
            cliente: 'Lucas Fabiano',
            telefone: '(11) 95688-9988',
            endereco: 'Franciso Hurtado, 45',
            enderecoCompleto: 'Vila Água Funda | 04156-050',
            idPedido: '65432155BR',
            dataEntrega: '25/10',
            status: ''
        },
        {
            id: 2,
            cliente: 'Maria Clara Santos',
            telefone: '(11) 96687-9332',
            endereco: 'Rua Chelb Massud, 51',
            enderecoCompleto: 'Vila Prudência | 04110-060',
            idPedido: '5899623BR',
            dataEntrega: '26/10',
            status: 'Entregue'
        },
        {
            id: 3,
            cliente: 'Marcelo Rodrigues',
            telefone: '(11) 93359-8563',
            endereco: 'Rua Guarará, 179',
            enderecoCompleto: 'Bela Vista | 05586-010',
            idPedido: '59876BR',
            dataEntrega: '27/10',
            status: 'Cliente não encontrado'
        }
];

function Detalhes() {
  const { id } = useParams();
  const pedido = pedidos.find(p => p.id === Number(id)); 

  if (!pedido) return <p>Nenhum pedido encontrado</p>;

  const { id1 } = useParams();
  const navigate = useNavigate();
  const pedido1 = pedidos.find(p => p.id === Number(id));

  if (!pedido) return <p>Nenhum pedido encontrado</p>;

  const handleClienteNaoEncontrado = () => {
    // Pega todos os pedidos do localStorage ou array original
    const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || pedidos;

    // Atualiza o status do pedido
    const pedidosAtualizados = pedidosSalvos.map(p =>
      p.id === pedido.id ? { ...p, status: 'Cliente não encontrado' } : p
    );

    // Salva de volta
    localStorage.setItem('pedidos', JSON.stringify(pedidosAtualizados));

    // Volta para a tela de entregas
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
            <button className={Styles.btnEntregue}>Marcar como entregue</button>
            <button className={Styles.btnNaoEncontrado} onClick={handleClienteNaoEncontrado}>Cliente não encontrado</button>
        </div>
          
        </div>
      </section>
    </>
  );
}

export default Detalhes;
