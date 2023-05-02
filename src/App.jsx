import React from 'react'
import ConditionalRender from './ConditionalRender'
import CarDetails from './CarDetails'

const App = () => { 
  return (
    <div>
      <ConditionalRender />
      <CarDetails marca='Audi' km= {48} cor='Verde' />
    </div>
   
  )
}

export default App