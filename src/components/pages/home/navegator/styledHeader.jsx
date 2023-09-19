import styled from 'styled-components';

const Header = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

:root{
    font-size: 62.5%;
}

.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 5%;
    background: transparent;
    display: flex;
    align-items: center;
    z-index: 5;
}

.logo{
    font-size: 30px;
    color: #01aefd;
    text-decoration: none;
    font-weight: 700;
}

.social{
    margin: 0 auto 0 50px;
}

.social a{
    display: inline-flex;
    justify-content: center;
    text-align: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #000000;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.5s ease;
}

.social a:hover{
    background: #043250;
}

.social a i{
    display: flex;
    font-size: 25px;
    color: #b4b2b2;
    padding-top: 6px;
    transition: all 0.5s ease;
}

.social a:hover i{
    color: #444;
}

.navbar a{
    font-size: 18px;
    color: #252525;
    text-decoration: none;
    font-weight: 500;
    margin-left: 30px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
`

export{
  Header
}