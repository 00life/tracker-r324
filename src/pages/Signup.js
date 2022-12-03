import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Layout from '../context/Layout';

function Signup() {
    const { func_signup } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = e =>{
        (async()=>{
            try{
                let userCredential = await func_signup(email, password);
                console.log(userCredential.user);
            }catch(error){
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(`errorCode: ${errorCode}`);
                console.log(`errorMessage: ${errorMessage}`);
            }
        })();
    }

  return (
    <Layout>
        <div>
            <form onSubmit={e=>handleSignup(e)}>
                <input type="text" placeholder="Nickname" /><br/>
                <input type="text" placeholder="email *" onChange={e=>setEmail(e.target.value)} required /><br/>
                <input type="text" placeholder="password *" onChange={e=>setPassword(e.target.value)} required/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </Layout>
  )
}

export default Signup