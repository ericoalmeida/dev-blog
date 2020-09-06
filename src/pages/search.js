import React from 'react'

import MainLayout from '../components/MainLayout'
import SEO from '../components/seo'
import Search from '../components/Search'

const SearchPage = () => {
  return (
    <MainLayout>
      <SEO title="SearchPage" />

      <Search />
    </MainLayout>
  )
}

export default SearchPage
