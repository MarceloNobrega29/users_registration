import React from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'

const App = () => {
  5

  const users = [
    {
      id: '2323aa',
      name: 'marcelo',
      age: '19',
      email: 'mf@gmail.com'
    },
    {
      id: '2323a321a',
      name: 'teste',
      age: '42',
      email: 'ttf@gmail.com'
    }
  ]



  return (
    <div className='container'>
      <form action="">
        <h1>Users Registration</h1>
        <input placeholder="Name" name="name" type="text" />
        <input placeholder="Age" name="age" type="number" />
        <input placeholder="Email" name="email" type="Email" />
        <button type='button'>Registration</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Age: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>

      ))}



    </div>
  )
}

export default App