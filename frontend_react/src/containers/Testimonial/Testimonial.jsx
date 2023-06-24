import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
const Testimonial = ()=>{
    return(
        <>
        <h2 className="head-text">Hobbies</h2>
            <div className="baap">
            <div>
                <div className="cardone" >
                    
                    <h3>Guitar & Singing</h3>
                </div>

            </div>
            <div>
                <div className="cardtwo" >
                    <h3>Weight Lifting</h3>
                </div>

            </div>
            </div>
            
           

        </>
    )
}


export default AppWrap(
    MotionWrap(Testimonial, 'app__skills'),
    'skills',
    'app__primarybg',
  );