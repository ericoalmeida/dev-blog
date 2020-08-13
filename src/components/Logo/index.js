import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { LogoWrapper } from './styles'

const Logo = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "Profile.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <LogoWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Logo
