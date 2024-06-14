import React from 'react';

function Navbar({ activeLink, onNavItemClick }) {
  return (
    <div className='navbar bg-white pt-3 pb-2'>
      <ul className='d-flex' style={{ listStyleType: "none" }}>
        <li className='me-5 pb-1'>
          <a href='#' className={activeLink === 'accounts' ? 'nav-link active' : 'nav-link'} onClick={() => onNavItemClick('accounts')} style={{ borderBottom: activeLink === 'accounts' ? '4px solid black' : 'none' }}>Accounts</a>
        </li>
        <li className='me-5'>
          <a href='#' className={activeLink === 'payments' ? 'nav-link active' : 'nav-link'} onClick={() => onNavItemClick('payments')} style={{ borderBottom: activeLink === 'payments' ? '4px solid black' : 'none' }}>Payments</a>
        </li>
        <li className='me-5'>
          <a href='#' className={activeLink === 'statements' ? 'nav-link active' : 'nav-link'} onClick={() => onNavItemClick('statements')} style={{ borderBottom: activeLink === 'statements' ? '4px solid black' : 'none' }}>Statements</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
