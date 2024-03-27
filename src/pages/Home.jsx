import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'


const Home = () => {
    // state variable for tudent
    const [students, setStudent] = useState(null)

    // variable for api
    const api = "http://localhost:8080/students"

    // function to fetch data from api
    const fecthStudent = () => {
        fetch(api)
        .then((response)=> response.json())
        .then((data)=>setStudent(data))
        .catch((error)=>console.log(error))
    }

    // useEffect hook to fetch data from api
    useEffect(() => {
        fecthStudent()
    }, [])
  return (
    <>
    <Navbar />
    <div className="container">
        <div className="content">
            <h1 className='text-center text-decoration-underline my-4 text-secondary'>CRUD OPERATION</h1>
            <Link to="/create" className='btn btn-success'>
                Add New+
            </Link>
            <div className='table-containern d-flex justify-content-center mt-4 p-4'>
            <table class="table w-75 border-2 shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        students && students.map((student)=>(
            <tr key={student.id}>
      <th scope="row">{student.id}</th>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>
        <button className='btn btn-primary me-3'>Edit</button>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
        ))

    }
    
  </tbody>
</table>
            </div>
        </div>
    </div>
    
    
    </>
    
  )
}

export default Home
