import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '@styles'
import { Loader, Head } from '@components'


const Text = styled.a`
    color:white;
    margin: 0 auto;
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
                    <Text>Finished Loading</Text>
                </StyledContent>
            )}

        </div>
    )
}

export default Layout;