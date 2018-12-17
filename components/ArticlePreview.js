import { Component } from 'react'

import Link from 'next/link'

class ArticlePreview extends Component {
  render () {
    const { article } = this.props

    return (
      <Link href={`/article?slug=${article.slug}`} as={`/articles/${article.slug}`}>
        <a href='#' className='c-article__path'>
          <div className='c-article-preview'>
            <figure>
              <img className='c-article-preview__image' src={`http://localhost:3001${article.image}`} />
            </figure>
            <div className='c-article-preview__text'>
              <h3>{article.title}</h3>
            </div>
          </div>
        </a>
      </Link>
    )
  }
}

export default ArticlePreview
