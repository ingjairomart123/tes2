import styled from 'styled-components';

const ContenBotones = styled.div`
width: 100%;
height: 100vh;


`
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  

.boton {
  color: #fff !important;
  padding: 0.5em 1.2em;
  /* border: 2px solid; */
  border-color: #00b7ffc1;
  position: relative;
  cursor: pointer; 
  border-radius: 10px;
  width: auto; /* Para 4 columnas, restamos el espacio entre imágenes */
  margin-bottom: 10px;
  
 
}
.boton:before {
  content:"";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: 170px;
  background: rgba(7, 176, 237, 0.397);
  transition: all 1s ease;

}
.boton:hover:before {
width: 358px;
border-radius: 10px;
}

.img{
    width: 320px;
    height: 150px;
}
`




export { ContenBotones, Div };