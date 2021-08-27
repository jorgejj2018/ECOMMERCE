import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import {StyleGlobal} from './global'
import { Link } from "react-router-dom";

const ImgProducto = styled.img`
width:100%;
height:18vh;
`;
const CardProductos = (props) => {
    return (
        <>
        <StyleGlobal/>
        <Link to={`/${props.id}`} className="link-card">
                    <ImgProducto src={props.img}/>
                    <h2>{props.nombre}</h2>
                    <h2>${props.precio}</h2>
        </Link>
            
        </>
    )
}

export default CardProductos
