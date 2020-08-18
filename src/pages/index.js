import React from 'react'
import { Link } from 'gatsby'

import MainLayout from '../components/MainLayout'
import SEO from '../components/seo'

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </MainLayout>
)

export default IndexPage
