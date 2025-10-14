import React, { use } from 'react'
import './style.css'
import api from '../../services/api' 
import { useEffect, useState } from 'react'
import Trash from '../../assets/trash.svg'

const App = () => {
  
const [users, setUsers] = useState([])

    async function getUsers(){
      const usersFromApi = await api.get('/users')

      setUsers (usersFromApi.data)
    }

    useEffect( () => {
      getUsers()
    }, [])

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