import React from 'react'
import embrace_logo from "../../assets/_em_brace.png";

function Navbar() {
  return (
    <div className='container-fluid  mt-5' style={{paddingLeft:"4%"}}>  
        <div className='navbar-brand'><img className='img-fluid' src={embrace_logo} width="25%" style={{paddingLeft:"2%"}}/></div>
        <div className='navbar row'>
             <div className='container-fluid col-9 '>
    
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item me-5">
          <a class="nav-link"  href="#">Home</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link" href="#">Student Community</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link" href="#">Help</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link">Contact</a>
        </li>
      </ul>
 
             </div>
             <div className=' col-2 align-items-center d-flex me-5'>
<text className='me-3'>Profile</text>
<i  style={{fontSize:'50px'}}class="bi bi-person-circle"></i>

             </div>
       
        </div>
    </div>
  )
}

export default Navbar