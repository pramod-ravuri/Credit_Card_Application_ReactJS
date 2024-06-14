import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {

 const navigate = useNavigate();

 const handleClick = () =>{
    navigate("/loginpage");
 }

  return (
       <div style={{backgroundColor:"hsl(0,0%,84%)",height:"450px"}}>
        <div className='m-auto' style={{width:"55%"}}>
         <label className='mt-5 mb-3 fs-4'>Forgot Password</label>
         <div className='border pt-4 px-4 pb-2' style={{backgroundColor:"white",borderRadius:"10px"}}>
            <p>Let's look up your account and then verify your identity.</p>
           
           <div style={{width:"80%",margin:"auto"}}>
           <label className='mt-2 mb-2'>username*</label>
           <div class="input-group">
           <input type="text" className="w-100" style={{backgroundColor: "hsl(218, 92%, 95%)",padding:"10px",borderRadius:"7px",border:"1px solid hsl(0,0%,68%)",outline:"none"}} placeholder='polurus' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          </div>



           <div className='text-center'>
            <div className='border-bottom mt-5 pb-3'>
                <button style={{padding:"5px 65px",border:"none",borderRadius:"3px",backgroundColor:"black",color:"white"}} className='me-3'>Cancel</button>
                <button onClick={handleClick} style={{padding:"5px 65px",border:"none",borderRadius:"3px",backgroundColor:"black",color:"white"}}>Continue</button>
            </div>
            <p className='mt-3'>
                <a className='text-dark' href='#'>Forgot username?</a>
            </p>
            </div>
         </div>
         </div>
       </div>
    );
}

export default Main;

