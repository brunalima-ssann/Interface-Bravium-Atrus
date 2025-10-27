import { useEffect, useState } from 'react'
import Styles from '../css/entregas.module.css'
import icon_user from '../imagem/icon_user.png'
import CardPedido from './cardPedido' // componente do card
import Faixa from './faixa'
import Relogio from './relogio'

// especie de "banco de dados" local, substituir por requisição
// é um array de objetos que contém os pedidos iniciais da aplicação.
// cada objeto representa um pedido individual e possui propriedades individuais - nome, endereço, id...
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

  const [nome, setNome] = useState('') // Armazena o nome do usuário logado
  const [pedidos, setPedidos] = useState([]) // Armazena a lista de pedidos

  // Carrega o nome do usuário do localStorage
  useEffect(() => {
    const nomeSalvo = localStorage.getItem('nomeUsuario')
    if (nomeSalvo) setNome(nomeSalvo)
  }, [])

  // Carrega pedidos do localStorage ou usa o array original caso não haja dados salvos
  useEffect(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || pedidosOriginais
    setPedidos(pedidosSalvos)
  }, [])

  /**
   * Atualiza o status de um pedido específico
   * @param {number} id - ID do pedido a ser atualizado
   * @param {string} novoStatus - Novo status do pedido
   */
  const atualizarStatus = (id, novoStatus) => {
    const atualizados = pedidos.map(p =>
      p.id === id ? { ...p, status: novoStatus } : p
    )
    setPedidos(atualizados) // Atualiza o estado local
    localStorage.setItem('pedidos', JSON.stringify(atualizados)) // Salva alterações no localStorage
  }

  // Estados de filtros
  const [statusFiltro, setStatusFiltro] = useState('todas')
  const [data, setData] = useState('')
  const [cliente, setCliente] = useState('')
  const [notaFiscal, setNotaFiscal] = useState('')

  /**
   * Aplica os filtros aos pedidos
   * Atualmente apenas loga os filtros aplicados no console
   */
  const filtrarFiltro = () => {
    const filtros = { status: statusFiltro, data, cliente, notaFiscal }
    console.log('Filtros aplicados:', filtros)
  }

  /**
   * Limpa todos os filtros e reseta os estados para padrão
   */
  const limparFiltro = () => {
    setStatusFiltro('todas')
    setData('')
    setCliente('')
    setNotaFiscal('')
  }

  return (
    <>
      <Faixa /> {/*Decoração*/}
      <Relogio />{/*Decoração*/}
      <section className={Styles.entregas}>

        <div className={Styles.area_usuario}>
          <h1>Olá {nome ? nome : '[Nome]'}!</h1>
          <a href="#" className={Styles.usuario}>
            <img src={icon_user} alt='area do usuário' />
          </a>
        </div>

        {/*Área do filtro*/}
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

      {/*Componente card de pedidos - garante exibição apenas de pedidos reais, pedidos esses que vem de uma base de dados local*/} 
        <div className={Styles.listaPedidos}>
          {pedidos.length > 0 ? (
            pedidos.map((pedido) => (
              <CardPedido
                key={pedido.id}
                pedido={pedido}
                onMarcarEntregue={(id) => console.log('Marcar como entregue:', id)}
                atualizarStatus={atualizarStatus}
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
