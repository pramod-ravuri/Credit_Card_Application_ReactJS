import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {

const navigate = useNavigate();

const handleClick = () =>{
    navigate("/accountpage");
}

  return (
       <div style={{backgroundColor:"hsl(0,0%,84%)",height:"530px",fontSize:"12px"}}>
        <div className='m-auto' style={{width:"55%"}}>
        <h4 className='pt-5 pb-2'>One time passcode</h4>
        <div className='border p-4 bg-white' style={{borderRadius:"7px"}}>
            <p style={{marginBottom:"30px"}}>We sent a temporary six-digit passcode to P******@GMAIL.COM.Please enter it below.</p>
            <div>
                <div style={{marginBottom:"65px"}}>
                <label className='mb-2'>Passcode*</label>
                <div>
                <input className='w-100 p-2' style={{borderRadius:"5px"}} type='password'/>
                </div>
                </div>


                <div className='mb-2'>
                    didn't get a passcode? Request a new passcode.
                </div>

                <div className='mb-5'>
                    Contact us if you no longer have access to your email on file.
                </div>
               

                
                <div className='mb-5' style={{textAlign:"center"}}>
                    <button style={{padding:"8px 70px",borderStyle:"none",borderRadius:"6px",backgroundColor:"black",color:"white"}} className='me-3'>Cancel</button>
                    <button onClick={handleClick} style={{padding:"8px 70px",borderStyle:"none",borderRadius:"6px",backgroundColor:"hsl(0,0%,84%)"}}>Continue</button>
                </div>

                
               

               
            </div>
        </div>
        </div>
       </div>
    );
}

export default Main;
