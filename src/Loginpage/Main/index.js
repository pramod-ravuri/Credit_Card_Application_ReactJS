import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {

 const navigate = useNavigate();

 const handleClick = () =>{
    navigate("/verificationpage");
 }

  return (
       <div style={{backgroundColor:"hsl(0,0%,84%)",height:"520px"}}>
        <div className='row m-auto pt-5' style={{width:"60%"}}>
        <div className='col-lg-7'>
            <div className="border box-shadow p-4 bg-white" style={{borderRadius:"8px"}}>
                <div className='d-flex align-items-center mt-2 mb-4'>
                    <i className="fa-brands fa-wordpress fs-3 me-4"></i>
                    <div className='fs-4 fw-bold'>My kohl's card</div>
                </div>
                <div className='mb-3'>Access your kohl's Card account anytime , anywhere.</div>
                <ul style={{marginBottom:"150px",fontSize:"12px"}}>
                        <li>Pay your bill online</li>
                        <li>Request a credit limit increase</li>
                        <li>Enroll in paperless components</li>
                </ul>
                
                <div className='d-flex' style={{fontSize:"12px"}}>
                    <p>
                        <a href='#' className='text-dark me-4'>Shop at Kohl's Now!</a>
                        <button style={{padding:"5px 30px",color:"white",backgroundColor:"black"}}>Apply now</button>
                    </p>
                </div>
            </div>
        </div>
        <div className='col-lg-5'>
            <div className="border box-shadow p-3 bg-white" style={{borderRadius:"8px"}}>
                <div className='mb-1'>
                 <div>Customer Login</div> 
                 <div>Reminder You have</div> 
                 <div>a seperate username</div>
                 <div>and password to log</div> 
                 <div>into kohl's.com</div>
                 </div>
                 
                 <div style={{fontSize:"11px",position:"relative"}}>
                 <div>Need online access? <a href='#' className='text-dark'>Register</a></div>
                 <label className='mb-2'>username*</label>
                 <input type='text' className='w-100 py-2 mb-2' style={{borderRadius:"5px",border:"1px solid hsl(216,17%,83%)",backgroundColor:"hsl(218,92%,95%)"}} placeholder='polurus'/>
                 <label className='mb-2'>Password*</label>
                 <input type='password' style={{borderRadius:"5px", border:"1px solid hsl(216,17%,83%)",backgroundColor:"hsl(218,92%,95%)"}} className='w-100 py-2'/>
                 <i style={{position:"absolute",bottom:"13px",right:"10px"}} className="fa-regular fa-eye-slash"></i>
                 </div>

                 <div className='text-center mt-4' style={{fontSize:"12px",marginBottom:"47px"}}>
                    <button onClick={handleClick} className='text-white'style={{backgroundColor:"black",padding:"3px 45px"}}>Log in</button>
                 </div>

              <div className='text-center' style={{fontSize:"12px"}}>
                 <div className='mb-2'>
                    <a className='text-dark' href='#'>Forgot username?</a>
                 </div>
                 <div>
                    <a className='text-dark' href='#'>Forgot password?</a>
                 </div>
              </div>
                 

            </div>
        </div>
    </div>

       </div>
    );
}

export default Main;
