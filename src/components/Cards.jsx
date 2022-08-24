import React from 'react';

const Cards = props =>{
    return(
     <div className="card  text-center">
        <div className="overflow">
        <img src= {props.imgsrc} alt="image1" className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title ">{props.title}</h4>
        </div>
     </div>
    );
}

export default Cards;