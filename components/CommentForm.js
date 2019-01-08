import { Component } from 'react'

class CommentForm extends Component {
  render () {
    const { userProfile } = this.props

    return <div className='c-comments-form'>
      <form onSubmit={this.props.postComment}>
        <input type='hidden' name='authorName' value={userProfile.authorName} />
        <input type='text' name='body' className='c-comments-form__body-text' placeholder='Add your comment here' required />
        <input type='hidden' name='image' value={userProfile.image} />
        <input type='submit' value='Post' className='c-comments-form__submit-btn' />
      </form>
    </div>
  }
}

export default CommentForm
