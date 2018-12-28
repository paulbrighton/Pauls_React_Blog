import { Component } from 'react'

import CommentForm from '../components/CommentForm'
import Auth from '../lib/Auth'

class ArticleComment extends Component {
  constructor (props) {
    super(props)

    this.auth = new Auth()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login () {
    this.auth.login()
  }

  userProfile () {
    return {
      name: localStorage.getItem('name')
    }
  }

  logout () {
    this.auth.logout()
  }

  render () {
    const userProfile = this.userProfile()
    if (this.auth.isAuthenticated()) {
      return <div>
        <div className='c-user-comments__info'>
          <h3 className='c-user-comments__login-message'>Welcome, {userProfile.name}</h3>
          <a className='c-user-comments__login-btn' onClick={this.logout}>Logout</a>
        </div>
        <CommentForm />
      </div>
    } else {
      return <div className='c-user-comments__info'>
        <h3 className='c-user-comments__login-message'>Please login to comment.</h3>
        <a className='c-user-comments__login-btn' onClick={this.login} >Login</a>
      </div>
    }
  }
}

export default ArticleComment
