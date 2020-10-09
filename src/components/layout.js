import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '@styles'
import { Loader, Head, StyledBackgroundSection, Projects, Footer } from '@components'


if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;


const Layout = () => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isLoading) {
            return;
        }
    }, [isLoading]);


    return (
        <div id="root">
            <Head />
            <GlobalStyle />
            {isLoading ? <Loader finishLoading={() => setIsLoading(false)} /> : (
                <>
                    <StyledContent>
                        <StyledBackgroundSection id="about" />
                        <Projects />
                    </StyledContent>
                    <Footer />
                </>
            )}

        </div>
    )
}

export default Layout;