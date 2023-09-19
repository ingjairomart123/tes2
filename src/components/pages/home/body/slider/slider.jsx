import React, { useEffect, useRef } from 'react';
import InitializeSlider from './sliderScript.jsx';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';

function SliderBody() {
    const nxtBtnRef = useRef();
    const prvBtnRef = useRef();
    const slidesRef = useRef();

    useEffect(() => {
        const nxtBtn = nxtBtnRef.current;
        const prvBtn = prvBtnRef.current;
        const slides = slidesRef.current.querySelectorAll('.slide');
        console.log(slides); // Selecciona las diapositivas dentro del ref slidesRef

        const slider = InitializeSlider(nxtBtn, prvBtn, slides);

        // Puedes acceder a las funciones como slider.nextSlide(), slider.prevSlide(), etc.
    }, []);

    return (
        <section className="banner">
            <div className="slider" ref={slidesRef}>

                <div className="slide active">
                    <img src={img4} alt="img4" />
                    <div className="left-info">
                        <div className="penetrte-blur">
                            <h1>OXI</h1>
                        </div>
                        <div className="content">
                            {/* <h3> OXIGENO TERAPIA </h3>
                            <p>-----------</p> */}
                            <a href="#" className="btn">More Details</a>
                        </div>
                    </div>
                    <div className="right-info">
                        <h1>GENO</h1>
                        <h3>TERAPIA</h3>
                    </div>
                </div>


                <div className="slide">
                    <img src={img5} alt="img5" />
                    <div className="left-info">
                        <div className="penetrte-blur">
                            <h1>MUE</h1>
                        </div>
                        <div className="content">
                            {/* <h3>MUEBLES HOSPITALARIOS</h3>
                            <p>-----------</p> */}
                            <a href="#" className="btn">More Details</a>
                        </div>
                    </div>
                    <div className="right-info">
                        <h1>BLES</h1>
                        <h3>HOSPITALARIOS</h3>
                    </div>
                </div>

                <div className="slide">
                    <img src={img6} alt="img6" />
                    <div className="left-info">
                        <div className="penetrte-blur">
                            <h1>INS</h1>
                        </div>
                        <div className="content">
                            {/* <h3>INSUMOS RADIOGRAFICOS</h3>
                            <p>-----------</p> */}
                            <a href="#" className="btn">More Details</a>
                        </div>
                    </div>
                    <div className="right-info">
                        <h1>UMOS</h1>
                        <h3>RADIOGRAFICOS</h3>
                    </div>
                </div>

                <div className="slide">
                    <img className="exagono" src={img7} alt="img7" />
                    <div className="left-info">
                        <div className="penetrte-blur">
                            <h1>INS</h1>
                        </div>
                        <div className="content">
                            {/* <h3>INSUMOS MEDICOS QUIRURGICOS</h3>
                            <p>-----------</p> */}
                            <a href="#" className="btn">More Details</a>
                        </div>
                    </div>
                    <div className="right-info">
                        <h1>UMO</h1>
                        <h3>MEDICOS QUIRURGICOS</h3>
                    </div>
                </div>

                <div className="slide">
                    <img src={img3} alt="img3" />
                    <div className="left-info">
                        <div className="penetrte-blur">
                            <h1>INSTRU</h1>
                        </div>
                        <div className="content">
                            {/* <h3>INSTRUMENTAL QUIRURGICO</h3>
                            <p>-----------</p> */}
                            <a href="#" className="btn">More Details</a>
                        </div>
                    </div>
                    <div className="right-info">
                        <h1>MENTA</h1>
                        <h3>QUIRURGICO</h3>
                    </div>
                </div>

                <div className="slide">
                    <img src={img2} alt="img2" />
                    <div className="left-info">
                        <div className="penetrte-blur">
                            <h1>EQUI</h1>
                        </div>
                        <div className="content">
                            {/* <h3>EQUIPOS MEDICOS</h3>
                            <p>-----------</p> */}
                            <a href="#" className="btn">More Details</a>
                        </div>
                    </div>
                    <div className="right-info">
                        <h1>POS</h1>
                        <h3>MEDICOS</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src={img1} alt="img1" />
                    <div className="left-info">
                        <div className="penetrte-blur">
                            <h1>CAM</h1>
                        </div>
                        <div className="content">
                            {/* <h3>CAMPOS QUIRURGICOS ESPECIALIZADOS Y VIH</h3>
                            <p>-----------</p> */}
                            <a href="#" className="btn">More Details</a>
                        </div>
                    </div>
                    <div className="right-info">
                        <h1>POS</h1>
                        <h3>QUIRURGICOS ESPECIALIZADOS Y VIH</h3>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <span className="prev-btn" ref={prvBtnRef}><i className="fa-solid fa-chevron-left fa-3x"></i></span>
                <span className="next-btn" ref={nxtBtnRef}><i className="fa-solid fa-chevron-right fa-3x"></i></span>
            </div>
        </section>
    );
}

export default SliderBody;