import React from 'react';

function InputBar({type='text', placeholder='placeholder', func_onChange}) {

  return (
    <div>
        <div onFocus={(e)=>e.currentTarget.style.outline = '2px solid palegreen'} onBlur={(e)=>e.currentTarget.style.outline='none'}
        style={{borderRadius:"10px 10px", margin:'5px 5px', padding:"3px 3px", boxShadow:"1px 1px 4px 0px #8888"}}>
            
            <input type={type} placeholder={placeholder} onChange={(e)=>func_onChange(e.currentTarget.value)}
            style={{height:"30px", fontSize:"16px", border:"none", outline:"none", paddingLeft:"5px", borderRadius:"10px 10px", caretColor: "rgba(1,1,1,1)"}} />
        </div>
    </div>
  )
}

export default InputBar