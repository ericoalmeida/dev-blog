import React from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../components/MainLayout'
import SEO from '../components/seo'
import RecommendedPosts from '../components/RecommendedPosts'
import Comments from '../components/Comments'

import {
  PostHeader,
  PostDate,
  PostTitle,
  PostDescription,
  MainContent,
} from '../styles/Post/styles'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previousPost, nextPost } = pageContext

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

      <RecommendedPosts previousPost={previousPost} nextPost={nextPost} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </MainLayout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
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
