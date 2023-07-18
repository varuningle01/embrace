import React from 'react'

function Footer() {
  return (
    <div className='container-fluid text-white ' style={{backgroundColor:"#814AC6"}}>
<div className='row d-flex justify-content-evenly '>
    <div className='col-3 mt-5' style={{marginLeft:"15%"}}>
        <p>Student Community</p>
        <p>Contact Developer</p>
    </div>
    <div className='col-3 mt-5'>
    <p>Profile</p>
        <p>Report</p>
    </div>
    <div className='col-3 mt-5'>
        <p>Help</p>
        <p>Feedback</p>
    </div>

    <hr style={{height:"5px",backgroundColor:'white'}}/>
  
    <div className='d-flex justify-content-center'>
        <p>Developed by Varun Ingle</p>
    </div>
    <hr style={{height:"5px",backgroundColor:'white', marginBottom:"20px"}}/>
</div>

    </div>
  )
}

export default Footer