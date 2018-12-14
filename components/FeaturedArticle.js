import { Component } from 'react'

import ArticlePreview from '../components/ArticlePreview'

class FeaturedArticle extends Component {
  render () {
    const { article } = this.props

    return <section className='c-featured'>
      <div className='o-featured__container'>
        <h2 className='c-featured__header'>Featured Article</h2>
        <div className='c-headers__divider--featured' />
        <div className='o-article-preview__container--featured'>
          <div className='c-article-preview__featured'>
            <ArticlePreview article={article} />
          </div>
        </div>
      </div>
    </section>
  }
}

export default FeaturedArticle
