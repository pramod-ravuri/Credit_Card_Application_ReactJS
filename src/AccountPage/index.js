import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function AccountPage() {
  const [activeContent, setActiveContent] = useState('accounts');

  const handleNavItemClick = (content) => {
    setActiveContent(content);
  };

  const handleHeaderItemClick = (content) => {
    setActiveContent(content);
  };

 const handleMessageClick = (content)=>{
   setActiveContent(content);
 }



  return (
    <div className='h-100' style={{ backgroundColor: "rgba(14,14,14,1)" }}>
      <div className='transaction-app m-auto' style={{ width: "65%" }}>
        <Header onHeaderItemClick={handleHeaderItemClick} onMessageClick={handleMessageClick}/>
        <Navbar onNavItemClick={handleNavItemClick} />
        <Main activeContent={activeContent} />
        <Footer />
      </div>
    </div>
  );
}

export default AccountPage;

