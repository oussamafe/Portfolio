import React from 'react'
import styled from 'styled-components'
import { ButtonBackground } from '@components/icons'
import { Facebook, Soundcloud, Github, Linkedin, Scroll } from '@components/icons/socials'
import { media,theme } from '@styles'
const { colors,fonts } = theme;



const Header = styled.header`
    display: grid;
    margin-top: 15vh;
    grid-template-columns: 5vw 1fr;
    grid-template-rows: 1fr 75px;
    grid-template-areas: ". text"
    "project project-button"
    ". icons";
    row-gap: 5vh;
    ${media.tablet`margin-top: 8vh;`};
`

const Text = styled.section`
    grid-area: text;
    max-width: 470px;
    display: grid;
    grid-template-rows : auto;
    row-gap: 5vh;
    margin-right: 5vw;
`

const Greeting = styled.h5`
    color: ${colors.grey};
    opacity: 0.6;
    font-family: ${fonts.JosefinSans};
    font-weight : 200;
    font-size: 17px;
    margin-top: 0;
    margin-bottom: 0;
    ${media.phone`font-size: 15px;`};
`

const Heading = styled.h3`
    font-family: ${fonts.YesevaOne};
    color: ${colors.whtie};
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    ${media.phone`
        font-size: 1.9rem;
    `};
`

const Paragraph = styled.p`
    font-family: ${fonts.JosefinSans};
    line-height: 150%;
    color: ${colors.grey};
    font-size: 17px;
    font-weight:500;
    margin-top: 0;
    margin-bottom: 0;
    span {
        font-weight: 700;
    }
`
const Button = styled.div`
    grid-area: project;
        ${media.tiny`
            svg {
                width: 95vw;
                height: 100%
            }
        `};

`

const ButtonText = styled.a`
    grid-area: project-button;
    align-self: center;
    overflow: hidden;
`
const Icons = styled.ul`
    display: flex;
    grid-area: icons;
    padding: 0;
    align-items: center;
`

const Icon = styled.li`
    width: 22px;
    height: auto;
    fill: ${colors.grey};
    margin-right: 40px;
    list-style-type: none;
`

const Link = styled.a`
`

const ScrollDown = styled.div`
    position: absolute;
    left: 50%;
    top: 93%;
    transform : translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor : pointer;
    svg {
        fill: #f1faee;
        width: 40px;
        height: auto;
    }
    
    ${media.tablet`display:none;`};
`

const ScrollDownText = styled.h6`
    font-family: ${fonts.JosefinSans};
    font-weight:300;
    color: ${colors.white};
    font-size: 1.2em;
    margin-top:0;
    margin-bottom:6px;
`


const Hero = () => {

    return (
        <Header>
            <Text>
                <Greeting>Hi there , my name is</Greeting>
                <Heading>Oussama Fezzani.</Heading>
                <Paragraph>
                    I'm a software engineer from <span>Tunisia</span> specializing
                    in building websites and a part-time web instructor at
                    <span> GOMYCODE</span>. Also a <span>Music Producer</span> when
                    i'm not solving bugs.
                </Paragraph>
            </Text>
            <Button>
                <ButtonBackground />
            </Button>
            <ButtonText>View Projects</ButtonText>
            <Icons>
                <Icon>
                    <Link><Github /></Link>
                </Icon>
                <Icon>
                    <Link><Linkedin /></Link>
                </Icon>
                <Icon>
                    <Link><Facebook /></Link>
                </Icon>
                <Icon>
                    <Link><Soundcloud /></Link>
                </Icon>
            </Icons>
            <ScrollDown>
                <ScrollDownText>My Projects</ScrollDownText>
                <Scroll />
            </ScrollDown>
        </Header>
    )
}


export default Hero;