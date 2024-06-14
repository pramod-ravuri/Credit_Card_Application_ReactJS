import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {

 const navigate = useNavigate();

 const handleClick = () =>{
    navigate("/passcodepage");
 }

  return (
       <div style={{backgroundColor:"hsl(0,0%,84%)",height:"650px",fontSize:"12px"}}>
        <div className='m-auto' style={{width:"55%"}}>
        <h4 className='pt-5 pb-2'>We need to make sure it's you</h4>
        <div className='border p-4 bg-white'>
            <p>To protect your account,we'll verify your identify by sending you a temporary passcode.Select your verification method in the next step.</p>
            <div>
                <div className='mb-2'>Verification method</div>

                <div className='ms-4'>
                <div className='d-flex mb-2'>
                   <input className='me-2' type='radio' style={{width: "20px", height: "20px"}}/>
                   <div>
                     <div>Email</div>
                     <div>p********@GMAIL.COM</div>
                   </div>
                </div>

                <div className='d-flex mb-2'>
                   <input className='me-2' type='radio' style={{width: "20px", height: "20px"}}/>
                   <div>
                     <div>Mobile*</div>
                     <div>***-***-2961</div>
                   </div>
                </div>

                <div className='d-flex mb-4'>
                   <input className='me-2' type='radio' style={{width: "20px", height: "20px"}}/>
                   <div>
                     <div>I already have a code</div>
                   </div>
                </div>


                <div className='d-flex mb-5'>
                   <input className='me-2' type='checkbox' style={{width: "20px", height: "20px"}}/>
                   <div>
                     <div>Do you want to remember this device?</div>
                   </div>
                </div>
                </div>

                
                <div className='mb-4' style={{textAlign:"center"}}>
                    <button style={{padding:"8px 70px",borderStyle:"none",borderRadius:"6px",backgroundColor:"black",color:"white"}} className='me-3'>Cancel</button>
                    <button onClick={handleClick} style={{padding:"8px 70px",borderStyle:"none",borderRadius:"6px",backgroundColor:"hsl(0,0%,84%)"}}>Continue</button>
                </div>

                
                <p className='ms-4' style={{fontSize:"9px"}}>
                    By selecting one of the contact methods,Iam giving a one time authorization to send me an identification code. I verify that this is my email or mobile phone number. Mobile messages and data rates may apply. 
                </p>


                <p className='ms-4 mb-4' style={{fontSize:"9px"}}>*If you provided a cellular phone number or a number that is later converted to a cellular phone number,you consent that kohl's department store and any other servicer or owner of your account may contact you about your account via text message or telephone, including the use of prerecorded messages,and calls and messages from automated dialing systems.Mobile,message and data rates may apply.</p>


               
            </div>
        </div>
        </div>
       </div>
    );
}

export default Main;
