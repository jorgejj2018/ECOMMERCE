import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
background-color:whitesmoke;
width:20%;
height:20vh;
margin-left:2%;
align-self:center;
border-radius:8px;
display:flex;
flex-direction:column;
`;
const ContainerCategori = () => {
    return (
        <>
            <Container>
                <Link to="Hombres" className="categori">Hombre</Link>
                <Link to="Mujeres" className="categori">Mujeres</Link>
            </Container>
        </>
    )
}

export default ContainerCategori
