import React from 'react'
import styled from 'styled-components'
//import { media, theme } from '@styles'


const Container = styled.footer`
    display:flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    background-color : #F1FAEE;
    text-align:center;
    padding:20px 0 ;
    line-height: 40px;
`

const Text = styled.h5`
    color:#1d3557;
    font-size : 16px;
    font-family : 'Josefin Sans';
    font-weight : 500;
    margin:0;
`


const Footer = () => {
    return (
        <Container>
            <Text>Designed and Built by Oussama Fezzani © </Text>
        </Container>
    )
}


export default Footer;