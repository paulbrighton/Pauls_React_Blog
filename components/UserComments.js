import { Component } from 'react'

import ArticleComment from './ArticleComment'

import Pluralize from 'react-pluralize'

class UserComments extends Component {
  render () {
    const { comments } = this.props
    return <div className='c-user-comments'>
      <h2 className='c-article__header'>Post a comment!</h2>
      <div className='c-header-divider' />
      <ArticleComment postComment={this.props.mutation} />
      <h4 className='c-user-comments__counter'><Pluralize singular={'comment'} plural={'comments'} count={comments.length} /></h4>
    </div>
  }
}

export default UserComments
