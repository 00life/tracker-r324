import React, {useState} from 'react';
import InputBar from '../components/inputBar';
import Layout from '../context/Layout';
import {convertFrom24To12Format} from './../context/Functions_1';

function Addperson() {

  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [starttime, setStarttime] = useState('');
  const [endtime, setEndtime] = useState('');

  const handleTime = (e)=>{
    try{
      let id = e.currentTarget.dataset.time
      e.currentTarget.querySelector('#'+id).showPicker()
    }catch{}
  };

  const handleLogin=e=>{
    e.preventDefault();


  };

  return (
    <Layout>
            <data value='/addperson'></data>
            <div style={{display:'flex', justifyContent:'center', backgroundColor:'#ffffff', padding:'20px 0px', margin:'10px 20px', boxShadow:'1px 1px 4px 0px #8888', borderRadius:"5px",caretColor: "rgba(0,0,0,0)"}}>
                <form onSubmit={e=>handleLogin(e)}>
                    <table>
                        <tbody>
                        <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                          <td>
                            <center><h3>Information</h3></center>
                          </td>
                          <td>
                            <center><button type='submit' style={{padding:'5px', margin:'5px', filter:'drop-shadow(2px 2px 1px #8888)'}}><h3>Submit</h3></button></center>
                          </td>
                        </tr>
          
                            <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                                <td colSpan={2}>
                                    <div style={{padding:"10px"}}>
                                        <InputBar type={"text"} placeholder={"Lastname"} func_onChange={setLastname} required />
                                        <InputBar type={"text"} placeholder={"Firstname"} func_onChange={setFirstname} required />
                                    </div>
                                </td>
                            </tr>

                            <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>

                              <td>
                                <center><h3>Schedule({0})</h3></center>
                              </td>

                              <td style={{float:'right', padding:'5px'}}>
                                <button type="button" style={{boxShadow:'1px 1px 4px 0px #8888', marginRight:"10px"}}>
                                  <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M10.3 19.7v-6H4.275v-3.4H10.3V4.275h3.4V10.3h6.025v3.4H13.7v6Z"/></svg>
                                </button>
                              </td>

                            </tr>

                            <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                                
                                <td>
                                    <div style={{padding:"10px"}}>
                                        <InputBar type={"text"} placeholder={"Details"} func_onChange={setLastname} />
                                    </div>
                                </td>

                                <td>

                                  <button data-time="hddn_start_time" onClick={e=>handleTime(e)} type="button" style={{boxShadow:'1px 1px 4px 0px #8888', marginLeft:"-5px", marginRight:'10px', padding:'2px'}}>
                                    <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M8.1 3.05V.025h7.8V3.05Zm2.4 11.975h3v-6.3h-3ZM12 24q-2.1 0-3.938-.788-1.837-.787-3.212-2.15-1.375-1.362-2.162-3.2-.788-1.837-.788-3.937 0-2.1.788-3.938.787-1.837 2.162-3.2 1.375-1.362 3.212-2.162 1.838-.8 3.938-.8 1.625 0 3.15.487 1.525.488 2.825 1.463l1.8-1.8 2.15 2.175-1.8 1.8q1.025 1.325 1.5 2.837.475 1.513.475 3.138 0 2.1-.788 3.937-.787 1.838-2.162 3.2-1.375 1.363-3.212 2.15Q14.1 24 12 24Zm0-3.4q2.8 0 4.75-1.937 1.95-1.938 1.95-4.738 0-2.775-1.95-4.738Q14.8 7.225 12 7.225T7.25 9.187Q5.3 11.15 5.3 13.925q0 2.8 1.95 4.738Q9.2 20.6 12 20.6Zm0-6.675Z"/></svg>
                                    <input id="hddn_start_time" type="time" style={{display:'none'}} onChange={e=>setStarttime(e.currentTarget.value)}/>
                                  </button>
                                  
                                  <button data-time="hddn_end_time" onClick={e=>handleTime(e)} type="button" style={{boxShadow:'1px 1px 4px 0px #8888',marginRight:'3px',padding:'2px'}}>
                                    <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M8.1 3.05V.025h7.8V3.05Zm2.4 11.975h3v-6.3h-3ZM12 24q-2.1 0-3.938-.788-1.837-.787-3.212-2.15-1.375-1.362-2.162-3.2-.788-1.837-.788-3.937 0-2.1.788-3.938.787-1.837 2.162-3.2 1.375-1.362 3.212-2.162 1.838-.8 3.938-.8 1.625 0 3.15.487 1.525.488 2.825 1.463l1.8-1.8 2.15 2.175-1.8 1.8q1.025 1.325 1.5 2.837.475 1.513.475 3.138 0 2.1-.788 3.937-.787 1.838-2.162 3.2-1.375 1.363-3.212 2.15Q14.1 24 12 24Z"/></svg>
                                    <input id="hddn_end_time" type="time" style={{display:'none'}} onChange={e=>setEndtime(e.currentTarget.value)}/>
                                  </button>

                                </td>
                            </tr>

                            <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                              <td colSpan={2} style={{border:"1px solid black"}}>
                                <div style={{display:'flex', justifyContent:'space-around', alignItems:"center"}}>
                                  <h3 style={{boxShadow:"1px 1px 4px 0px #8888",borderRadius:'5px', padding:'5px'}}>
                                    <span>start: </span>
                                    <span style={{filter:'drop-shadow(1px 1px 0px palegreen)'}}>
                                      {convertFrom24To12Format(starttime)}
                                    </span>
                                  </h3>
                                  <h3 style={{boxShadow:"1px 1px 4px 0px #8888",borderRadius:'5px', padding:'5px'}}>
                                    <span>end: </span>
                                    <span style={{filter:'drop-shadow(1px 1px 0px tomato)'}}>
                                      {convertFrom24To12Format(endtime)}
                                    </span>
                                  </h3>
                                </div>
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </Layout>
  )
}

export default Addperson