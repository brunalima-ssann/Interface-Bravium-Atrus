import { useState } from 'react'
import Styles from '../css/cardDetalhes.module.css'
import icon_lista from '../imagem/icon_lista.png'
import icon_lugar from '../imagem/icon_lugar.png'
import icon_telefone from '../imagem/icon_telefone.png'

function CardDetalhes({ cliente, telefone, endereco, dataEntrega, status }) {
  
  return (
    <div className={Styles.card}>
      <h3>{cliente}</h3>
      <p>Telefone: {telefone}</p>
      <p>Endereço: {endereco}</p>
      <p>Entrega: {dataEntrega}</p>
      <p>Status: {status || 'Pendente'}</p>
    </div>
  )
}

export default CardDetalhes
