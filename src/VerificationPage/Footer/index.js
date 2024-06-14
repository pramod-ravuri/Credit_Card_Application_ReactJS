import React from 'react'

function Footer() {
  return (
    <div style={{fontSize:"12px"}}>

      <div id='copy-rights' style={{height:"90px",backgroundColor:"black"}}>
        <ul className='mt-5 d-flex justify-content-around' style={{listStyleType:"none",lineHeight:"80px",width:"50%",margin:"auto"}}>
          <li><a className='text-white text-decoration-none' href='#'>Contact Us</a></li>
          <li><a className='text-white text-decoration-none' href='#'>Help/FAQ</a></li>
          <li><a className='text-white text-decoration-none' href='#'>Kohl's Credit Card Privacy Policy</a></li>
          <li><a className='text-white text-decoration-none' href='#'>Security Awareness</a></li>
        </ul>
      </div>

      <div className='text-white text-center pt-2 pb-4'>
        &copy; 2024 Kohl's Inc, Kohl's brand names are trademarks owned by KIN,Inc. All rights reserved. 
      </div>
    </div>
  )
}

export default Footer