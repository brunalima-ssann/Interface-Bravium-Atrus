import { useParams, useNavigate } from 'react-router-dom'
import CardDetalhe from './cardDetalhes'
import Faixa from './faixa'
import Relogio from './relogio'
import Styles from '../css/detalhes.module.css'
import { Link } from 'react-router-dom'

// Array de pedidos usado como base caso não haja dados no localStorage
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
  const { id } = useParams() // Captura o ID do pedido da URL 
  //Isso aqui garante que as mesma informações no cardPedido sejam as mesmas que vão para o cardDetalhes

  const navigate = useNavigate() // Permite navegar para outra rota

  // Busca o pedido correspondente ao ID na lista de pedidos << Array - const pedidos
  const pedido = pedidos.find(p => p.id === Number(id));

  if (!pedido) return <p>Nenhum pedido encontrado</p> // Mensagem caso o pedido não exista

  /**
   * Atualiza o status do pedido para "Cliente não encontrado" << ainda não funcional, não manipula diretamente no array
   * e salva a alteração no localStorage.
   * Depois, navega de volta para a tela de entregas
   */
  const handleClienteNaoEncontrado = () => {
    // Recupera pedidos do localStorage ou usa o array padrão
    const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || pedidos

    // Atualiza apenas o pedido selecionado
    const pedidosAtualizados = pedidosSalvos.map(p =>
      p.id === pedido.id ? { ...p, status: 'Cliente não encontrado' } : p
    )

    // Salva a lista atualizada no localStorage
    localStorage.setItem('pedidos', JSON.stringify(pedidosAtualizados))

    // Retorna para a tela de entregas
    navigate('/entregas')
  };

  return (
    <>
      <Faixa />{/* Decoração */}
      <Relogio />{/* Decoração */}

      <section className={Styles.detalhes}>
        <div className={Styles.texto1}>
          <h1>Detalhes da entrega</h1>

          {/* Exibe informações detalhadas do pedido */}
          <div className={Styles.card}>
            <CardDetalhe pedido={pedido} /> 
          </div>

          {/* Botões de ação */}
          <div className={Styles.botoes}>
            <Link to="/confirmacao" className={Styles.btnEntregue}>Marcar como entregue</Link>
            <button className={Styles.btnNaoEncontrado} onClick={handleClienteNaoEncontrado}>
              Cliente não encontrado
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detalhes;
