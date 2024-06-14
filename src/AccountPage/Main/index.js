import React, { useState } from 'react';

function Main({ activeContent }) {

  const [activeSection, setActiveSection] = useState('profile');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleMakePaymentClick = () => {
    setShowPaymentForm(true);
  };
  
  let content;
  
  switch (activeContent) {

    case 'message':
      content = (
        <div>
          <div className='text-white'>keerthi</div>
        </div>
      );
      break;

      case 'accounts':
      content = <div>
      <div style={{backgroundColor:"hsl(0,0%,98%)",height:"980px"}}>
      
      <div className='d-flex align-items-center'>
        <i class="fa-brands fa-slack ms-3 fs-1 py-5 px-4 pe-5"></i>
        <div>
           <div>Good Evening,</div>
           <div>Subrahmanyam</div>
           <div>card ending in 0101</div>
        </div>
      </div>
      
      
      <div className='d-flex' style={{marginLeft:"30px"}}>
          <div className='border me-3 px-3 shadow-sm bg-white' style={{width:"35%",borderRadius:"5px"}}>
      
             <div className='border-bottom text-center'>
                 <div>Current balance</div>
                 <div className='fs-1'>$0.00</div>
             </div>
      
      
             <div className='d-flex flex-column mx-5 my-3'>
                 <div className='d-flex mb-3'>
                    <div>Payment due date</div>
                    <div style={{ marginLeft: 'auto' }}>02/20/2024</div>
                 </div>
      
                 <div className='d-flex mb-3'>
                    <div>Minimum Payment<br/> due</div>
                    <div style={{ marginLeft: 'auto' }}>$0.00</div>
                 </div>
      
                 <div className='d-flex mb-3'>
                    <div>
                    <div>Credit limit</div>
                    <div>
                    <a style={{fontSize:"13px"}} href='#'>Request an increase</a>
                    </div>
                 </div>
                <div style={{ marginLeft: 'auto' }}>$800.00</div>
                </div>
                <div className='d-flex mb-3'>
                   <div>Available credit</div>
                   <div style={{ marginLeft: 'auto' }}>$800.00</div>
                </div>
                <div className='d-flex mb-3'>
                    <div>Autopay</div>
                    <div style={{ marginLeft: 'auto' }}>Off</div>
                </div>
            </div>
      
            <div className='text-center mb-4'>
               <button className='border-0' style={{padding:"8px 45px",borderRadius:"5px"}}>Make a Payment</button>
            </div>
            
      
          </div>
      
      
          <div className='border px-3 shadow-sm bg-white' style={{width:"35%",borderRadius:"5px"}}>
      
              <div className='border-bottom text-center'>
                  <div>Last statement balance</div>
                  <div className='fs-1'>$0.00</div>
              </div>
      
              <div className='d-flex flex-column mx-5 my-3 mb-5'>
                 <div className='d-flex mb-3'>
                    <div>Last statement date</div>
                    <div style={{ marginLeft: 'auto' }}>12/25/2023</div>
                 </div>
      
                 <div className='d-flex mb-3'>
                    <div>Last payment amount</div>
                    <div style={{ marginLeft: 'auto' }}>$156.34</div>
                 </div>
      
                 <div className='d-flex mb-3'>
                    <div>Last payment posted</div>
                    <div style={{ marginLeft: 'auto' }}>11/27/2023</div>
                 </div>
      
                 <div className='d-flex mb-4'>
                    <div>Statement delivery</div>
                    <div style={{ marginLeft: 'auto' }}>Electronic</div>
                 </div>
      
             </div>
      
      
             <div className='text-center mb-4'>
               <button className='border-0 text-white bg-dark' style={{padding:"8px 45px",borderRadius:"5px"}}>View statements</button>
            </div>
            
          </div>
      </div>
      
      
      <div className='d-flex justify-content-between my-4' style={{width:"70%",marginLeft:"30px"}}>
          <div>Recent transactions</div>
          <div className='d-flex align-items-center'>
              <i className="fa-solid fa-print mt-1 me-1" style={{color:"hsl(215,90%,51%)"}}></i>
              <a href='#'>print transactions</a>
          </div>
      </div>
      
      
      <div className='border shadow bg-white p-4 border-0' style={{width:"70%",marginLeft:"30px"}}>
          <div className='border-bottom pb-3'>Transactions</div>
          <div className='d-flex justify-content-around  border-bottom py-3'>
              <div>Date</div>
              <div>Description</div>
              <div>Type</div>
              <div>Card</div>
              <div>Amount</div>
          </div>
          <div className='text-center border-bottom py-2'>
             <i>No data available</i>
          </div>
          <div className='text-center pt-4'>
              <a href='#' className='text-dark'>ALL TRANSACTIONS</a>
          </div>
      </div>
      
      
      <div className='mt-4' style={{fontSize:"14px"}}>
          <p style={{marginLeft:"30px"}}>By responding to the offer(s) on this site,you may be communicating to the company which provides the offer that you are a kohl's Card customer.</p>
      </div>
      
      </div>
    </div>;
      break;


      case 'payments':
        content = (
          <div>
            {showPaymentForm ? (
                <div className='p-4' style={{backgroundColor:"hsl(0,0%,98%"}}>
                <p className='fs-3'>Payment accounts</p>
                <p style={{fontSize:"0.9em"}}>You can add up to 1 different options. If you want to add additional payment account, you will need to delete or edit one<br/> of the existing accounts.</p>
                <p className='border w-100 shadow bg-white px-5 py-5'>
                  <div className="row border-bottom pb-4">
                    <div className="col-lg-5">Issuer</div>
                    <div className="col-lg-2">Number</div>
                    <div className="col-lg-3">Payment account</div>
                    <div className="col-lg-2"></div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-lg-5">
                      BANK OF AMERICA,N.A.<br/>Routing number:121000358
                    </div>
                    <div className="col-lg-2">
                       (...5009)
                    </div>
                    <div className="col-lg-3">Checking</div>
                    <div className="col-lg-2 d-flex">
                        <div className="me-3">
                        <a className="text-decoration-none d-flex" href="#">
                        <i className="fa-solid fa-pencil mt-1 pe-2"></i>
                        <div>Edit</div>
                        </a>
                        </div>
                        <div>
                        <a className="text-decoration-none d-flex" href="#">
                        <i className="fa-solid fa-trash-can mt-1 pe-2"></i>
                        <div>Delete</div>
                        </a>
                        </div>
                    </div>
                  </div>
                </p>
             </div>
            ) : (
              <div></div>
            )}
            {!showPaymentForm && (

<div>
<div style={{backgroundColor:"hsl(0,0%,98%)",height:"980px"}}>

<div className='d-flex align-items-center'>
<i class="fa-brands fa-slack ms-3 fs-1 py-5 px-4 pe-5"></i>
<div>
<div>Good Evening,</div>
<div>Subrahmanyam</div>
<div>card ending in 0101</div>
</div>
</div>


<div className='d-flex' style={{marginLeft:"30px"}}>
<div className='border me-3 px-3 shadow-sm bg-white' style={{width:"35%",borderRadius:"5px"}}>

<div className='border-bottom text-center'>
    <div>Current balance</div>
    <div className='fs-1'>$0.00</div>
</div>


<div className='d-flex flex-column mx-4 my-3'>
    <div className='d-flex mb-3'>
       <div>Payment due date</div>
       <div style={{ marginLeft: 'auto' }}>02/20/2024</div>
    </div>

    <div className='d-flex mb-3'>
       <div>Statement balance</div>
       <div style={{ marginLeft: 'auto' }}>$0.00</div>
    </div>


    <div className='d-flex mb-3'>
       <div>Minimum Payment<br/> due</div>
       <div style={{ marginLeft: 'auto' }}>$0.00</div>
    </div>


    <div className='d-flex mb-3'>
       <div>Amount past due</div>
       <div style={{ marginLeft: 'auto' }}>$0.00</div>
    </div>

</div>


 <div className='text-center mb-4'>
      <button className='border-0' style={{ padding: '8px 45px', borderRadius: '5px' }} onClick={handleMakePaymentClick}>
            Make a Payment
      </button>
  </div>


</div>


<div className='border px-3 shadow-sm bg-white' style={{width:"35%",borderRadius:"5px"}}>

 <div className='border-bottom text-center'>
     <div>AutoPay</div>
     <div className='fs-1'>Off</div>
     <div className='text-center mb-4'>
        <button className='border-0 text-white bg-dark' style={{padding:"5px 65px 8px 65px",borderRadius:"5px"}}>Manage</button>
     </div>
 </div>

<div className='text-center mt-5 mb-4'>
 <div>Payment Accounts</div>
 <div className='fs-1'>1</div>
</div>

<div className='text-center mb-4'>
     <button className='border-0 text-white bg-dark' style={{padding:"5px 65px 8px 65px",borderRadius:"5px"}}>Manage</button>
</div>

</div>
</div>


<div className='d-flex justify-content-between my-4' style={{width:"70%",marginLeft:"30px"}}>
<div>Payment activity</div>
<div className='d-flex align-items-center'>
 <i className="fa-solid fa-print mt-1 me-1" style={{color:"hsl(215,90%,51%)"}}></i>
 <a href='#'>print transactions</a>
</div>
</div>


<div className='border shadow bg-white p-4 border-0' style={{width:"70%",marginLeft:"30px"}}>

<table>
<th className='row mx-3 border-bottom pb-3'>
<td className='col me-5'>Date</td>
<td className='col ms-5'>Account</td>
<td className='col mx-3'>Amount</td>
<td className='col mx-2'>Status</td>
<td className='col mx-2'>Confirmation#</td>
</th>
<tr className='row mx-3 border-bottom py-3'>
<td className='col me-4'>11/27/2023</td>
<td className='col'></td>
<td className='col'>-$156.34</td>
<td className='col'>Paid</td>
<td className='col'></td>
</tr>
<tr className='row mx-3 border-bottom py-3'>
<td className='col me-4'>08/14/2023</td>
<td className='col'></td>
<td className='col'>-$8.17</td>
<td className='col'>Paid</td>
<td className='col'></td>
</tr>
<tr className='row mx-3 border-bottom py-3'>
<td className='col me-4'>07/09/2023</td>
<td className='col'></td>
<td className='col'>-$284.79</td>
<td className='col'>Paid</td>
<td className='col'></td>
</tr>
<tr className='row mx-3 border-bottom py-3'>
<td className='col me-4'>03/30/2023</td>
<td className='col'></td>
<td className='col'>-$64.03</td>
<td className='col'>Paid</td>
<td className='col'></td>
</tr>
</table>

</div>


<div className='mt-4' style={{fontSize:"14px"}}>
<p style={{marginLeft:"30px"}}>By responding to the offer(s) on this site,you may be communicating to the company which provides the offer that you are a kohl's Card customer.</p>
</div>

</div>

</div>
   
            )}
          </div>
        );
        break;

        case 'statements':
         content =  <div className='px-4 py-5' style={{backgroundColor:"hsl(0,0%,98%"}}>
         <h3>Statements</h3>
         <div className='border shadow-sm px-5 py-4 bg-white rounded' style={{width:"70%"}}>
           <p className="mb-4">Up to 3 month(s) of statements are available online.</p>
           <div className='row d-flex align-items-center'>
           <div className='col-lg-2'>
              Paperless statements
           </div>
           <div className="col-lg-6 mt-2 d-flex align-items-center">
               <span className="me-2 ms-5">On</span>
               <i className="fs-4 fa-solid fa-toggle-on"></i>
           </div>
           <div className='col-lg-4 text-end' style={{marginTop:"5px"}}>
             <a className="text-dark" href='#'>Paperless statements</a>
           </div>
         </div>
         </div>
   
         <div className="border px-3 mt-4" style={{width:"7%",borderRadius:"20px"}}>2023</div>
   
         <div className="border px-5 py-4 my-4 shadow-sm bg-white rounded" style={{width:"70%"}}>
            <div className="row border-bottom py-3">
                <div className="col-lg-6">11/23/2023</div>
                <div className="col-lg-3">
                 <div>Statement</div>
                </div>
                 <div className="col-lg-3 text-end">
                   <a href="#" className="text-dark">Download pdf</a>
                </div>
            </div>
            <div className="row border-bottom py-3">
            <div className="col-lg-6">07/25/2023</div>
                <div className="col-lg-3">
                 <div>Statement</div> 
                </div>
                 <div className="col-lg-3 text-end">
                   <a href="#" className="text-dark">Download pdf</a>
                </div>
            </div>
            <div className="row border-bottom py-3 mb-4">
            <div className="col-lg-6">06/23/2023</div>
                <div className="col-lg-3">
                 <div>Statement</div>
                </div>
                 <div className="col-lg-3 text-end">
                   <a href="#" className="text-dark">Download pdf</a>
                </div>
            </div>
         </div>
   
       </div>;
         break;

    case 'profile':
      content = (
         <div className="py-4 px-2" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
         <h3 className="ms-2 mb-4">Profile Settings</h3>
         <div className="row m-2" style={{ boxSizing: "border-box" }}>
           <div className="col-lg-4 border shadow-sm p-3 rounded me-3 h-25" style={{ backgroundColor: "white" }}>
             <p>Edit Profile</p>
             <p className='ms-4 fw-semibold' onClick={() => handleSectionClick('profile')} style={{ cursor: "pointer" }}>Subrahmanyam Poluru</p>
             <p onClick={() => handleSectionClick('editBillingAddress')} style={{ cursor: "pointer" }}>Edit Billing Address</p>
             <p onClick={() => handleSectionClick('password')} style={{ cursor: "pointer" }}>Change Password</p>
             <p onClick={() => handleSectionClick('marketingPreferences')} style={{ cursor: "pointer" }}>Marketing Preferences</p>
             <p onClick={() => handleSectionClick('updateIncome')} style={{ cursor: "pointer" }}>Update Income</p>
           </div>
           <div className="col-lg-7 border shadow-sm rounded p-4" style={{ backgroundColor: "white" }}>
             {activeSection === 'profile' && (
               <>
                  <h3 className="mb-4">Edit Profile</h3>
         <p className="mb-5" style={{fontSize:"13px"}}>The information below belongs to the primary account.Any changes here will be applied to all the communications sent to the account.</p>
         <div className="row bg-white mb-4">
           <div className="col-lg-6">
              <label>Name</label>
              <div class="input-group mb-3">
                 <input style={{backgroundColor:"hsl(0,0%,93%"}} type="text" class="form-control" aria-label="Sizing example input" placeholder="Subrahmanyam Poluru" aria-describedby="inputGroup-sizing-default"/>
              </div>
           </div>
   
           <div className="col-lg-6">
              <label>Username</label>
              <div class="input-group mb-3">
                 <input style={{backgroundColor:"hsl(0,0%,93%"}} type="text" class="form-control" aria-label="Sizing example input" placeholder="Polurus" aria-describedby="inputGroup-sizing-default"/>
              </div>
           </div>
           <span style={{fontSize:"12px"}}>If you need to update your name,contact us at (800) 564-5740.</span>
         </div>
         
   
         <div className="row mb-4">
           <div className="col-lg-6">
              <label>Email*</label>
              <div class="input-group mb-3">
                 <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Poluru.Subrahmanyam@gmail.com" aria-describedby="inputGroup-sizing-default"/>
              </div>
   
           </div>
           <div className="col-lg-6">
              <label>Confirm Email*</label>
              <div class="input-group mb-3">
                 <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Poluru.Subrahmanyam@gmail.com" aria-describedby="inputGroup-sizing-default"/>
              </div>
           </div>
         </div>
   
         
         <div className="row bg-white mb-4">
           <div className="col-lg-5">
              <label>Phone type*</label>
              <div class="input-group mb-3" style={{backgroundColor:"hsl(0,0%,93%"}}>
                 <input style={{backgroundColor:"hsl(0,0%,93%"}} type="text" class="form-control" aria-label="Sizing example input" placeholder="Mobile" aria-describedby="inputGroup-sizing-default"/>
              </div>
           </div>
   
           <div className="col-lg-7">
              <label>Phone number*</label>
              <div class="input-group mb-3">
                 <input type="text" class="form-control" aria-label="Sizing example input" placeholder="(916) 667-2961" aria-describedby="inputGroup-sizing-default"/>
              </div>
           </div>
           <div className="d-flex mb-4">
               <input className="me-2" type="checkbox"/>
               <div>allow SMS passcodes to this device.</div>
         </div>
         </div>
        
        
   
   
         <div className="d-flex mb-5">
           <i className="fa-solid fa-circle-plus me-3 mt-1"></i>
           <div>Add Work number</div>
         </div>
   
         <div className="mb-5" style={{fontSize:"10px"}}>
           *If you provided a cellular phone number or a number that is later converted to a cellular phone number, you consent that kohl's Department Store or any other servicer or owner of your Account may contact you about your account via text message or telephone,including the use of prerecorded messages,and calls and messages from automated dialing systems.Mobiles,message and data rates may apply. 
         </div>
   
   
         <div className="text-center">
           <button className="border-0 rounded mb-3" style={{backgroundColor:"hsl(0,0%,93%)",padding:"10px 45px"}}>Update Profile</button>
         </div>
               </>
             )}
             {activeSection === 'editBillingAddress' && (
               <>
                  <h3 className="mb-4">Edit Billing Address</h3>
                 <p className="mb-4" style={{fontSize:"13px"}}>The address below belongs to the primary account.Any changes here will be applied to all the communications sent to the account.</p>
          
         
                <div className='mb-4'>
                <label>Street address*</label>
                <div class="input-group mb-3">
                   <input type="text" class="form-control" aria-label="Sizing example input" placeholder="8201 BETHPAGE DR" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>
             
   
                <div className='mb-4'>
                <label>Street address 2(optional)*</label>
                <div class="input-group mb-3">
                   <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>
     
 
                <div className='row mb-4' style={{position:"relative"}}>
                 <div className='col-lg-6'>
                     <label>Country</label>
                     <input type="text" class="form-control" aria-label="Sizing example input" placeholder='United States' aria-describedby="inputGroup-sizing-default"/>
                     <i className="fa-solid fa-angle-down" style={{position:"absolute",top:"38px",left:"225px"}}></i>
                 </div>
                 <div className='col-lg-6'>
                     <label>City*</label>
                     <input type="text" class="form-control" aria-label="Sizing example input" placeholder='MCKINNEY' aria-describedby="inputGroup-sizing-default"/>
                 </div>
               </div>
 
 
               <div className='row' style={{marginBottom:"65px",position:"relative"}}>
                 <div className='col-lg-6'>
                     <label>State</label>
                     <input type="text" class="form-control" aria-label="Sizing example input" placeholder='Texas' aria-describedby="inputGroup-sizing-default"/>
                     <i className="fa-solid fa-angle-down" style={{position:"absolute",top:"38px",left:"225px"}}></i>
                 </div>
                 <div className='col-lg-6'>
                     <label>Zip code*</label>
                     <input type="text" class="form-control" aria-label="Sizing example input" placeholder='75070' aria-describedby="inputGroup-sizing-default"/>
                 </div>
               </div>
            
     
   
           <div className="text-center">
             <button className="border-0 rounded mb-3" style={{backgroundColor:"hsl(0,0%,93%)",padding:"10px 45px"}}>Update Profile</button>
           </div>
   
               </>
             )}
             {activeSection === 'password' && (
               <>
                  <h3 className="mb-4">Change Password</h3>
           
                <div className='mb-4'>
                <label className='mb-2'>Username</label>
                <div class="input-group mb-3">
                   <input style={{backgroundColor:"hsl(0,0%,93%"}} type="text" class="form-control" aria-label="Sizing example input" placeholder="Polurus" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>
 
                <div className='mb-4'>
                <label className='mb-2'>Current password*</label>
                <div class="input-group mb-3">
                   <input style={{backgroundColor:"hsl(218,92%,95%"}} type="password" class="form-control" aria-label="Sizing example input" placeholder="Subrahmanyam Poluru" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>
                
       
                <div className='mb-4'>
                <label className='mb-2'>New password*</label>
                <div class="input-group mb-3">
                   <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>
                
       
                 
           <div className="mb-5">
             <h4>Password Guidelines</h4>
             <p>Previous passwords cannot be reused</p>
             <div className="d-flex mb-4">
                 <input style={{width:"20px"}} className="me-2" type="radio"/>
                 <div>9-20 characters</div>
              </div>
 
              <div className="d-flex mb-4">
                 <input style={{width:"20px"}} className="me-2" type="radio"/>
                 <div>1 lowercase letter (a-z)</div>
              </div>
 
              <div className="d-flex mb-4">
                 <input style={{width:"20px"}} className="me-2" type="radio"/>
                 <div>1 uppercase letter (A-Z)</div>
              </div>
 
              <div className="d-flex mb-4">
                 <input style={{width:"20px"}} className="me-2" type="radio"/>
                 <div>1 number (0-9)</div>
              </div>
 
              <div className="d-flex mb-4">
                 <input style={{width:"20px"}} className="me-2" type="radio"/>
                 <div>1 special character: ! @ # $ % ^ , _</div>
              </div>
 
              <div className="d-flex mb-4">
                 <input style={{width:"20px"}} className="me-2" type="radio"/>
                 <div>Cannot be the same as username</div>
              </div>
 
              <div className="d-flex mb-4">
                 <input style={{width:"20px"}} className="me-2" type="radio"/>
                 <div>cannot have more than two repeating characters</div>
              </div>
 
 
 
           </div>
 
 
             <div className='mb-5'>
                <label>Re-enter new password*</label>
                <div class="input-group mb-3">
                   <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
             </div>
          
          
           <div className="text-center">
             <button className="border-0 rounded mb-3" style={{backgroundColor:"hsl(0,0%,93%",padding:"10px 45px"}}>Change password</button>
           </div>
 
 
               </>
             )}
             {activeSection === 'marketingPreferences' && (
               <>
               <div className='fs-4 mb-2'>Marketing Preferences</div>
               <div className='fs-4 fw-semibold mb-2'>Savings is Just a Click Away!</div>
               <p style={{fontSize:"13px"}}>Sign up for Email Sales Alerts today and receive 15% off your in-store or next kohl's.com purchase.</p>
               <p>We'll apply your settings for marketing messages sent top*****************m@gmail.com</p>
 
 
               <div className='ms-4'>
                <div className="d-flex mb-3">
                 <input className="me-2" type="radio" style={{width:"18px"}}/>
                 <div>Yes,I want email marketing offers</div>
                </div>
 
                 <div className="d-flex mb-5">
                 <input className="me-2" type="radio" style={{width:"18px"}}/>
                 <div>No,I don't want email marketing offers</div>
                </div>
               </div>
 
 
                <div className="text-center">
                 <button className="border-0 rounded mb-4" style={{backgroundColor:"hsl(0,0%,93%",padding:"10px 45px"}}>Update Preferences</button>
               </div>
 
               <div className='text-center'>
                  <div className='mb-2'>US Residents only.Terms apply.</div>
                  <div className='mb-2'>
                    <a className='text-dark' href='#'>Terms for 15% offer</a>
                  </div>
                  <div className='mb-2'>
                    <a className='text-dark' href='#'>Privacy Policy</a>
                  </div>
               </div>
               </>
             )}
             {activeSection === 'updateIncome' && (
               <>
                 <div className="mb-4 fs-4">Update Income</div>
           <p style={{fontSize:"13.5px"}} className="mb-4">Alimony,child support or seperate maintainance income need not be revealed if you do not choose to have it considered as a basis for credit adjustments.<br/>Updating your income is optional.</p>
          
           
   
   
           
          
             <div>
                <label className='mb-2' style={{fontSize:"12px"}}>Total annual income*
                 <i className="ms-2 fa-solid fa-circle-info"></i>
                </label>
                <div class="input-group mb-3">
                   <input type="text" className="mb-4 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
             </div>
           
          
          
           <div className="text-center">
             <button className="border-0 rounded mb-3" style={{backgroundColor:"hsl(0,0%,93%",padding:"10px 45px"}}>Update Income</button>
           </div>
   
               </>
             )}
           </div>
         </div>
       </div>
      );
      break;

    default:
      content = (
         <div className="py-4 px-2" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
            <div className='w-75 my-4 mx-3'>
            <div className='fs-4 mb-2'>Secure Message Center</div>
            <div className="row mb-4" >
              <div className="col-md-9">
                <p style={{fontSize:"14px"}} className='me-5'>Questions about your account? Send us a message and we will help you.<br/> You may include personal information with your message, as this will be sent securely.</p>
              </div>
              <div className="col-md-3 text-end">
                <button className='bg-dark text-white rounded border-0' style={{ padding: "8px 25px", fontSize: "12px" }}>New message</button>
              </div>
            </div>

            <div className='border shadow-sm rounded bg-white mb-5'>
               <div className='text-center'>
                 <i className="fs-1 my-3 fa-solid fa-envelope-open-text"></i>
                 <div className='mb-2 fs-4'>You don't have any messages</div>
                 <div>if you need help,</div>
                 <div className='mb-5'>send us a secure message.</div>
               </div>
            </div>

            </div>
         </div>
      );
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Main;















































