import './App.css';
import { Route,Routes,BrowserRouter} from 'react-router-dom';
import HomePage from './Homepage';
import LoginPage from './Loginpage';
import VerificationPage from './VerificationPage';
import PasscodePage from './PasscodePage';
import AccountPage from './AccountPage';


function App() {

  return (
    <div id="credit-app">

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/loginpage' element={<LoginPage/>}/>
          <Route path='verificationpage' element={<VerificationPage/>}/>
          <Route path='/passcodepage' element={<PasscodePage/>}/>
          <Route path='/accountpage' element={<AccountPage/>}/>
    

        </Routes>

      </BrowserRouter>



    
    </div>
  );
}

export default App;
