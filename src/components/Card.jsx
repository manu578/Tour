import React, { Component } from 'react';
import Cards from './Cards';
import img1 from '../assets/fort.jpg';
import img2 from '../assets/museum.jpg';
import img3 from '../assets/lakes.jpg';

class Card extends Component{
    render(){
        return(
            
          <div className=' cards container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                <Cards imgsrc={img1} title="Forts"/>
                </div>
                <div className='col-md-4'>
                <Cards imgsrc={img2} title="Museums"/>
                </div>
                <div className='col-md-4'>
                <Cards imgsrc={img3} title="Lakes"/>
                </div>
            </div>
        </div>
    
        );
    }
}

export default Card;