import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../context/Layout';


function Login() {
    const { func_signin } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        (async()=>{
            try{
                await func_signin(email, password);
                setError(false);
                navigate('/');
            }catch(error){
                setError(true);
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(`errorCode: ${errorCode}`);
                console.log(`errorMessage: ${errorMessage}`);
            }
        })()
    }

    return (
        <Layout>
            <div style={{display:'flex', justifyContent:'center'}}>
                <form onSubmit={e=>handleLogin(e)}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="email" placeholder="email*" onChange={e=>setEmail(e.target.value)} required /><br/>
                                    <input type="password" placeholder="password*" onChange={e=>setPassword(e.target.value)} required /><br/>
                                </td>
                                <td style={{border:'1px solid black'}}>
                                    <input type="submit" value="Submit" style={{border:'1px solid red', height:'30px'}}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{border:'1px solid green'}}>
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                        <input type="button" value="Create a New Account" onClick={()=>navigate('/signup')}/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                    
                    
                    {error && <span style={{color:'red'}}>Authentication Error</span>}
                </form>
            </div>
        </Layout>
    )
}

export default Login