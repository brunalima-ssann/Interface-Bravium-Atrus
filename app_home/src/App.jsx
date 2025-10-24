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
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/entregas" element={<Entregas />} />
        <Route path="/detalhes/:id" element={<Detalhes/>} />
        <Route path ="/confirmacao" element={<Confirmacao/>}/>
        <Route path="/posConfirmacao" element={<Pos_Confirmacao/>}/>
      </Routes>
    </Router>
    </main>
  )
}

export default App
