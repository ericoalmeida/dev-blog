import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MainLayout from '../components/MainLayout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
  `)

  const postList = allMarkdownRemark.edges

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
    </MainLayout>
  )
}

export default IndexPage
