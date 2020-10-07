import React from 'react'
import styled from 'styled-components'
import { Logo } from '@components/icons'
import { media } from '@styles'

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 33px 5vw 0;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    ${media.tablet`display:none;`};
`

const Menu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`

const Link = styled.li`
    list-style-type: none;
`
const Item = styled.a`
    color: #f1faee;
    text-decoration: none;
    font-family: "Josefin Sans";
    font-weight: 700;
    margin-right: 77px;
`
const Resume = styled.a`
    color: #f1faee;
    text-decoration: none;
    font-family: "Josefin Sans";
    padding: 12px 17px;
    border: 1px solid #f1faee;
    border-radius: 3px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.35s ease;
    box-shadow: 0 4px 6px rgba(241, 250, 238, .11), 0 1px 3px rgba(241, 250, 238, .08);
    :hover {
        transform: translate3d(0px,-2px,0px);
        background-color: rgba(241, 250, 238, 0.9);
        box-shadow: 0 7px 14px rgba(241, 250, 238, .11), 0 3px 6px rgba(241, 250, 238, .08);
        color: #1D3557;
    }
`


const Nav = () => {

    return (
        <Navbar>
            <Logo />
            <Links>
                <Menu>
                    <Link>
                        <Item>About</Item>
                    </Link>
                    <Link>
                        <Item>Projects</Item>
                    </Link>
                </Menu>
                <Resume>Resume</Resume>
            </Links>
        </Navbar>
    )
}


export default Nav;