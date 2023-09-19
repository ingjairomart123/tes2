import React from 'react';
import { ContenBotones,Div } from './styledBotone';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.png';
import img10 from './img/10.png';
import img11 from './img/11.png';
import img12 from './img/12.png';
// ... importa las demás imágenes

function Botones() {
    return (
        <div>
            <ContenBotones >
                <Div className="botones">
                    <div class="boton"><img className='img' src={img1} alt="" /></div>
                    <div class="boton"><img className='img' src={img2} alt="" /></div>
                    <div class="boton"><img className='img' src={img3} alt="" /></div>
                    <div class="boton"><img className='img' src={img4} alt="" /></div>
                    <div class="boton"><img className='img' src={img5} alt="" /></div>
                    <div class="boton"><img className='img' src={img6} alt="" /></div>
                    <div class="boton"><img className='img' src={img7} alt="" /></div>
                    <div class="boton"><img className='img' src={img8} alt="" /></div>
                    <div class="boton"><img className='img' src={img9} alt="" /></div>
                    <div class="boton"><img className='img' src={img10} alt="" /></div>
                    <div class="boton"><img className='img' src={img11} alt="" /></div>
                    <div class="boton"><img className='img' src={img12} alt="" /></div>
                </Div>
            </ContenBotones>
        </div>
    );
}

export default Botones;