import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import CardProductos from './cardProdutos'
import ContainerCategori from './ctnCategori';
import { getProductMen } from '../actions/productAction'
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
const prueba = [1,2,3]

const Hombres = () => {
    const productos = useSelector(state => state.producto.allProductMen)

    return (
        <>
        <Container>
            <ContainerCategori/>
            <ContainerCard>
            {productos.map(produc => <CardProductos key={produc.id} categoria={produc.categoria} nombre={produc.nombre} precio={produc.precio} img={produc.img}/>)}
            </ContainerCard>
        </Container>
        </>
    )
}

export default Hombres