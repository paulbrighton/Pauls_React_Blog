import { Component } from 'react'

// import moment from 'moment'
import { MarkdownPreview } from 'react-marked-markdown'

class Comment extends Component {
  render () {
    const { comment } = this.props

    return (
      <div className='c-comment'>
        <div className='c-comment__author'>
          <img className='c-comment__img' src={comment.image} />
          <h4 className='c-comment__author-name'>{comment.authorName}</h4>
          <time className='c-comment__created-date'>Created on: {comment.createdAt}</time>
        </div>
        <div className='c-comment__body'>
          <MarkdownPreview value={comment.body} />
        </div>
      </div>
    )
  }
}

export default Comment
