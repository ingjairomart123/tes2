import React from 'react';
import { Contents, Divbackg, Divbackg1 } from './stiledBodyConten';
import video from './video/grupo-medico1.mp4'

function BodyConten() {

    return (
        <div>

            <Contents ><div className="video-container">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" /> {/* Ajusta la ruta a tu video y el tipo de archivo */}

                </video>
                <div className="content">
                    <Divbackg >
                        <Divbackg1>
                            <h1 className='centrarH1'>BIENVENIDOS QUERIDOS AMIGOS, CLIENTES Y PROVEEDORES</h1>
                            <h3 className='centrarH2'>TODO EL EQUIPO DEL GRUPO COLMERCK ESTÁ ENCANTADO DE DARTE LA BIENVENIDA A BORDO DE ESTA MARAVILLOSA EMPRESA.
                                CONTINUA DESCUBRIENDO ESTA PÁGINA.</h3>
                                <h3 className='centrarH2'> QUE TENERTE DE VISITA EN NUESTRO SITIO WEB ES UN GRAN HONOR! …</h3>
                        </Divbackg1>

                    </Divbackg >

                </div>
            </div>

            </Contents>

        </div>

    )

}

export default BodyConten;