import React from 'react'
import propTypes from 'prop-types'

import { RecommendedWrapper, RecommendedLink } from './styles'

const RecommendedPosts = ({ previousPost, nextPost }) => {
  return (
    <RecommendedWrapper>
      {previousPost && (
        <RecommendedLink to={previousPost.fields.slug} className="previous">
          {previousPost.frontmatter.title}
        </RecommendedLink>
      )}

      {nextPost && (
        <RecommendedLink to={nextPost.fields.slug} className="next">
          {nextPost.frontmatter.title}
        </RecommendedLink>
      )}
    </RecommendedWrapper>
  )
}

RecommendedPosts.propTypes = {
  previousPost: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),

  nextPost: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
