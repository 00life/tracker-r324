import React, {useState} from 'react';
import InputBar from '../components/inputBar';
import Layout from '../context/Layout';
import { useNavigate } from 'react-router-dom';
import {convertFrom24To12Format, stringBase64File} from './../context/Functions_1';
import { useAuth } from '../context/AuthContext';

function Addperson() {

  const { persons, setPersons, func_snackbar, reference } = useAuth();
  const navigate = useNavigate();

  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [starttime, setStarttime] = useState('');
  const [endtime, setEndtime] = useState('');
  const [details,setDetails] = useState('');
  const [scheduleArray, setScheduleArray] = useState([]);
  const [base64Img, setBase64Img] = useState('');

  const handleTime = (e)=>{
    try{
      let id = e.currentTarget.dataset.time;
      reference.current.querySelector('#'+id).showPicker()
    }catch(err){console.log('handleTime:'+err)}
  };

  const handleAddPerson=e=>{
    try{
    e.preventDefault();
    const md5 = require("blueimp-md5");
    const person = {
      firstname:firstname,
      lastname:lastname,
      schedule:scheduleArray,
      hash:md5(firstname+lastname+scheduleArray),
      base64:base64Img,
    };
    
    setPersons(prev=>[...prev,person])
    localStorage.setItem('persons', JSON.stringify(persons))

    reference.current.querySelector('#fname').value = '';
    reference.current.querySelector('#lname').value = '';
    setStarttime('');
    setEndtime('');
    setBase64Img('');

    func_snackbar(reference,`${firstname} ${lastname} had bee added`);
  }catch(err){console.log('handleAddPerson:'+err)}

  };

  const handleSchedule=()=>{
    try{
    const item = {details:details,starttime:starttime, endtime:endtime};
    setScheduleArray(prev=>[...prev, item]);
    reference.current.querySelector('#dtails').value = '';
    setStarttime('');
    setEndtime('');
    }catch(err){console.log('handleSchedule:'+err)}
  };

  const handleParticipants=()=>{
    let current = reference?.current?.querySelectorAll('data')[0].value;
    let last = sessionStorage.getItem('lastpage');
    if(last!==current){sessionStorage.setItem('lastpage',current)};
    navigate('/participants');
  };

  const handlePicture=e=>{
    let temp = (data) =>{
      // 6 bits/char ... 8 bit/byte ... 1000 bytes/KB
      let size = data.length*6/8/1000; // size in KB
      console.log(size+' KB')
      size<1000 //1000KB
        ? setBase64Img(size)
        : func_snackbar(reference,'Upload must be < 1 MB')
    };
    stringBase64File(e.currentTarget, temp);
  }

  return (
    <Layout>
      <data value='/addperson'></data>
      <div style={{display:'flex', justifyContent:'center', backgroundColor:'#ffffff', padding:'20px 0px', margin:'10px 20px', boxShadow:'1px 1px 4px 0px #8888', borderRadius:"5px", caretColor: "rgba(0,0,0,0)"}}>
        <form onSubmit={e=>handleAddPerson(e)}>
          <table width='100%'>
            <tbody>

              <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                <td colSpan={2}>
                  <div style={{display:'flex', alignItems:'center', padding:'5px'}}>

                    <div style={{display:'flex', justifyContent:'center', flexGrow:'1'}}>
                      <h3 style={{color:'#414a4c'}}>Information</h3>
                    </div>
                    
                    <div style={{display:'flex', alignItems:'center'}}>

                      <input type="submit" value="Submit" style={{padding:'5px', fontSize:"15px", boxShadow:"1px 1px 4px 0px #8888"}}/>

                      <button type="button" onClick={()=>handleParticipants()} style={{boxShadow:'1px 1px 4px 0px #8888', padding:'2px', marginLeft:'5px'}}>
                        <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M6.075 23.9q-1.825 0-3.113-1.288-1.287-1.287-1.287-3.112v-4.15h3.4V1.125L6.85 2.85l1.7-1.725 1.725 1.725L12 1.125l1.7 1.725 1.725-1.725 1.7 1.725 1.7-1.725L20.55 2.85l1.775-1.725V19.5q0 1.825-1.287 3.112Q19.75 23.9 17.925 23.9Zm11.85-3.4q.425 0 .713-.3.287-.3.287-.7V5.7H8.475v9.65h8.45v4.15q0 .4.287.7.288.3.713.3ZM9.4 10.05V7.8h5.475v2.25Zm0 3.175v-2.25h5.475v2.25Zm7.45-3.175q-.45 0-.788-.325-.337-.325-.337-.8 0-.45.337-.788.338-.337.788-.337.475 0 .8.337.325.338.325.788 0 .475-.325.8-.325.325-.8.325Zm0 3.175q-.45 0-.788-.325-.337-.325-.337-.8 0-.475.337-.8.338-.325.788-.325.475 0 .8.325.325.325.325.8 0 .475-.325.8-.325.325-.8.325ZM6.075 20.5h7.45v-1.75h-8.45v.75q0 .4.288.7.287.3.712.3Zm-1 0v-1.75 1.75Z"/></svg>
                      </button>

                      <button type="button" onClick={()=>navigate('/addlist')} style={{boxShadow:'1px 1px 4px 0px #8888', padding:'2px', marginLeft:'5px'}}>
                      <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M5.25 22.15q-1.425 0-2.412-.987-.988-.988-.988-2.413V5.25q0-1.425.988-2.413.987-.987 2.412-.987h8.725v3.4H5.25v13.5h13.5v-8.725h3.4v8.725q0 1.425-.987 2.413-.988.987-2.413.987Zm2.625-4.8V15.1h8.25v2.25Zm0-3.225v-2.25h8.25v2.25Zm0-3.2v-2.25h8.25v2.25Zm9.375-1.9V6.75h-2.275V4.125h2.275V1.85h2.625v2.275h2.275V6.75h-2.275v2.275Z"/></svg>
                      </button>

                    </div>

                  </div> 
                </td>
              </tr>

              <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                <td colSpan={2}>
                  <div style={{padding:"10px"}}>
                    <InputBar ids="fname" type={"text"} placeholder={"Lastname"} func_onChange={setLastname} required={true} />
                    <InputBar ids="lname" type={"text"} placeholder={"Firstname"} func_onChange={setFirstname} required={true} />
                  </div>
                </td>
              </tr>

              <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                
                <td>
                  <center>
                    <h3 style={{color:'#414a4c'}}>
                      Schedule({scheduleArray.length})
                    </h3>
                  </center>
                </td>

                <td style={{float:'right', padding:'5px'}}>
                  <button type="button" onClick={()=>handleSchedule()} style={{boxShadow:'1px 1px 4px 0px #8888', padding:"0px 20px"}}>
                    <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M10.3 19.7v-6H4.275v-3.4H10.3V4.275h3.4V10.3h6.025v3.4H13.7v6Z"/></svg>
                  </button>
                </td>

              </tr>

              <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                    
                <td>
                  <div style={{padding:"10px"}}>
                    <InputBar ids="dtails" type={"text"} placeholder={"Details"} value={details} func_onChange={setDetails} required={false}/>
                  </div>
                </td>

                <td>
                  
                  <div style={{display:'flex', alignItems:'center', flexWrap:'nowrap'}}>

                    <button data-time="hddn_start_time" onClick={e=>handleTime(e)} type="button" style={{boxShadow:'1px 1px 4px 0px #8888', padding:'2px', marginRight:'5px'}}>
                      <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M8.1 3.05V.025h7.8V3.05Zm2.4 11.975h3v-6.3h-3ZM12 24q-2.1 0-3.938-.788-1.837-.787-3.212-2.15-1.375-1.362-2.162-3.2-.788-1.837-.788-3.937 0-2.1.788-3.938.787-1.837 2.162-3.2 1.375-1.362 3.212-2.162 1.838-.8 3.938-.8 1.625 0 3.15.487 1.525.488 2.825 1.463l1.8-1.8 2.15 2.175-1.8 1.8q1.025 1.325 1.5 2.837.475 1.513.475 3.138 0 2.1-.788 3.937-.787 1.838-2.162 3.2-1.375 1.363-3.212 2.15Q14.1 24 12 24Zm0-3.4q2.8 0 4.75-1.937 1.95-1.938 1.95-4.738 0-2.775-1.95-4.738Q14.8 7.225 12 7.225T7.25 9.187Q5.3 11.15 5.3 13.925q0 2.8 1.95 4.738Q9.2 20.6 12 20.6Zm0-6.675Z"/></svg>
                      <input id="hddn_start_time" type="time" style={{display:'none'}} onChange={e=>setStarttime(e.currentTarget.value)}/>
                    </button>
                    
                    <button data-time="hddn_end_time" onClick={e=>handleTime(e)} type="button" style={{boxShadow:'1px 1px 4px 0px #8888',padding:'2px', marginRight:'5px'}}>
                      <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M8.1 3.05V.025h7.8V3.05Zm2.4 11.975h3v-6.3h-3ZM12 24q-2.1 0-3.938-.788-1.837-.787-3.212-2.15-1.375-1.362-2.162-3.2-.788-1.837-.788-3.937 0-2.1.788-3.938.787-1.837 2.162-3.2 1.375-1.362 3.212-2.162 1.838-.8 3.938-.8 1.625 0 3.15.487 1.525.488 2.825 1.463l1.8-1.8 2.15 2.175-1.8 1.8q1.025 1.325 1.5 2.837.475 1.513.475 3.138 0 2.1-.788 3.937-.787 1.838-2.162 3.2-1.375 1.363-3.212 2.15Q14.1 24 12 24Z"/></svg>
                      <input id="hddn_end_time" type="time" style={{display:'none'}} onChange={e=>setEndtime(e.currentTarget.value)}/>
                    </button>

                  </div>
                
                </td>

              </tr>

                <tr style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px'}}>
                  <td colSpan={2}>
                    <div style={{display:'flex', justifyContent:'space-around', alignItems:"center", padding:'5px 5px'}}>
                      
                      <h3 data-time="hddn_start_time" onClick={e=>handleTime(e)} style={{boxShadow:"1px 1px 4px 0px #8888",borderRadius:'5px', padding:'5px', width:'50%', marginRight:'2px'}}>
                        <span style={{color:'#414a4c'}}>
                          start:&nbsp;
                        </span>
                        <span style={{filter:'drop-shadow(1px 1px 0px palegreen)'}}>
                          {convertFrom24To12Format(starttime)}
                        </span>
                      </h3>
                      
                      <h3 data-time="hddn_end_time" onClick={e=>handleTime(e)} style={{boxShadow:"1px 1px 4px 0px #8888",borderRadius:'5px', padding:'5px', width:'50%', marginLeft:'2px'}}>
                        <span style={{color:'#414a4c'}}>
                          end:&nbsp;
                        </span>
                        <span style={{filter:'drop-shadow(1px 1px 0px tomato)'}}>
                          {convertFrom24To12Format(endtime)}
                        </span>
                      </h3>
                    
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colSpan={2}>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'15px', alignItems:'center'}}>
                      
                      <div onClick={e=>e.currentTarget.querySelector('#handlePicture').click()} onMouseOver={e=>e.currentTarget.style.backgroundColor='#c0d6df'} onMouseOut={e=>e.currentTarget.style.backgroundColor='#e0fbfc'}
                        style={{padding:'5px', boxShadow:"1px 1px 4px 0px #8888", marginRight:'5px', borderRadius:'5px', border:'2px solid black', backgroundColor:'#e0fbfc', cursor:'default', display:'flex', flexWrap:'nowrap'}}>
                        <h4>Upload Picture</h4>
                        {base64Img && <svg height="20" width="20"><path fill="green" d="M8.229 14.062 15.292 7l-1.021-1.062-6.021 6.02-2.521-2.479L4.708 10.5Zm.021 3.792L.917 10.521 5.75 5.729l2.479 2.459 6.063-6.063L19.083 7Z"/></svg>}
                        <input id="handlePicture" type="file" onChange={e=>handlePicture(e)} style={{display:'none'}}/>
                      </div>

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