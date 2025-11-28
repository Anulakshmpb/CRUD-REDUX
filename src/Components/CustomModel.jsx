import React from 'react'
import './CustomModel.css';
import { useSelector } from 'react-redux'

const CustomModel = ({id,showPopup,setShowPopup}) => {
	const AllUsers = useSelector((state)=>state.app.users);
	const singleUser = AllUsers.filter((ele)=>ele.id ===id);
	
return (
	<div className='modalBackground'>
	  <div className="modalContainer">
	  <button onClick={()=>setShowPopup(false)}className='button'>❌</button>

<div className='div'>
	<h1>{singleUser[0].name}</h1>
	<h2>{singleUser[0].email}</h2>
	<h5>{singleUser[0].gender}</h5>
	<h5>{singleUser[0].age}</h5>
	
</div>
	  </div>
	</div>
  )
}

export default CustomModel

