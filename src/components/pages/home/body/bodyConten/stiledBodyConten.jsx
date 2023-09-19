import styled from 'styled-components';

const Contents = styled.div`
width: 100%;
height: 80vh;
position: relative;
z-index: 1;
padding: 10px 0;

.video-container {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

`
const Divbackg = styled.div`
background-color: #357cdf52;
width: 100%;
height: 80vh;
overflow: hidden;
padding: 20px;

`
const Divbackg1 = styled.div`
background-color: #0f5fb052;
width: 80%;
height: 73vh;
margin: 0 auto;
.centrarH1{
    align-items: center;
    justify-content: center;
    position: relative;
    top: 30%;
    left: 8%;
    color: white;
    
}
.centrarH2{
    align-items: center;
    justify-content: center;
    position: relative;
    top: 40%;
    left: 5%;
    color: white;
   
}
`

export {
    Contents, Divbackg, Divbackg1
}