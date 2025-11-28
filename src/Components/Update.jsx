import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../Features/UserDetailSlice';


const Update = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState(null);
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && users.length) {
      const singleUser = users.find((ele) => ele.id === id);
      setUpdateData(singleUser || {});
    }
  }, []);
const newData = (e)=>{
	setUpdateData({...updateData,[e.target.name] : e.target.value})
}
const dispatch = useDispatch();
const navigate = useNavigate();

const handleUpdate = (e)=>{
  e.preventDefault();
  dispatch(updateUser(updateData));
  navigate('/read');
}
  if (!updateData) return <h3>Loading...</h3>;

  return (
    <div>
      <h2 className="m-4">Edit the Data</h2>

      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData?.name || ""}
			onChange={newData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData?.email || ""}
			onChange={newData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={updateData?.age || ""}
			onChange={newData}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={updateData?.gender === "male"}
			onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={updateData?.gender === "female"}
			onChange={newData}
            />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Update;
