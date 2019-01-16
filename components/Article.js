import { Component } from 'react'

import Link from 'next/link'
import { MarkdownPreview } from 'react-marked-markdown'
// import moment from 'moment'

class Article extends Component {
  render () {
    const { article } = this.props

    return <article className='o-main-container'>
      <div className='c-article'>
        <h2 className='c-article__header'>{article.title}</h2>
        <div className='c-header-divider' />
        <h3 className='c-article__author'>Article by: {article.author}</h3>
        {/* <time className='c-article__published'><p>Published on: {moment(article.createdAt).format('YYYY/MM/DD')}</p></time> */}
        <time className='c-article__published'><p>Published on: {article.createdAt}</p></time>
        <figure>
          <img className='c-article__main-img' src={`https://pauls-blog.herokuapp.com/${article.image}`} />
        </figure>
        <div className='c-article__text'>
          <MarkdownPreview value={article.text} />
        </div>
      </div>
      <div className='c-user-comments__articles-link'>
        <Link href='/'><a className='c-user-comments__back-btn'>Back to Article List</a></Link>
      </div>
    </article>
  }
}

export default Article
