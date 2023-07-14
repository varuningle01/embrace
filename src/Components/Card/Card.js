import React from 'react';





function Card(props) {
  console.log(props)
  return (
  
    <div className='container w-75' style={{boxShadow:"2px 2px 2px 2px #4D00AF", display:"flex", flexDirection:'column', alignItems:'center', padding:"20px", borderRadius:"30px"}}>
        <img className='img-fluid' src={props.data.img} alt=".." style={{width:"50%", height:'50%'}}/>
        <br/>
        <p style={{fontSize:'150%'}}>{props.data.text}</p>
    </div>
  )
}

export default Card