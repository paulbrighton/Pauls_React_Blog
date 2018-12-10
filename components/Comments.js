import { Component } from 'react'

class Comments extends Component {
  render () {
    return <div className='c-comment'>
      <div className='c-comment__author'>
        <img className='c-comment__img' src='../static/images/ruby.jpg' alt='A Ruby logo' />
        <h4 className='c-comment__author-name'>Author Name</h4>
        <time className='c-comment__created-date'>Created on: Add Date</time>
      </div>
      <p className='c-comment__body'>Body text</p>
    </div>
  }
}

export default Comments
