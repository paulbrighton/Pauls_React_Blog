import { Component } from 'react'

class CommentForm extends Component {
  render () {
    return <div className='c-comments-form'>
      <form>
        <label className='c-comments-form__name-label'>Display Name</label>
        <input type='text' className='c-comments-form__name-field' placeholder='Add your name here' required />
        <label className='c-comments-form__body-label'>Comment</label>
        <input type='text' className='c-comments-form__body-text' placeholder='Add your comment here' required />
        <input type='submit' value='Post' className='c-comments-form__submit-btn' />
      </form>
    </div>
  }
}

export default CommentForm
