import React from 'react'
import spin from "./spinner.gif"
const Spinner=()=>{
    return (
      <div className='text-center'>
        <img src={spin} alt="spin" />
      </div>
    )
}

export default Spinner
