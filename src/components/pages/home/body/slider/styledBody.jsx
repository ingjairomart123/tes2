import styled from 'styled-components';

const SliderBody = styled.div`

.banner{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
}

.slider .slide{
    position: absolute;
    width: 100%;
    height: 100vh;
}

.slide img{
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
    transition: 0.3s ease;
    
}

.slide.active img{
    opacity: 1;
   
}
&.exagono{
  width: 30px;
  height: 30px;
}

.slide .left-info{
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    transform: translateX(-100%);
    transition: 0s;
}

.slide.active .left-info{
    transform: translateX(0);
    z-index: 1;
    transition: 1s ease;
}

.left-info .penetrte-blur{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(1px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
//H1 derecho
.penetrte-blur h1{
    font-size: 150px;
    color: #000000;
    text-shadow: 0 0 1px rgba(0, 0, 0, 5);
}

.left-info .content{
    position: absolute;
    bottom: 8%;
    left: 10%;
    color: #000000;
}

.content h3{
    font-size: 20px;
}

.content p{
    font-size: 16px;
    margin: 10px 0 1.5rem;
}

.content .btn{
    display: inline-block;
    padding: 1.3rem 2.8rem;
    background: #ffffff;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 1.6rem;
    color: #0d78f3b5;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.5s ease;
}

.content .btn:hover{
    background: transparent;
    color: #fef8f8;
}

.slide .right-info{
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ffffff53; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(100%);
    transition: 0s;
}

.slide.active .right-info{
    transform: translateX(0);
    z-index: 1;
    transition: 1s ease;
}
//h1 izquierdo 
.right-info h1{
    font-size: 150px;
    color: #000000;
    text-shadow: 
        0 1px 0 #000000,
        0 2px 0 #080808,
        0 3px 0 #fffdfd,
        0 4px 0 #ffffff,
        0 5px 0 #ffffff,  
        0 6px 1px rgba(0, 0, 0, 0.1),  
        0 0px 5px rgba(0, 0, 0, 0.1),  
        0 1px 3px rgba(0, 0, 0, 0.3),  
        0 3px 5px rgba(0, 0, 0, 0.2),  
        0 5px 10px rgba(0, 0, 0, 0.25),  
        0 10px 10px rgba(0, 0, 0, 0.2),  
        0 20px 20px rgba(0, 0, 0, 0.15),  
        ;
}

.right-info h3{
    position: absolute;
    font-size: 55px;
    color: #0d78f3b5;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: translateY(190%);
    margin-left: 1.1rem;
}

.navigation{
    position: absolute;
    bottom: 8%;
    right: 5%;
    z-index: 99;
}

.navigation span{
    display: inline-flex;
    width: 5rem;
    height: 5rem;
    background: #ffffff3e;
    border: 2px solid #fff;
    box-shadow: 0 0 10px rgba(71, 71, 71, 0.5);
    cursor: pointer;
    margin-left: 2.5rem;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
}

.navigation span:nth-child(1){
    background: transparent;
}

.navigation span:nth-child(1):hover{
    background: #fff;
}

.navigation span i{
    color: #000000;
    transition: all .5s ease;
}

.navigation span:nth-child(1) i{
    color: #040303;
}

.navigation span:nth-child(1):hover i{
    color: #000000;
}
`

export {
    SliderBody
}