import React from 'react';
import './ToggleBtn.css';

function ToggleBtn({ids, func_onToggle}) {
  return (
    <div>
        <label className="switch">
            <input id={ids} type="checkbox" onClick={(e)=>func_onToggle(e)}/>
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default ToggleBtn