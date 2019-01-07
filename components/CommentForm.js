import { Component } from 'react'

class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert ('A comment was posted: ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return <div className='c-comments-form'>
      <form onSubmit={this.handleSubmit}>
        {/* <label className='c-comments-form__name-label'>Display Name</label> */}
        <input type='hidden' className='c-comments-form__name-field' placeholder='Add your name here' required />
        {/* <label className='c-comments-form__body-label'>Comment</label> */}
        <input type='text' className='c-comments-form__body-text' placeholder='Add your comment here' value={this.state.value} onChange={this.handleChange} required />
        <input type='submit' value='Post' className='c-comments-form__submit-btn' />
      </form>
    </div>
  }
}

export default CommentForm
