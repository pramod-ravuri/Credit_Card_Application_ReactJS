import React from 'react';

function Header({ onHeaderItemClick,onMessageClick }) {
  return (
    <div className='d-flex justify-content-between px-4 py-3 align-items-center bg-white border-bottom'>
      <div className='d-flex align-items-center'>
        <i className="fa-solid fa-bars fs-3 me-3"></i>
        <span className='fs-5'>MENU</span>
      </div>
      <div className='fs-2 fw-semibold' style={{ marginInlineStart: "5em" }}>
        KOHLS
      </div>
      <div className='d-flex align-items-center' style={{ fontSize: "13px" }}>
        <div className='me-2'>
          <div className='text-end'>Account(...2701)</div>
          <div>Subrahmanyam Poluru</div>
        </div>
        <div className='me-4' onClick={() => onHeaderItemClick("profile")} style={{cursor:"pointer"}}>
          <i className="fa-regular fa-user border p-2" style={{ borderRadius: "50%" }}></i>
        </div>
        <div className='me-4' onClick={onMessageClick} style={{cursor:"pointer"}}>
          <i className="fa-regular fa-envelope fs-3"></i>
        </div>
        <div className='border px-3 py-1' style={{ borderRadius: "20px" }}>Log out</div>
      </div>
    </div>
  );
}

export default Header;
