import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import {StyleGlobal} from './global'

const Card = styled.a`
background-color:whitesmoke;
width:25%;
height:33vh;
margin:auto 2%;
border-radius:2px;
text-align:center;
text-decoration:none;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}
`;
const ImgProducto = styled.img`
width:100%;
height:18vh;
`;
const CardProductos = (props) => {
    return (
        <>
        <StyleGlobal/>
            
                <Card href={props.id}>
                    <ImgProducto src={props.img}/>
                    <h2>{props.nombre}</h2>
                    <h2>${props.precio}</h2>
                </Card>
            
        </>
    )
}

export default CardProductos
