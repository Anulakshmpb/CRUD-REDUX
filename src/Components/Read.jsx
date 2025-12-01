import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { showUser,deleteUser } from '../Features/UserDetailSlice';
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';

const Read = () => {

const dispatch = useDispatch();
const {users,loading,searchData} = useSelector((state)=>state.app);
const[id,setId]=useState();
const[showPopup,setShowPopup]=useState(false);
const[radioData,setRadioData] = useState("");


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

	  <input type="radio" class="form-check-input m-1" 
	  name='gender' value="" checked={radioData===""}
	  onChange={(e)=>{setRadioData(e.target.value)}}/>
	  <label class="form-check-label">All</label>

	  <input type="radio" class="form-check-input m-1" name='gender' value="Male" 
	  checked={radioData==="Male"} 
	  onChange={(e)=>{setRadioData(e.target.value)}}/>
	  <label class="form-check-label">Male</label>

	  <input type="radio" class="form-check-input m-1" name='gender' value="Female" 
	  checked={radioData==="Female"}  
	  onChange={(e)=>{setRadioData(e.target.value)}}/>
	  <label class="form-check-label">Female</label>

	  <div>
	
{users &&
users
.filter((ele)=>{
	if(ele.name.length === 0){
		return ele;
	}
	else{
		return ele.name
		.toLowerCase()
		.includes(searchData.toLowerCase());
	}
})
.filter((ele)=>{
	if(radioData === "Male"){
		return ele.gender === radioData
	}else if(radioData ==="Female"){
		return ele.gender === radioData
	}else return ele;
	
})
.map((ele)=>(
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
