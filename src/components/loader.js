import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import { Loader, BackLoader } from '@components/icons';
import PropTypes from 'prop-types';
import { theme } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  display:flex;
  background-color: ${colors.blue};
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


const Container = styled.div`
    position: relative;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    -moz-backface-visibility: hidden;
`

const Front = styled.div`
    opacity: ${props => (props.isMounted ? 1 : 0)};
    backface-visibility: hidden;
    svg {
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        fill: none;
        user-select: none;
        #liquid {
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
`

const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    backface-visibility: hidden;

`

const LoaderBox = ({ finishLoading }) => {

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader
        .add({
            targets: '#logo .rectangle',
            delay: 300,
            duration: 1500,
            easing: 'easeInOutQuart',
            strokeDashoffset: [anime.setDashoffset, 0],
        }).add({
            targets: '#logo .liquid',
            fill: '#F1FAEE'
        }).add({
            targets: '#logo .liquid',
            d: [
                { value: 'M195 195H1V104C1 104 48 123 99 123C150 123 195 104 195 104V195Z' },
                { value: 'M195 195H1V79.5C1 79.5 49 59 100 59C151 59 195 79.5 195 79.5V195Z' },
                { value: 'M195 195.5H1V1C1 1 46 5.5 97 5.5C148 5.5 195 1 195 1V195.5Z' },
            ],
            easing: 'easeInOutBack',
            delay: function (el, i) { return i * 180 },
            duration: 2000,
            loop: false,
        }).add({
            targets: '.container',
            scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
            rotateY: { value: '+=180', delay: 200 },
            easing: 'easeInOutQuad',
            duration: 400,
            delay: 500,
        })
        .add({
            targets: '.container',
            delay: 500,
            duration: 300,
            easing: 'easeInOutQuart',
            opacity: 0,
            scale: 3,
          })
          .add({
            targets: '.container',
            duration: 200,
            easing: 'easeInOutQuart',
            opacity: 0,
            zIndex: -1,
          });
    };

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    });

    return (
        <StyledContainer>
            <Container className="container">
                <Front isMounted={isMounted}>
                    <Loader />
                </Front>
                <Back>
                    <BackLoader />
                </Back>
            </Container>
        </StyledContainer>
    )
}

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default LoaderBox;