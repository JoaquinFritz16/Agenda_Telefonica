import { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from './components/Footer';
import Table from './components/Table';
import Header from './components/Header';
import Inputs from './components/Inputs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
function App() {
  const db = `http://localhost:3000`;
  const [people, setPeople] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  useEffect(()=>{
    axios.get(`${db}/people`)
    .then(res => {
      setPeople(res.data)
      setFilteredPeople(res.data)
    })
    .catch(error=>setError(error));
  },[])
  const handleDelete = (personId) => {
    setPeople(people.filter(person=> person.id !== personId))
    setFilteredPeople(people.filter(person=> person.id !== personId))
  }
  const addPeople = (person) => {
    const newId=Plusid()
    const newPerson = {...person, newId}
    axios.post(`${db}/people`, newPerson)
    .then(res => {
      setPeople([...people, res.data])
      setFilteredPeople([...people, res.data])
    })
    .catch(error=>setError(error));
  }
  const Plusid = ()  => {
    const maxId = Math.max(people.id)
    const newId = maxId + 1
    return newId
  }
  return (
    <>
    <Header search={search} setSearch={setSearch}
     people={people} setFilteredPeople={setFilteredPeople} />
      <div className='container'><h1>Agenda Telefonica</h1>
      {error && <p>{error.message}</p>}
      <Inputs addPeople={addPeople} />
      <Table people={filteredPeople} onDelete={handleDelete}/>
      </div>
      <Footer />
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App