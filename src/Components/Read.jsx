import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser, deleteUser } from '../Features/UserDetailSlice';
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';
import { useToast } from './ToastContext';
const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [radioData, setRadioData] = useState("");
  const { showSuccess, showWarning } = useToast();
  const [delModal, setDelModal] = useState(false);
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return (<h2 className="text-center my-5">Loading...</h2>)
  }

  return (
    <div className="container py-4">
      {showPopup && <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}

      <header
        className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mb-4"
        style={{
          gap: 12
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontWeight: 700, letterSpacing: 0.2 }}>All Data</h2>
          <small className="text-muted m-2">Browse and manage users — quick actions and filters</small>
        </div>

        <div className="d-flex align-items-center flex-column flex-sm-row" style={{ gap: 12 }}>
          <h4 className='text-center m-0' style={{ minWidth: 80 }}>Gender</h4>
          <div className="btn-group" role="group" aria-label="Gender filters" style={{ boxShadow: '0 6px 18px rgba(2,6,23,0.06)', gap: 8, display: 'flex', alignItems: 'stretch' }}>
            <input type="radio" className="btn-check" name="genderFilter" id="filterAll" value="" checked={radioData === ""} onChange={(e) => setRadioData(e.target.value)} />
            <label className="btn btn-outline-light" htmlFor="filterAll"
              style={{ background: radioData === "" ? 'linear-gradient(to right, #3d88e4ff, #9f55e8ff)' : 'transparent', color: radioData === "" ? '#0b1220' : '#0b0b0bff', borderRadius: 8, flex: 1, padding: '10px 12px', border: '1px solid #9d9f9fff', transition: 'box-shadow .18s ease, transform .12s ease' }}>
              All</label>

            <input type="radio" className="btn-check" name="genderFilter" id="filterMale" value="Male" checked={radioData === "Male"} onChange={(e) => setRadioData(e.target.value)} />
            <label className="btn btn-outline-light" htmlFor="filterMale"
              style={{ background: radioData === "Male" ? 'linear-gradient(to right, #3d88e4ff, #9f55e8ff)' : 'transparent', color: radioData === "Male" ? '#0b1220' : '#080808ff', borderRadius: 8, flex: 1, padding: '10px 12px', border: '1px solid #9d9f9fff', transition: 'box-shadow .18s ease, transform .12s ease' }}>
              Male</label>

            <input type="radio" className="btn-check" name="genderFilter" id="filterFemale" value="Female" checked={radioData === "Female"} onChange={(e) => setRadioData(e.target.value)} />
            <label className="btn btn-outline-light" htmlFor="filterFemale"
              style={{ background: radioData === "Female" ? 'linear-gradient(to right, #3d88e4ff, #9f55e8ff)' : 'transparent', color: radioData === "Female" ? '#0b1220' : '#070707ff', borderRadius: 8, flex: 1, padding: '10px 12px', border: '1px solid #9d9f9fff', transition: 'box-shadow .18s ease, transform .12s ease' }}>
              Female</label>
          </div>
        </div>
      </header>

      <div className="row g-3">
        {users &&
          users
            .filter((ele) => {
              if (ele.name.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes((searchData || "").toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData
              } else if (radioData === "Female") {
                return ele.gender === radioData
              } else return ele;
            })
            .map((ele) => (
              <div key={ele.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card h-100"
                  style={{
                    border: '0',
                    borderRadius: 12,
                    boxShadow: '0 8px 28px gray',
                    overflow: 'hidden',
                    transition: 'transform .18s ease, box-shadow .18s ease'
                  }}
                >
                  <div className="card-body d-flex flex-column" style={{ padding: '1.5rem' }}>
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div>
                        <h5 className="card-title mb-1" style={{ fontWeight: 700 }}>{ele.name}</h5>
                        <p className="card-subtitle text-muted small mb-0">{ele.email}</p>
                      </div>
                      <div style={{ fontSize: 12, color: '#3a3939ff' }}>
                        <span style={{ background: '#f3f4f6', padding: '6px 8px', borderRadius: 8 }}>{ele.gender}</span>
                      </div>
                    </div>

                    <div className="mt-auto d-flex gap-2" style={{ marginTop: 12 }}>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        style={{ flex: 1, background: 'linear-gradient(90deg,#4f46e5,#06b6d4)', border: 0 }}
                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                      >
                        View
                      </button>

                      <Link to={`/edit/${ele.id}`} className="btn btn-sm btn-outline-warning" style={{ flex: 1 }}>
                        Edit
                      </Link>

                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        style={{ flex: 1 }}
                        onClick={() => {
                          dispatch(deleteUser(ele.id));
                          setDelModal(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="text-center mt-5">
        <small className="text-muted">
          Showing{' '}
          <strong style={{ color: '#0b1220', fontSize: 14 }}>
            {users
              ?.filter((ele) => {
                if (ele.name.length === 0) return ele;
                return ele.name.toLowerCase().includes((searchData || "").toLowerCase());
              })
              .filter((ele) => {
                if (radioData === "Male") return ele.gender === radioData;
                if (radioData === "Female") return ele.gender === radioData;
                return ele;
              }).length ?? 0}
          </strong>
          {' '}of {users?.length ?? 0} users
        </small>
      </div>
    </div>
  )
}

{
  delModal && (
    <div className="container py-4">
      <h2>Are you sure,do you want to delete the user?</h2>
      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        style={{ flex: 1 }}
        onClick={() => {
          setDelModal(false);
        }}
      >
        Cancel
      </button>
      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        style={{ flex: 1 }}
        onClick={() => {
          dispatch(deleteUser(ele.id));
          setDelModal(false);
        }}
      >
        Delete
      </button>
    </div>
  )
}
export default Read
