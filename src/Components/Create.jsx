import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../Features/UserDetailSlice';
import { useNavigate } from 'react-router-dom';



const Create = () => {
  const [users,setUsers] = useState({});
  const dispatch = useDispatch();

  const getUserData = (e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
    console.log(users);
  }
  
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("users",users);
    dispatch(createUser(users));
    navigate("/read");
  }
  
  return (
	<div className='container py-5' style={{borderRadius:"10px"}}>
    <div className='row justify-content-center'>
      <div className='col-12 col-md-9 col-lg-7'>
        <div className='card shadow-md border-0'>
          <div className='card-body p-4 p-md-5'>
            <div className='d-flex align-items-center justify-content-center mb-5'>
                <div className="me-4 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width:48,height:48}}>
                👤
                </div>
                <div>
                <h4 className="mb-0">Create User</h4>
                <small className="text-muted">Fast, accessible and responsive form</small>
                </div>
            </div>
      
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
	    < div className="row g-3">
       <div className='col-12'>
        <div className='form-floating'>
        <input type="text" name="name" className="form-control" onChange={getUserData} placeholder='Full Name' required></input>
        <label  className="form-label"> Full Name</label>
        <div className='invalid-feedback'>Please enter a name.</div>
        </div>
      </div>
    <div className='col-12 col-md-6'>
      <div className='form-floating'>
      <input type="email" name="email" className="form-control"placeholder='example@gmail.com'  onChange={getUserData} required></input>
      <label  className="form-label">Email </label>
      <div className='invalid-feedback'>Please provide a valid email.</div>
      </div>
    </div>

    <div className='col-12 col-md-6'>
      <div className='form-floating'>
      <input type="number" name="age" className="form-control"placeholder='Age'  onChange={getUserData} required></input>
      <label  className="form-label">Age </label>
      <div className='invalid-feedback'>Please enter a age.</div>
      </div>
    </div>

    <div className='col-12 mt-3'>
      <label className='form-label d-block mb-2'>Gender</label>
      <div>
        <input type="radio" 
        className='form-check-input m-2' 
        name='gender' autoComplete='off' 
        value='Male'
        onChange={getUserData}
        />
        <label className="form-check-label">Male</label>

        <input type="radio" 
        className='form-check-input m-2' 
        name='gender' autoComplete='off' 
        value='Female'
        checked={users.gender === 'Female'}
        onChange={getUserData}
        />
        <label className="form-check-label">Female</label>

        <input type="radio" 
        className='form-check-input m-2' 
        name='gender' autoComplete='off' 
        value='Other'
        onChange={getUserData}
        />
        <label className="form-check-label">Other</label>
      </div>
    </div>
    <div className="col-12 text-center">
    <button
     type="submit"
     className="btn btn-primary px-4 py-2"
     style={{ background: 'linear-gradient(90deg,#4f46e5,#06b6d4)', border: 0 }}
    > Create User
    </button>
     </div>
      </div>
    </form>

          </div>
        </div>
      </div>
   </div>
  </div>

 
  )
}

export default Create
