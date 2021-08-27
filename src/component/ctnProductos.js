import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import CardProductos from './cardProdutos'
import ContainerCategori from './ctnCategori';
import { getProductAll } from '../actions/productAction'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Container = styled.section`
width:100%;
height:80vh;
display:flex;
`;
const ContainerCard = styled.div`
width:70%;
height:75vh;
margin:auto;
display:flex;
flex-flow:row wrap;
justify-content:space-evenly;

`;


const CtnProductos = () => {

    const productos = useSelector(state => state.producto.allProduct)



    return (
        <>
        <Container>
            <ContainerCategori/>
            <ContainerCard>
                {productos.map(produc => <CardProductos key={produc.id} id={produc.id} categoria={produc.categoria} nombre={produc.nombre} precio={produc.precio} img={produc.img}/>)}
            </ContainerCard>
        </Container>
        </>
    )
}

export default CtnProductos
