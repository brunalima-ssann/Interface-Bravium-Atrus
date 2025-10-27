import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './componentes/login'
import Entregas from './componentes/entregas'
import Detalhes from './componentes/detalhes'
import Confirmacao from './componentes/confirmacao';
import Pos_Confirmacao from './componentes/posConfirmacao';

function App() {

  return (
    <main>
      {/* Configuração do Router para navegar entre telas */}
      <Router>
        <Routes>
          {/* Rota principal da aplicação - tela de login */}
          <Route path="/" element={<Login />} />  

          {/* Tela que exibe todos os pedidos do entregador */}
          <Route path="/entregas" element={<Entregas />} />

          {/* Tela de detalhes de um pedido específico */}
          {/* Esse 'id' tem ligação direta com os arrays usados dentro do componente 'detalhes'*/}
          <Route path="/detalhes/:id" element={<Detalhes/>} />

          {/* Tela para confirmar a entrega e anexar documentos */}
          <Route path="/confirmacao" element={<Confirmacao/>}/>

          {/* Tela pós-confirmação exibida após a entrega ser confirmada */}
          <Route path="/posConfirmacao" element={<Pos_Confirmacao/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
