import React from 'react'
import ConditionalRender from './ConditionalRender'
import CarDetails from './CarDetails'
import Container from './Container'
import FunctionProps from './FunctionProps'

function showMessage(){
  console.log('Hello World!')
}

const App = () => { 
  const  cars = [
    { id: 1, marca: 'Ferrari', color: 'Amarelo', newCar: true, km: 0 },
    { id: 2, marca: 'Kia', color: 'Branco', newCar: false, km: 3144 },
    { id: 3, marca: 'Renault', color: 'Azul', newCar: false, km: 9234 },
  ]
  return (
   
    <div>
      <ConditionalRender />
      <CarDetails marca='Audi' km= {48} cor='Verde' />
      <CarDetails marca= 'Vm' km= {0} cor='Vermelho' />
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.marca}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      <Container>
        <p>Este é um paragrafo children</p>
      </Container>
      <FunctionProps myFunction={showMessage} />
    </div>
  )
}

export default App;