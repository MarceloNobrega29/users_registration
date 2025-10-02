import React from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'

const App = () => {

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
        <input name='name' type="text" />
        <input age='age' type="number" />
        <input email='name' type="email" />
        <button type='button'>Registration</button>
      </form>

    { users.map( (user) => (

      <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>          
          <button>
            <img src={Trash}/>
          </button>
      </div>     

    ) )}

       

    </div>
  )
}

export default App