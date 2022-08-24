import React from 'react';

const Cardscity = props =>{
    return(
     <div className="card text-center cardcity">
        <div className="overflow">
        <img src= {props.imgsrc} alt="image1" className='card-img'/>
        </div>
        <div className="card-body text-dark">
       </div>
     </div>
    );
}

export default Cardscity;