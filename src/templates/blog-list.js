import React from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../components/MainLayout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, totalPages } = props.pageContext
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  const previousPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <MainLayout>
      <SEO title="Home" />

      {postList.map(
        ({
          node: {
            frontmatter,
            timeToRead,
            fields: { slug },
          },
        }) => {
          const { background, category, date, title, description } = frontmatter

          return (
            <PostItem
              category={category}
              title={title}
              timeToRead={timeToRead}
              date={date}
              description={description}
              background={background}
              slug={slug}
            />
          )
        }
      )}

      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </MainLayout>
  )
}

//o valor dos parametros $skip e $limit vem do contexto passado node api do gatsby
export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            description
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
