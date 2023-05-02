import React from 'react'

const listRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Matheus', age: 31 },
    { id: 2, name: 'João', age: 28 },
    { id: 3, name: 'Pedro', age: 44 },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)
  }

  setUsers((prevUsers) => {
    return prevUsers.filter((user) => randomNumber !== user.id)
  })

  return (
    <div>listRender</div>
  )
}

export default listRender