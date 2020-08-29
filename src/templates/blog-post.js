import React from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../components/MainLayout'
import SEO from '../components/seo'

import {
  PostHeader,
  PostDate,
  PostTitle,
  PostDescription,
  MainContent,
} from '../styles/Post/styles'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <MainLayout>
      <SEO title={post.frontmatter.title} />
      <PostHeader>
        <PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </PostDate>

        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>

      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </MainContent>
    </MainLayout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: " DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
