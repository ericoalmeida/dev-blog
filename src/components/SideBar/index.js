import React from 'react'

import Profile from '../Profile'
import SocialLinkss from '../SocialLinks'
import MenuLinks from '../MenuLInks'

import { SidebarWrapper } from './styles'

const SideBar = () => {
  return (
    <SidebarWrapper>
      <Profile />
      <SocialLinkss />
      <MenuLinks />
    </SidebarWrapper>
  )
}

export default SideBar
