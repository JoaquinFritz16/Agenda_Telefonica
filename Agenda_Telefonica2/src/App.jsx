import { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from './components/Footer';
import Table from './components/Table';
import Header from './components/Header';
import Inputs from './components/Inputs';
function App() {
  const db = `http://localhost:3000`;
  const [people, setPeople] = useState([]);
  const [error, setError] = useState("");
  useEffect(()=>{
    axios.get(`${db}/people`)
    .then(res => {
      setPeople(res.data)})
    .catch(error=>setError(error));
  },[])
  const handleDelete = (personId) => {
    setPeople(people.filter(person=> person.id !== personId));
  }
  return (
    <>
    <Header />
      <h1>Agenda Telefonica</h1>
      {error && <p>{error}</p>}
      <Inputs />
      <Table people={people} onDelete={handleDelete}/>
      <Footer />
    </>
  )
}

export default App
