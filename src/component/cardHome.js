import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import { StyleGlobal } from './global';
import { Link } from 'react-router-dom';
import { getProductWoman,getProductMen,getProductAll } from '../actions/productAction'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';


const hombre = {
    bgColor:"#a0d0e7"
}
const mujer = {
    bgColor:"#dca2bb"
}

const ContainerCardHome = styled.section`
width:95%;
height:10vh;
margin:2% auto;
display:flex;
justify-content:space-evenly;
`;
const CardHomeLink = styled.a`
background-color:${({theme}) => theme.bgColor};
width:30%;
height:inherit;
border-radius:8px;
display:flex;
&:hover{
    transform:scale(1.2);
    cursor:pointer;
}
`;
const ImgBanner = styled.img`
width:100%;
height:40vh;
border-radius:8px;
`;
const CardHome = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductWoman())
    }, [])
    useEffect(() => {
        dispatch(getProductMen())
    }, [])
    useEffect(() => {
        dispatch(getProductAll())
    }, [])
    return (
        <>
        <StyleGlobal/>
        <ContainerCardHome> 
        <ThemeProvider theme={hombre}>
            <CardHomeLink>
            <Link to="/Hombres" className="link-card-home">
                <h2>🎩 Hombres </h2>
            </Link>
            </CardHomeLink>
        </ThemeProvider>
        <ThemeProvider theme={mujer}>
            <CardHomeLink href="#">
            <Link to="/Mujeres" className="link-card-home">
            <h2>👒 Mujer </h2>
            </Link>
            </CardHomeLink>
          </ThemeProvider>
          </ContainerCardHome>
        </>
    )
}

export default CardHome