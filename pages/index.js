import { Component } from 'react'

import Layout from '../components/Layout'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <main>
        <section className='c-intro'>
          <div className='o-intro__container'>
            <h1 className='c-headers'>Paul Brighton Web Development</h1>
            <div className='c-headers__divider' />
            <figure>
              <a href='https://twitter.com/paulbrighton_'>
                <img src='../static/images/welcome_image.jpg' className='c-intro__img' alt='An HTML illustration' />
              </a>
            </figure>
            <div className='c-intro__text'>
              <p>Welcome to my blog all about my journey from photographer to web developer. Not only will it cover up to date web development practices but also some useful information on search engine optimization and a little web design.</p>
              <p>I intend to cover all the languages that I have used for my projects and these include HTML, CSS, SASS, JavaScript and Ruby (on Rails).</p>
              <p>There is more information about me and a copy of my latest CV on the About page and also a collection of my projects on the Portfolio page. You can also sign up for email updates by filling in the Subscribe form.</p>
            </div>
          </div>
        </section>
        <section className='c-featured'>
          <div className='o-featured__container'>
            <h2 className='c-featured__header'>Featured Article</h2>
            <div className='c-headers__divider--featured' />
            <div className='o-article-preview__container--featured'>
              <a href='#' className='c-article__path'>
                <div className='c-article-preview__featured'>
                  <figure>
                    <img className='c-article-preview__image' src='../static/images/welcome_image.jpg' />
                  </figure>
                  <div className='c-article-preview__featured-text'>
                    <h3>Article Title</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className='c-section__latest'>
          <div className='o-article-preview'>
            <h2 className='c-headers'>Latest Articles</h2>
            <div className='c-headers__divider' />
            <div className='o-article-preview__container'>
              <a href='#' className='c-article__path'>
                <div className='c-article-preview'>
                  <figure>
                    <img className='c-article-preview__image' src='../static/images/welcome_image.jpg' />
                  </figure>
                  <div className='c-article-preview__text'>
                    <h3>Article Title</h3>
                  </div>
                </div>
              </a>
              <a href='#' className='c-article__path'>
                <div className='c-article-preview'>
                  <figure>
                    <img className='c-article-preview__image' src='../static/images/welcome_image.jpg' />
                  </figure>
                  <div className='c-article-preview__text'>
                    <h3>Article Title</h3>
                  </div>
                </div>
              </a>
              <a href='#' className='c-article__path'>
                <div className='c-article-preview'>
                  <figure>
                    <img className='c-article-preview__image' src='../static/images/welcome_image.jpg' />
                  </figure>
                  <div className='c-article-preview__text'>
                    <h3>Article Title</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  }
}

export default Index
