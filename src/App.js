import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Request from './pages/Request.js';


function App(){

  const currentUser = false;
  const RequireAuth = ({children})=>{
    if(currentUser){
      return children
    }else{
      console.log('you need to sign in');
      return <Navigate to="/login" /> 
    }
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/login" element={<Login />}/>
              <Route exact path="/signup" element={<Signup />}/>
              <Route exact path="/request" element={<RequireAuth><Request /></RequireAuth>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
