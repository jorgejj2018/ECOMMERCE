import React ,{ useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductDetail} from '../actions/productAction'
import { Redirect,Route, useParams } from "react-router"
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import {StyleGlobal} from '../component/global'
const Card = styled.div`
width:100%;
height:60vh;
border-radius:2px;
text-align:center;
text-decoration:none;
display:flex;
`;
const ImgProducto = styled.img`
width:20%;
height:50vh;
margin:auto;
border-radius:2px;
`;
const CtnDetalles = styled.div`
width:50%;
height:50vh;
margin:auto;
border-radius:2px;
display:flex;
flex-direction:column;
`;
const Titulo = styled.h1`
text-align:center;
`
const Description = styled.p`
width:70%;
margin:2% auto;

`
const Precio = styled.h2`
`
const BtnAgregar = styled.button`
background-color:#f8db94;
width:40%;
height:5vh;
margin: 2% auto;
border:none;
border-radius:8px;
font-size:20px;
color:#223;

&:hover{
    cursor:pointer;
}
`
const Detalles = () => {
    let { slug } = useParams();
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getProductDetail(slug))
    }, [])

    const producto = useSelector(state => state.producto.productDetail)
    return (
        <>
        <StyleGlobal/>
            <Card>
            <ImgProducto src={producto.img}/>
            <CtnDetalles>
                <Titulo>{producto.nombre}</Titulo>
                <Description>{producto.descripcion}</Description>
                <Precio>${producto.precio}</Precio>
                <BtnAgregar>Agregar</BtnAgregar>
            </CtnDetalles>
            </Card>
        </>
    )
}

export default Detalles
