import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../Profile'

import styled from 'styled-components'
import GlobalStyle from '../../styles/global'

const LayoutWrapper = styled.section`
  display: flex;
`

const LayoutMain = styled.div`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <aside>
        <Profile />
      </aside>

      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout