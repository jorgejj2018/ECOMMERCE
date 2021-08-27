import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

const ContainerFooter = styled.footer`
background-color:#e3f5f5;
max-width:100%;
height:30vh;
display:flex;
justify-content:space-between;
align-items:center;
`;
const Logo = styled.img`
background-color:#0001;
width:20%;
height:20vh;
border-radius:8px;
margin-left:5%;
`;
const CtnRedes = styled.div`
background-color:whitesmoke;
width:30%;
height:15vh;
border-radius:80px;
margin-right:5%;
display:flex;
align-items:center;
justify-content:space-evenly;
`;

const Redes = styled.img`
width:100%;
height:8vh;
border-radius:50%;
margin-left:2%;

&:hover{
    transform:scale(0.8)
}
`;


const Footer = () => {
    return (
        <>
            <ContainerFooter>
            <Logo src="https://i.ibb.co/Mc8zT53/logo.png"/>
            <CtnRedes>
            <a href="https://web.whatsapp.com/">
            <Redes src="https://i.ibb.co/PZHvknc/whatsapp-icon-icons-com-65489.png"/> 
            </a>
            <a href="https://www.facebook.com/">
            <Redes src="https://i.ibb.co/30qKk6q/Facebook-Square-icon-icons-com-49948.png"/> 
            </a>
            <a href="https://www.instagram.com/">
            <Redes src="https://i.ibb.co/kGp2Qz2/instagram-f-icon-icons-com-65485.png"/> 
            </a>
            </CtnRedes>
            </ContainerFooter>
        </>
    )
}

export default Footer
