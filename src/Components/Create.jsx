import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Create = () => {
  const [users,setUsers] = useState({});
  const dispatch = useDispatch();

  const getUserData = (e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
    console.log(users);
  }
  const handleSubmit = ()=>{
    dispatch()
  }
  
  return (
	<div>
	  <form class="w-50 mx-auto my-5"onSubmit={handleSubmit}>
	  <div class="mb-3">
    <label  class="form-label">Name</label>
    <input type="text" name="name" class="form-control" onChange={getUserData}></input>
    
  </div>
  <div class="mb-3">
    <label  class="form-label">Email </label>
    <input type="email" name="email" class="form-control"  onChange={getUserData} ></input>
   </div>
   <div class="mb-3">
    <label  class="form-label">Age </label>
    <input type="text" name="age" class="form-control"  onChange={getUserData} ></input>
   </div>
  {/* <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password"name="password" class="form-control"></input>
  </div> */}
  <div class=" mb-3">
  <input class="form-check-input" type="radio"name='gender'value="male" onChange={getUserData} />
  <label class="form-check-label" >
    Male
  </label>
</div>
<div class="mb-3">
  <input class="form-check-input" type="radio" name='gender' value="female" onChange={getUserData}/>
  <label class="form-check-label">
    Female
  </label>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
	</div>
  )
}

export default Create
