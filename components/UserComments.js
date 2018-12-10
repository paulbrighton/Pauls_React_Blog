import { Component } from 'react'

import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'

class UserComments extends Component {
  render () {
    return <div className='c-user-comments'>
      <h2 className='c-article__header'>Post a comment!</h2>
      <div className='c-header-divider' />
      <div className='c-user-comments__info'>
        <h3 className='c-user-comments__login-message'>Welcome, User Name</h3>
        <a className='c-user-comments__login-btn' href='/auth/logout'>Logout</a>
      </div>
      <CommentForm />
      <h4 className='c-user-comments__counter'>Add Comment Counter Here</h4 >
      <Comments />
    </div>
  }
}

export default UserComments
