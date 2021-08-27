import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

const ContainerBanner = styled.section`
width:70%;
height:40vh;
margin:2% auto;
box-shadow:5px 15px 15px #e3f5f5;
`;
const ImgBanner = styled.img`
background-color:gray;
width:100%;
height:40vh;
border-radius:8px;
`;
const Banner = () => {
    return (
        <>
            <ContainerBanner>
            <ImgBanner src="https://i.ibb.co/wBJLTPs/banner.jpg"/>
            </ContainerBanner>
        </>
    )
}

export default Banner
