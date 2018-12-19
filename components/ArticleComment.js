import { Component } from 'react'

import CommentForm from '../components/CommentForm'

import Auth from '../lib/Auth'

class ArticleComment extends Component {
  constructor (props) {
    super(props)

    this.auth = new Auth()
    this.login = this.login.bind(this)
  }

  login () {
    this.auth.login()
  }

  render () {
    if (this.auth.isAuthenticated()) {
      return <>
      <div className='c-user-comments__info'>
        <h3 className='c-user-comments__login-message'>Welcome, User Name</h3>
        <a className='c-user-comments__login-btn' href='/auth/logout'>Logout</a>
      </div>
      <CommentForm />
      </>
    } else {
      return <div className='c-user-comments__info'>
        <h3 className='c-user-comments__login-message'>Please login to comment.</h3>
        <a className='c-user-comments__login-btn' onClick={this.login} >Login</a>
      </div>
    }
  }
}

export default ArticleComment
