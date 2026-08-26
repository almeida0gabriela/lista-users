import { useEffect, useState } from 'react'
import User from './components/User'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

 useEffect(() => {
  fetch('https://dummyjson.com/users?limit=30')
    .then((resposta) => resposta.json())
    .then((dados) => setUsers(dados.users));
}, []);

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>

      <div className="grade">
        {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          firstname={user.firstName}
          lastname={user.lastName}
          age={user.age}
          gender={user.gender}
          email={user.email}
          phone={user.phone}
          image={user.image}
          company={user.company.name}
          title={user.company.title}
          city={user.address.city}
          stateCode={user.address.stateCode}
        />
      ))}
      </div>

    </div>
  );
}

export default App