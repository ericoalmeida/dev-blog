import React from 'react'

import Profile from '../Profile'
import SocialLinkss from '../SocialLinks'

import { SidebarWrapper } from './styles'

const SideBar = () => {
  return (
    <SidebarWrapper>
      <Profile />
      <SocialLinkss />
    </SidebarWrapper>
  )
}

export default SideBar
