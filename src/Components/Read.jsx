import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { showUser,deleteUser } from '../Features/UserDetailSlice';
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';

const Read = () => {

const dispatch = useDispatch();
const {users,loading} = useSelector((state)=>state.app);
const[id,setId]=useState();
const[showPopup,setShowPopup]=useState(false);

useEffect(()=>{
	dispatch(showUser());
},[]);
if(loading){
	return (<h2>Loading...</h2>)
}

  return (
	<div>
		{showPopup && <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
	  <h2>All Data</h2>
	  <div>
	
{users && users.map((ele)=>(
	<div key={ele.id} className="card w-25 mx-auto my-2">
  <div className="card-body m-2">
    <h5 className="card-title m-3">{ele.name}</h5>
    <p className="card-text mb-4">{ele.email}</p>
	{/* <p className="card-text">{ele.gender}</p>
	<p className="card-text">{ele.age}</p> */}
    <button className="card-link" onClick={()=>[setId(ele.id),setShowPopup(true)]}> View </button>
    <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
	<Link onClick={()=>{dispatch(deleteUser(ele.id))}} className="card-link">Delete</Link>
  </div>
</div>))}
	  </div>
	</div>
  )
}

export default Read
