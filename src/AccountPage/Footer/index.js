import React from 'react'

function Footer() {
  return (
    <div style={{fontSize:"12px"}}>

      <div id='copy-rights' style={{backgroundColor:"black"}}>
        <ul className='d-flex flex-wrap px-5 py-4' style={{listStyleType:"none"}}>
          <div className='d-flex mb-4'>
          <li className='me-4'><a className='text-white text-decoration-none' href='#'>Contact Us <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
          <li className='me-4'><a className='text-white text-decoration-none' href='#'>Help/FAQ <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
          <li className='me-4'><a className='text-white text-decoration-none' href='#'>Kohl's Credit Card Privacy Policy <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
          <li className='me-4'><a className='text-white text-decoration-none' href='#'>Terms Of Use <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
          <li className='me-4'><a className='text-white text-decoration-none' href='#'>Security Awareness <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
          <li className='me-4'><a className='text-white text-decoration-none' href='#'>California Privacy Policy <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
          </div>

          <li className='me-4'><a className='text-white text-decoration-none' href='#'>CA-Do Not Sell My Personal Information <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
          <li className='me-4'><a className='text-white text-decoration-none' href='#'>Site Map <i className="text-white ms-2 fa-solid fa-arrow-up-right-from-square"></i></a></li>
        </ul>
      </div>

      <div className='text-white text-center pt-3 pb-4' style={{backgroundColor:"rgb(18,18,18)"}}>
        &copy; 2024 Kohl's Inc, Kohl's brand names are trademarks owned by KIN,Inc. All rights reserved. 
      </div>
    </div>
  )
}

export default Footer