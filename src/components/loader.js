import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import { Logo } from '@components/icons';
import PropTypes from 'prop-types';


const StyledContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const StyledLogo = styled.div`

    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        user-select: none;
    }
`;




const Loader = ({ finishLoading }) => {

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader
            .add({
                targets: '#logo-name path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 500,
                delay: function(el, i) { return i * 180 },
            })
            .add({
                targets: '.loader',
                opacity: 0,
                scale: 3,
                duration: 600,
                easing: "easeInExpo",
                delay: 500
              }).add({
                targets: '.loader',
                opacity: 0,
                duration: 100,
                delay: 500
              });
    };

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    });
    
    return (
        <StyledContainer className="loader">
            <StyledLogo isMounted={isMounted}>
                <Logo />
            </StyledLogo>
        </StyledContainer>
    )
}

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default Loader;