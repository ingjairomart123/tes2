
import React from 'react';
import { SliderBody } from './slider/styledBody';
import  './slider/sliderScript'
// import { useEffect, useRef } from 'react';
import Slider from './slider/slider';
import BodyConten from './bodyConten/bodyConten';


function Body() {

   

    return (
        <SliderBody>
              <Slider/>                
           <BodyConten/>
            
        </SliderBody>

    )

}

export default Body;