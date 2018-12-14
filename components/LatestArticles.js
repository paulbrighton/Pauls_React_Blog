import { Component } from 'react'

import ArticlePreview from '../components/ArticlePreview'

class LatestArticles extends Component {
  render () {
    const { articles } = this.props

    return <section className='c-section__latest'>
      <div className='o-article-preview'>
        <h2 className='c-headers'>Latest Articles</h2>
        <div className='c-headers__divider' />
        <div className='o-article-preview__container'>
          {articles.map(article => {
            return <ArticlePreview key={article.slug} article={article} />
          })}
        </div>
      </div>
    </section>
  }
}

export default LatestArticles
