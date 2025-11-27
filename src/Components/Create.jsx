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
	<div>
    <h2 className="m-4">Fill the Data</h2>
	  <form className="w-50 mx-auto my-5"onSubmit={handleSubmit}>
	  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" name="name" className="form-control" onChange={getUserData}></input>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Email </label>
    <input type="email" name="email" className="form-control"  onChange={getUserData} ></input>
   </div>
   <div className="mb-3">
    <label  className="form-label">Age </label>
    <input type="text" name="age" className="form-control"  onChange={getUserData} ></input>
   </div>
  {/* <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password"name="password" className="form-control"></input>
  </div> */}
  <div className=" mb-3">
  <input className="form-check-input" type="radio"name='gender'value="male" onChange={getUserData} />
  <label className="form-check-label" >
    Male
  </label>
</div>
<div className="mb-3">
  <input className="form-check-input" type="radio" name='gender' value="female" onChange={getUserData}/>
  <label className="form-check-label">
    Female
  </label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
	</div>
  )
}

export default Create
