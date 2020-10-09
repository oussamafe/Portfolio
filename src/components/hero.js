import React from 'react'
import styled from 'styled-components'
import { ButtonBackground } from '@components/icons'
import { Facebook, Mail, Github, Linkedin, Soundcloud, Scroll } from '@components/icons/socials'
import { media, theme } from '@styles'
const { colors, fonts } = theme;



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
    color: ${colors.white};
    text-decoration : none;
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
    transition: transform .6s cubic-bezier(.215,.61,.355,1);
    :hover {
        transform: scale(1.5);
    }
`

const Link = styled.a`
    fill: ${colors.grey};
    transition: fill .5s;
    :hover {
        fill: ${colors.white};
    }
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
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}
    
    ${media.tablet`display:none;`};
`

const ScrollDownText = styled.a`
    font-family: ${fonts.JosefinSans};
    font-weight:300;
    color: ${colors.white};
    font-size: 1.2em;
    margin-top:0;
    margin-bottom:6px;
    text-decoration:none;
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
            <ButtonText href="#projects">View Projects</ButtonText>
            <Icons>
                <Icon>
                    <Link href="https://github.com/oussamafe" target="_blank" rel="nofollow noopener noreferrer" aria-label="github">
                        <Github />
                    </Link>
                </Icon>
                <Icon>
                    <Link href="https://www.linkedin.com/in/oussama-fezzani/" target="_blank" rel="nofollow noopener noreferrer" aria-label="linked" >
                        <Linkedin />
                    </Link>
                </Icon>
                <Icon>
                    <Link href="mailto:oussama.fezzani@esprit.tn" aria-label="mail">
                        <Mail />
                    </Link>
                </Icon>
                <Icon>
                    <Link href="https://www.facebook.com/oussama.fezzani/" target="_blank" rel="nofollow noopener noreferrer" aria-label="facebook">
                        <Facebook />
                    </Link>
                </Icon>
                <Icon>
                    <Link href="https://soundcloud.com/lauvabeats" target="_blank" rel="nofollow noopener noreferrer" aria-label="soundcloud">
                        <Soundcloud />
                    </Link>
                </Icon>
            </Icons>
            <ScrollDown>
                <ScrollDownText href="#projects">My Projects</ScrollDownText>
                <Scroll />
            </ScrollDown>
        </Header>
    )
}


export default Hero;