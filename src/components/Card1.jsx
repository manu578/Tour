import React, { Component } from 'react';
import Cards from './Cards';
import img4 from '../assets/temple.jpg';
import img5 from '../assets/restaurant.jpg';
import img6 from '../assets/market.jpg';

class Card1 extends Component{
    render(){
        return(
          <div className=' container-fluid d-flex justify-content-center card1 '>
            <div className='row '>
                <div className='col-md-4' >
                <Cards imgsrc={img4} title="Temples"/>
                </div>
                <div className='col-md-4'>
                <Cards imgsrc={img5} title="Restaurants"/>
                </div>
                <div className='col-md-4'>
                <Cards imgsrc={img6} title="Markets"/>
                </div>
            </div>
        </div>
    
        );
    }
}

export default Card1;