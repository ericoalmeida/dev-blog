import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Logo from '../Logo'

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './styles'

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
    <ProfileWrapper>
      <ProfileLink to="/">
        <Logo />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>

      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  )
}

export default Profile
