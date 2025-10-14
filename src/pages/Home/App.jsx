import React, { use } from 'react'
import './style.css'
import api from '../../services/api' 
import { useEffect, useState, useRef } from 'react'
import Trash from '../../assets/trash.svg'

const App = () => {
  
const [users, setUsers] = useState([])

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

    async function getUsers(){
      const usersFromApi = await api.get('/users')

      setUsers (usersFromApi.data)
    }

    async function createUsers(){

      await api.post('/users', {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      })

      getUsers()
    }

    async function deleteUsers(id){
      await api.delete(`/users/${id}`)

      getUsers()
    }

    useEffect( () => {
      getUsers()
    }, [])

  return (
    <div className='container'>
      <form action="">
        <h1>Users Registration</h1>
        <input placeholder="Name" name="name" type="text" ref={inputName}/>
        <input placeholder="Age" name="age" type="number" ref={inputAge}/>
        <input placeholder="Email" name="email" type="Email" ref={inputEmail}/>
        <button type='button' onClick={createUsers}>Registration</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Age: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>

      ))}

    </div>
  )
}

export default App