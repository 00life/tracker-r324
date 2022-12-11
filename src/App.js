import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuth } from './context/AuthContext.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Forgot from './pages/Forgot.js';
import Request from './pages/Request.js';
import Barcode from './pages/Barcode.js';
import Profile from './pages/Profile.js';
import Addperson from './pages/Addperson.js';
import Test from './pages/Test.js';

function App(){

  const { authstatus } = useAuth()
  const RequireAuth = ({children})=>{return authstatus?.uid ? children : <Navigate to="/login" />}
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/barcode" element={<Barcode />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/addperson" element={<Addperson />}/>
          <Route exact path="/forgot" element={<Forgot />}/>
          <Route exact path="/request" element={<RequireAuth><Request /></RequireAuth>}/>
          <Route exact path="/test" element={<Test />}/>
          {/* <Route path="/" element={<Home />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
