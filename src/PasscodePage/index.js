import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function PasscodePage() {
  return (
    <div className='h-100' style={{backgroundColor:"rgba(14,14,14,1)"}}>
     <div className='transaction-app m-auto' style={{width:"65%",fontSize:"14px"}}>
        <Header/>
        <Main/>
        <Footer/>
    </div>
    </div>
  );
}

export default PasscodePage;
