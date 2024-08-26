import { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from './components/Footer';
import Table from './components/Table';
import Header from './components/Header';
import Inputs from './components/Inputs';
function App() {
  const db = `http://localhost:3000`
  useEffect(()=>{
    axios.get(`${db}/posts`)
    .then(res => console.log(res.data))
  },[])
  return (
    <>
    <Header />
      <h1>Agenda Telefonica</h1>
      <Inputs />
      <Table />
      <Footer />
    </>
  )
}

export default App
