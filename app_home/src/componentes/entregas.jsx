import { useEffect, useState } from 'react'
import Styles from '../css/entregas.module.css'
import icon_user from '../imagem/icon_user.png'
import CardPedido from './cardPedido'
import Faixa from './faixa'
import Relogio from './relogio'

const pedidosOriginais = [
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

function Entregas() {

  const [nome, setNome] = useState('')
  const [pedidos, setPedidos] = useState([])

  // Nome usuário >> associado ao login
  useEffect(() => {
    const nomeSalvo = localStorage.getItem('nomeUsuario')
    if (nomeSalvo) setNome(nomeSalvo)
  }, [])

  // Carregar pedidos do localStorage ou array original
  useEffect(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || pedidosOriginais;
    setPedidos(pedidosSalvos);
  }, [])

  // Função para atualizar status de um pedido específico
  const atualizarStatus = (id, novoStatus) => {
    const atualizados = pedidos.map(p =>
      p.id === id ? { ...p, status: novoStatus } : p
    )
    setPedidos(atualizados)
    localStorage.setItem('pedidos', JSON.stringify(atualizados))
  }

  // Estados do filtro
  const [statusFiltro, setStatusFiltro] = useState('todas')
  const [data, setData] = useState('')
  const [cliente, setCliente] = useState('')
  const [notaFiscal, setNotaFiscal] = useState('')

  const filtrarFiltro = () => {
    const filtros = { status: statusFiltro, data, cliente, notaFiscal }
    console.log('Filtros aplicados:', filtros)
  }

  const limparFiltro = () => {
    setStatusFiltro('todas')
    setData('')
    setCliente('')
    setNotaFiscal('')
  }

  return (
    <>
      <Faixa />
      <Relogio />
      <section className={Styles.entregas}>

        <div className={Styles.area_usuario}>
          <h1>Olá {nome ? nome : '[Nome]'}!</h1>
          <a href="#" className={Styles.usuario}>
            <img src={icon_user} alt='area do usuário' />
          </a>
        </div>

        <div className={Styles.area_filtro}>
          <h3>Minhas entregas</h3>

          <div className={Styles.filtroContainer}>
            <div className={Styles.campo}>
              <label>Status:</label>
              <select value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value)}>
                <option value="todas">Todas</option>
                <option value="sem_status">Sem status</option>
                <option value="entregue">Entregue</option>
                <option value="cliente_nao_encontrado">Cliente não encontrado</option>
              </select>
            </div>

            <div className={Styles.campo}>
              <label>Data:</label>
              <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
            </div>

            <div className={Styles.campo}>
              <label>Nome do cliente:</label>
              <input type="text" placeholder="Como no pedido" value={cliente} onChange={(e) => setCliente(e.target.value)} />
            </div>

            <div className={Styles.campo}>
              <label>N° Nota Fiscal:</label>
              <input type="text" placeholder="Como no pedido" value={notaFiscal} onChange={(e) => setNotaFiscal(e.target.value)} />
            </div>
          </div>

          <div className={Styles.botoes}>
            <button onClick={filtrarFiltro} className={Styles.botaoFiltrar}>
              Filtrar
            </button>
            <button onClick={limparFiltro} className={Styles.botaoLimpar}>
              Limpar
            </button>
          </div>
        </div>

        <div className={Styles.listaPedidos}>
          {pedidos.length > 0 ? (
            pedidos.map((pedido) => (
              <CardPedido
                key={pedido.id}
                pedido={pedido}
                onMarcarEntregue={(id) => console.log('Marcar como entregue:', id)}
                atualizarStatus={atualizarStatus} // passa função para atualizar o card
              />
            ))
          ) : (
            <p>Nenhum pedido encontrado</p>
          )}
        </div>

      </section>
    </>
  )
}

export default Entregas
