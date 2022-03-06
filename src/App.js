import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config'
import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const pullUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    pullUsers()
  }, [])


  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = { age: age += 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }



  return (
    <div className="App">
      <input placeholder="name" onChange={(event) => { setNewName(event.target.value) }}></input>
      <input placeholder="age" onChange={(event) => { setNewAge(event.target.value) }}></input>
      <button onClick={createUser}>Create user</button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
