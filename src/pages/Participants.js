import React from 'react';
import Layout from '../context/Layout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { func_savedata } from '../context/Functions_1';
import ToggleBtn from '../components/ToggleBtn';

function Participants() {

  const { persons, setPersons, reference } = useAuth();
  const navigate = useNavigate();

  const handleSaveData = ()=>{
    try{func_savedata(persons,'participants')}catch{};
  };

  const handleLoadData = e =>{
    let file = e.currentTarget.files[0];
    let reader = new FileReader();
    reader.onloadend = function(){
      let load = JSON.parse(reader.result);
      setPersons(load);
      console.log(persons)
    };
    reader.readAsText(file);
  };

  const func_onToggle=e=>{
    console.log(e?.target?.checked)
  };

  return (
    <Layout>
        <data value='/participants'></data>
        <div>
          <div style={{boxShadow:'1px 1px 4px 0px #8888', margin:'5px', borderRadius:'5px', padding:'5px', display:'flex', justifyContent:"space-evenly", alignItems:'center'}}>

            <div style={{display:'flex', justifyContent:'center', flexGrow:'1'}}>
              <h3 style={{color:'#414a4c'}}>Participants</h3>
            </div>

            <div style={{display:'flex', flexWrap:'nowrap'}}>

              <button onClick={()=>handleSaveData()} type="button" style={{boxShadow:'1px 1px 4px 0px #8888', padding:'2px', marginLeft:'5px'}}>
                <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M22.15 6.525V18.75q0 1.425-.987 2.413-.988.987-2.413.987H5.25q-1.425 0-2.412-.987-.988-.988-.988-2.413V5.25q0-1.425.988-2.413.987-.987 2.412-.987h12.225Zm-3.4 1.425-2.7-2.7H5.25v13.5h13.5ZM12 17.825q1.3 0 2.213-.912.912-.913.912-2.213t-.912-2.213q-.913-.912-2.213-.912t-2.212.912q-.913.913-.913 2.213t.913 2.213q.912.912 2.212.912Zm-5.825-7.4h9.3v-4.25h-9.3ZM5.25 7.95v10.8-13.5Z"/></svg>
              </button>

              <button onClick={e=>e?.currentTarget?.querySelector('#btn-loaddata').click()} type="button" style={{boxShadow:'1px 1px 4px 0px #8888', padding:'2px', marginLeft:'5px'}}>
                <svg style={{filter:'drop-shadow(2px 2px 1px #8888)'}} height="24" width="24"><path d="M10.875 19.1H13.1v-4.35l1.6 1.6 1.525-1.525-4.25-4.25-4.25 4.25 1.55 1.525 1.6-1.6ZM6.25 23.15q-1.4 0-2.4-.987-1-.988-1-2.413V4.25q0-1.425 1-2.413 1-.987 2.4-.987h7.975l6.925 6.875V19.75q0 1.425-1 2.413-1 .987-2.4.987ZM12.475 9.5V4.25H6.25v15.5h11.5V9.5ZM6.25 4.25V9.5 4.25v15.5-15.5Z"/></svg>
                <input id="btn-loaddata" type="file" onChange={e=>handleLoadData(e)} style={{display:'none'}}/>
              </button>

              <div style={{marginLeft:'5px', display:"flex", flexDirection:"column", alignItems:"center"}}>
                <ToggleBtn ids={'toggle_autoload'} func_onToggle={func_onToggle}/>
                <h6>Autoload</h6>
              </div>
              

            </div>

          </div>

            <table>
              <tbody id="list_persons">
                {persons.map((p,i)=>{return (
                <tr key={i}>
                  <td>{p.lastname}, {p.firstname}</td>
                  <td>&nbsp;</td>
                  <td>{p.hash}</td>
                </tr>
                )})}
                {/* {persons.map((p,i)=>
                  <tr key={i}>
                    <td>
                      <div style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px', padding:'10px, 10px', margin:'5px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                        
                        <div style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px', padding:'5px', fontSize:'20px', margin:'5px'}}>
                          #{p.hash.slice(0,5)}
                        </div>
                        
                        <div style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px', padding:'5px', fontSize:'20px', margin:'5px'}}>
                          {p.firstname}
                        </div>
                        
                        <div style={{boxShadow:"1px 1px 4px 0px #8888", borderRadius:'5px', padding:'5px', fontSize:'20px', margin:'5px'}}>
                          {p.lastname}
                        </div>

                      </div>
                    </td>
                  </tr>
                )} */}
              </tbody>
            </table>
        </div>
    </Layout>
  )
}

export default Participants