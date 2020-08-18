import React from 'react'
import PropTypes from 'prop-types'
import SideBar from '../SideBar'

import GlobalStyle from '../../styles/global'

import { LayoutWrapper, LayoutMain } from './styles'

const MainLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <SideBar />

      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
