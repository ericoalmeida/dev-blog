import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Logo from '../Logo'

const Profile = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  const {
    siteMetadata: { title, description, position },
  } = site

  return (
    <div className="Profile-wrapper">
      <Logo />
      <h1>{title}</h1>
      <h2>{position}</h2>

      <p>{description}</p>
    </div>
  )
}

export default Profile
