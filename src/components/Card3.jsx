import React, { Component } from 'react';
import Cardscity from './Cardscity';
import img7 from '../assets/Jaipur.jpg';
import img8 from '../assets/udaipur.jpg';
import img9 from '../assets/jodhpur.jpg';
import img10 from '../assets/jaisalmer.jpg';

class Card3 extends Component{
    render(){
        return(
          <div className=' container-fluid d-flex justify-content-center card3'>
            <div className='row '>
                <div className='col-md-3' >
                <Cardscity imgsrc={img7} />
                </div>
                <div className='col-md-3'>
                <Cardscity imgsrc={img8} />
                </div>
                <div className='col-md-3'>
                <Cardscity imgsrc={img9} />
                </div>
                <div className='col-md-3'>
                <Cardscity imgsrc={img10}  />
                </div>
            </div>
        </div>
    
        );
    }
}

export default Card3;