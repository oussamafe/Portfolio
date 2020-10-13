import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { css } from 'glamor'
import { media, theme } from '@styles'

const { colors, fonts } = theme;

const Project = styled.article`
    width: 20vw;
    height: 65vh;
    border-radius: 5vh;
    overflow: hidden;
    transition: transform .6s;
    background-color: ${colors.lightBlue};
    box-shadow: 0 10px 30px -10px ${colors.blue};
    ${media.tablet`
        width: 40vw;
        height: 50vh;
        margin-bottom : 50px;
    `};
    ${media.thone`
        width: 80vw;
        height: 75vh;
        border-radius: 5vh;
        overflow: hidden;
        transition: transform .6s;
        background-color: ${colors.lightBlue};
        margin-bottom : 0;
    `}
    :hover {
        transform : scale(1.05);
    }
`

const Information = styled.div`
    width: 100%;
    height: 80%;
    background-color: ${colors.lightBlue};
    display: grid;
    grid-template-rows: repeat(3, auto);
    text-align: center;
    place-items: center;
`

const Footer = styled.div`
    width: 100%;
    height: 20%;
    background-color: ${colors.darkBlue};
    display: grid;
    grid-template-rows: repeat(2, auto);
    text-align: center;
    justify-items: center;
    row-gap:10px;
`

const Title = styled.h4`
    color: ${colors.white};
    font-family: ${fonts.YesevaOne};
    font-size: 40px;
    margin: 0;
`

const Description = styled.p`
    padding: 0 40px 0;
    font-family: ${fonts.JosefinSans};
    font-weight : 300;
    font-size: 1em;
    color: ${colors.white};
    margin: 0;
    align-self : start;
`

const FooterTitle = styled.h3`
    margin: 0;
    color: ${colors.white};
    font-family: ${fonts.JosefinSans};
    font-weight: 200;
    font-size: 20px;
    align-self : center;
`

const Icons = styled.div`
    align-self : start;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`


const styles = css({
    ' svg': {
        width: 'auto',
        height: '9vw',
        marginTop: '10px'
    },
    '@media(max-width: 600px)': {
        ' svg': {
            height: '15vh',
            width: 'auto',
        }
    }

})

const IconStyles = css({
    ' svg path ': {
        fill: `${colors.white}`
    }
})

const Card = (props) => {

    const { illustration, name, description, technologies } = props.projectData;

    return (
        <Project>
            <Information >
                <ReactSVG src={`/illustrations/${illustration}`} {...styles} />
                <Title>{name}</Title>
                <Description> {description} </Description>
            </Information>
            <Footer >
                <FooterTitle>Built using : </FooterTitle>
                <Icons>
                    {
                        technologies.map((name, i) => { return (<ReactSVG src={`/icons/technologies/${name}.svg`} {...IconStyles} key={i} />) }
                        )
                    }
                </Icons>
            </Footer>
        </Project>
    )
}


export default Card;