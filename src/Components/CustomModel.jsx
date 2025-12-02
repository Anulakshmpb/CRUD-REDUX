import React from 'react'
import './CustomModel.css';
import { useSelector } from 'react-redux'

const CustomModel = ({ id, showPopup, setShowPopup }) => {
  const AllUsers = useSelector((state) => state.app?.users ?? []);
  const singleUser = AllUsers.find((ele) => String(ele.id) === String(id)) || {};

  if (!showPopup) return null;

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1050,
        background: 'rgba(2,6,23,0.55)',
        padding: 20
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="card"
        style={{
          width: 'min(520px, 96%)',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(2,6,23,0.44)',
          border: 0
        }}
      >
        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            padding: '20px 22px',
            background: 'linear-gradient(90deg,#0ea5e9 0%, #7c3aed 100%)',
            color: '#fff'
          }}
        >
          <div className="d-flex align-items-center" style={{ gap: 12 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                boxShadow: 'inset 0 -6px 18px rgba(0,0,0,0.12)'
              }}
              aria-hidden
            >
              👤
            </div>
            <div>
              <h5 style={{ margin: 0, fontWeight: 700, letterSpacing: 0.2 }}>{singleUser?.name ?? 'Unknown'}</h5>
              <small style={{ opacity: 0.92 }}>{singleUser?.email ?? ''}</small>
            </div>
          </div>

          <button
            onClick={() => setShowPopup(false)}
            className="btn btn-light"
            aria-label="Close"
            style={{
              borderRadius: 10,
              padding: '6px 10px',
              boxShadow: '0 6px 18px rgba(2,6,23,0.08)'
            }}
          >
            ❌
          </button>
        </div>

        <div style={{ padding: 22, background: '#fff' }}>
          <div className="mb-3" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ minWidth: 92 }}>
              <small className="text-muted">Gender</small>
              <div style={{ marginTop: 6, fontWeight: 600 }}>{singleUser?.gender ?? '-'}</div>
            </div>

            <div style={{ minWidth: 120 }}>
              <small className="text-muted">Age</small>
              <div style={{ marginTop: 6, fontWeight: 600 }}>{singleUser?.age ?? '-'}</div>
            </div>

            <div style={{ flex: 1, textAlign: 'right' }}>
              <small className="text-muted">ID</small>
              <div style={{ marginTop: 6, fontFamily: 'monospace', color: '#6b7280' }}>{singleUser?.id ?? '-'}</div>
            </div>
          </div>

          <hr style={{ borderColor: 'rgba(15,23,42,0.06)' }} />

          <div className="d-flex justify-content-end" style={{ gap: 10 }}>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setShowPopup(false)}
              style={{ borderRadius: 10, padding: '8px 14px' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomModel