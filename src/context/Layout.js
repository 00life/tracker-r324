import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Snackbar.css';

function Layout({children}) {
    const { func_logout, func_authstatus, func_savedata, func_snackbar, reference } = useAuth();
    const navigate = useNavigate();
    const [logStatus, setLogStatus] = useState(false);

    useEffect(()=>{
        func_authstatus(user=>{
            try{
                if(user){setLogStatus(true)};
                console.log(`useEffect: ${user.uid}`)
            }catch{
                setLogStatus(false);
                console.log('useEffect: null')}
        })
    })


    const handleLogout = ()=>{
        func_logout();
        func_snackbar(reference, 'Logout Successful');
    };

    const handleTest = ()=>{
        func_savedata('test','test.txt')
    };


  return (
    <div ref={reference}>
        <nav style={{display:'flex', border:'1px solid black', backgroundColor:'cornsilk', marginBottom:'10px'}}>
            <table style={{border:'2px solid green', width:'100%'}}>
                <tbody>
                    <tr>
                        <td style={{border:'2px solid red', width:'50%'}}>
                            <img src={require("./../images/logo.png")} alt="" height="50px" width="max-width" />
                        </td>
                        <td style={{border:'2px solid black', width:'50%'}}>
                            {!logStatus && <input type="button" value="Sign In" style={{float:"right", height:"50px"}} onClick={()=>navigate('/login')} />}
                            {logStatus && <input type="button" value="Sign Out" style={{float:"right",height:"50px"}} onClick={()=>handleLogout()} />}
                            <input type="button" value="test" onClick={()=>handleTest()}/>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </nav>

        {children}

        <div id="snackbar" style={{zIndex:"100", borderRadius:"20px"}}>Some text some message..</div>
    </div>
  )
}

export default Layout