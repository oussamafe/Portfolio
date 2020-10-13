import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Nav, Hero } from '@components'
import BackgroundImage from 'gatsby-background-image'


const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`


const MultiBackground = ({ className }) => {
  const {
    astronaut
  } = useStaticQuery(
    graphql`
      query {
        astronaut: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    astronaut.childImageSharp.fluid,
    `linear-gradient(  0deg, rgba(29, 53, 87, 0.1) 0%, rgba(29, 53, 87, 0.2) 100% )`
  ].reverse()

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <Overlay>
        <Nav />
        <Hero />
      </Overlay>
    </BackgroundImage>
  )
}


const StyledMultiBackground = styled(MultiBackground)`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledMultiBackground