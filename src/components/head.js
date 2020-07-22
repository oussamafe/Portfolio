import React from 'react'
import Helmet from 'react-helmet';



const Head = () =>(
    <Helmet>
        <html lang="en" prefix="og: http://ogp.me/ns#" />
        <title itemProp="name" lang="en">
            Oussama Fezzani | Software Engineer
        </title>
    </Helmet>
)



export default Head;