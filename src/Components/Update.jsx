import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../Features/UserDetailSlice';

// ...existing code...
const Update = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState(null);
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && users.length) {
      const singleUser = users.find((ele) => ele.id === id);
      setUpdateData(singleUser || {});
    }
  }, []); // ...existing code...

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value })
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate('/read');
  }
  if (!updateData) return <h3 style={{ textAlign: 'center', marginTop: 40 }}>Loading...</h3>;

  return (
    <div className="container py-5" style={{ maxWidth: 820 }}>
      <div className="card shadow-sm" style={{ borderRadius: 14, overflow: 'hidden', border: '0' }}>
        <div
          className="p-4"
          style={{
            background: 'linear-gradient(90deg,#0ea5e9 0%, #7c3aed 100%)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontWeight: 700, letterSpacing: 0.4 }}>Edit User</h3>
            <small style={{ opacity: 0.92 }}>Update details and save changes</small>
          </div>
          <div style={{ fontSize: 18, opacity: 0.95 }}>✏️</div>
        </div>

        <div className="card-body p-4 p-md-5" style={{ background: '#fff' }}>
          <form onSubmit={handleUpdate} className="needs-validation" noValidate>
            <div className="row gx-3 gy-3">
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full name"
                    value={updateData?.name || ""}
                    onChange={newData}
                    style={{ borderRadius: 10 }}
                    required
                  />
                  <label htmlFor="name">Full name</label>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    value={updateData?.email || ""}
                    onChange={newData}
                    style={{ borderRadius: 10 }}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="form-floating">
                  <input
                    id="age"
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Age"
                    value={updateData?.age || ""}
                    onChange={newData}
                    style={{ borderRadius: 10 }}
                  />
                  <label htmlFor="age">Age</label>
                </div>
              </div>

              <div className="col-12 col-md-8 d-flex align-items-center">
                <div style={{ width: '100%' }}>
                  <label className="form-label mb-2" style={{ fontWeight: 600 }}>Gender</label>

                  <div className="btn-group" role="group" aria-label="Gender" style={{ width: '100%', gap: 8 }}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="upd-gender-male"
                      value="male"
                      checked={updateData?.gender === "male"}
                      onChange={newData}
                    />
                    <label
                      className="btn"
                      htmlFor="upd-gender-male"
                      style={{
                        flex: 1,
                        borderRadius: 8,
                        border: '1px solid rgba(13,17,23,0.06)',
                        background: updateData?.gender === "male" ? 'linear-gradient(90deg,#4f46e5,#06b6d4)' : '#fff',
                        color: updateData?.gender === "male" ? '#fff' : '#0b1220',
                        boxShadow: updateData?.gender === "male" ? '0 6px 18px rgba(79,70,229,0.12)' : 'none',
                        padding: '10px 12px'
                      }}
                    >
                      Male
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="upd-gender-female"
                      value="female"
                      checked={updateData?.gender === "female"}
                      onChange={newData}
                    />
                    <label
                      className="btn"
                      htmlFor="upd-gender-female"
                      style={{
                        flex: 1,
                        borderRadius: 8,
                        border: '1px solid rgba(13,17,23,0.06)',
                        background: updateData?.gender === "female" ? 'linear-gradient(90deg,#4f46e5,#06b6d4)' : '#fff',
                        color: updateData?.gender === "female" ? '#fff' : '#0b1220',
                        boxShadow: updateData?.gender === "female" ? '0 6px 18px rgba(79,70,229,0.12)' : 'none',
                        padding: '10px 12px'
                      }}
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 text-end" style={{ marginTop: 6 }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    background: 'linear-gradient(90deg,#4f46e5,#06b6d4)',
                    border: 0,
                    padding: '10px 18px',
                    borderRadius: 10,
                    boxShadow: '0 10px 24px rgba(6,182,212,0.12)'
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update