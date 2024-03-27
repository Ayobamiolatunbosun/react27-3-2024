import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'

function App() {
  // const api = 'https://jsonplaceholder.typicode.com/posts'
  const api = 'http://localhost:8080/students'
  // const fetchData = () => {
  //   fetch(api)
  //   .then((response)=> response.json())
  //   .then((data)=>console.log(data))
  //   .catch((error)=>console.log(error))
  // }

  const fetchData = () => {
    fetch(api)
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((error)=>console.log(error))
  }


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />

        </Routes>
    
    </BrowserRouter>
  )
}

export default App