import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../Features/UserDetailSlice';

export default function Navbar() {
  const AllUsers = useSelector((state)=>state.app.users);
  const dispatch = useDispatch();
  const[searchData,setSearchData] = useState("");
 useEffect(()=>{
  dispatch(searchUser(searchData));
 },[searchData]);
 
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: 'linear-gradient(90deg, #0ea5e9 0%, #7c3aed 100%)',
        padding: '0.6rem 1rem',
        boxShadow: '0 6px 18px rgba(15,23,42,0.12)',
        borderRadius: 12,
        alignItems: 'center',
        margin: '0.6rem'
      }}
    >
      <div className="container-fluid" style={{gap:16, alignItems:'center'}}>
        <Link to="/" className="d-flex align-items-center text-decoration-none" style={{color:'#fff'}}>
          <div style={{
            width:44,
            height:44,
            borderRadius: 10,
            background: 'rgba(255,255,255,0.12)',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginRight:12,
            boxShadow:'inset 0 -4px 12px rgba(0,0,0,0.08)'
          }}>👤</div>
          <div>
            <h4 className="mb-0 fs-5 fw-bold" style={{letterSpacing:0.6}}>RTK</h4>
            <small style={{color:'rgba(255,255,255,0.85)'}}>Create & manage users</small>
          </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor:'rgba(255,255,255,0.16)'}}>
          <span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:16}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active" style={{color:'rgba(255,255,255,0.92)', padding:'0.5rem 0.8rem', borderRadius:8}}>Create Post</Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className="nav-link" style={{color:'rgba(255,255,255,0.92)', padding:'0.5rem 0.8rem', borderRadius:8}}>
                All Post <span className="badge" style={{background:'rgba(255,255,255,0.12)', color:'#fff', marginLeft:8, padding:'0.28rem 0.5rem', borderRadius:8}}>{AllUsers.length}</span>
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={(e)=>e.preventDefault()} style={{minWidth:240}}>
            <div className="input-group" style={{boxShadow:'0 6px 18px rgba(2,6,23,0.08)'}}>
              <span className="input-group-text" id="search-addon" style={{background:'#ffffff', borderTopLeftRadius:8, borderBottomLeftRadius:8}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>              </span>
              <input 
                className="form-control"
                type="search"
                placeholder="Search users..."
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(e)=>setSearchData(e.target.value)}
                style={{borderTopRightRadius:8, borderBottomRightRadius:8, border:'none'}}
              />
            </div>

            <button className="btn ms-2" type="submit" style={{background:'rgba(255,255,255,0.12)', color:'#fff', borderRadius:8}}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}