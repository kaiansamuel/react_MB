import React from 'react'
import { useState } from 'react'

const CarDetails = ({marca, km, cor}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul style= {{
        listStyle: 'none'
      }}>
        <li>Marca: {marca}</li>
        <li>Km: {km}</li>
        <li>Cor: {cor}</li>
      </ul>
    </div>
  )
}

export default CarDetails;