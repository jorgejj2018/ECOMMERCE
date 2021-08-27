import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';


const Nav = styled.div`
background-color:#e3f5f5;
max-width:100%;
height:10vh;
display:flex;
justify-content:space-evelyn;
`;
const Secciones = styled.div`
width:40%;
height:10vh;
display:flex;
margin: auto 10%;
`;
const CarritoContador = styled.div`
width:20%;
height:10vh;
display:flex;
`;
const Ul = styled.ul`
width:50%;
height:5vh;
margin:auto;
display:flex;
flex-direction:row;
`;
const Li = styled.li`
width:25%;
height:5vh;
margin:auto;
display:flex;
flex-direction:row;
`;
const CarritoImg = styled.img`
width:100%;
height:8vh;
margin-top:-20%;
`;

const Header = () => {
    return (
        <>
           <Nav> 
            <h1>Ecommerce</h1>
           <Secciones> 
           <Ul>
               <Li> 
                   <NavLink exact  to="/" className="link-secciones">Inicio</NavLink>
               </Li>
               <Li> 
                   <NavLink exact to="/productos" className="link-secciones">Productos</NavLink>
               </Li>  
           </Ul>
           </Secciones>
           <CarritoContador> 
           <Ul>
               <Li> 
               <NavLink exact to="/" className="link-carrito"><CarritoImg src="https://i.ibb.co/n1X4tGk/1486395300-03-trolley-80567.png"/>1</NavLink>
               </Li>  
           </Ul>
           </CarritoContador> 
           </Nav> 
        </>
    )
}

export default Header
