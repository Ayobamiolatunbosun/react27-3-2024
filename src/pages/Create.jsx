import React from 'react'
import Navbar from '../component/Navbar'


const Create = () => {
    return (
        <div>
            <Navbar />
            <div className="container d-flex justify-content-center">
                <div className="content">
                    <h1 className='text-center text-decoration-underline my-5 text-secondary'>Add new student</h1>
                    <div className="form-container">
                        <form className='border p-5 shadow'>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">ID</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Name</label>
                                <input type="name" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Create
