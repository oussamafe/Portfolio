import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '@styles'
import { Loader, Head, StyledBackgroundSection, Projects } from '@components'


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
                <StyledContent>
                    <StyledBackgroundSection />
                    <Projects />
                </StyledContent>
            )}

        </div>
    )
}

export default Layout;