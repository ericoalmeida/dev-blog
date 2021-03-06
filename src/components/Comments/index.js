import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import { CommentsWrapper, CommentsTitle } from './styles'

const Comments = ({ url, title }) => {
  const completeURL = `http://www.ericoalmeida.dev${url}`
  /**
   * É necessário ter um plano e um site cadastrado no DISQUS para
   * consegui usar as funcionalidades do mesmo
   */

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>

      <ReactDisqusComments
        shortname="ericoalmeida-dev"
        identifier={completeURL}
        title={title}
        url={url}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
