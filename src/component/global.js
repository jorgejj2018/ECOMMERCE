import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';


export const StyleGlobal= createGlobalStyle`
    h1{
        margin-left:5%;
        color:#223;
        font-weight:lighter;
    }
    h2{
        text-align:center;
        color:#223;
        font-weight:lighter;
    }
    a{
        color:#223;
        text-decoration:none;
    }
    .categori,
    .link-secciones{
        font-size:20px;
        margin:auto auto;
        &:hover{
            transform:scale(0.9);
            cursor:pointer;
        }
    }
    .link-card-home{
        text-align:center;
        width:100%;
        heght:inehrit;
    }
    .link-carrito{
        font-size:20px;
        margin:auto auto;
        display:flex;
        &:hover{
            transform:scale(0.9);
            cursor:pointer;
        }
    }
    .link-card{
        background: linear-gradient(10deg, rgba(248,217,214,0.6194852941176471) 1%, rgba(76,159,185,0.49343487394957986) 95%);
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
    }
`;