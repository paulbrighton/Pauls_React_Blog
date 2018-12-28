import { Component } from 'react'

import Comment from './Comment'
import ArticleComment from './ArticleComment'

import Pluralize from 'react-pluralize'

class UserComments extends Component {
  render () {
    const { comments } = this.props
    return <div className='c-user-comments'>
      <h2 className='c-article__header'>Post a comment!</h2>
      <div className='c-header-divider' />
      <ArticleComment />
      <h4 className='c-user-comments__counter'><Pluralize singular={'comment'} plural={'comments'} count={comments.length} /></h4>
      {comments.map(comment => {
        return <Comment comment={comment} key={comment.id} />
      })}
    </div>
  }
}

export default UserComments
