import { Component } from 'react'
import Layout from '../components/Layout'
import UserComments from '../components/UserComments'

class Article extends Component {
  render () {
    return <Layout>
      <article className='o-main-container'>
        <div className='c-article'>
          <h2 className='c-article__header'>Article Title</h2>
          <div className='c-header-divider' />
          <h3 className='c-article__author'>Article by Author Name</h3>
          <time className='c-article__published'>Published: Published at Date</time>
          <figure>
            <img src='../static/images/rock.png' alt='An animated rock' className='c-article__image' />
          </figure>
          <div className='c-article__text'>
            <p>Body Text</p>
          </div>
        </div>
        <UserComments />
        <a className='c-user-comments__back-btn'>Back to Article List</a>
      </article>
    </Layout>
  }
}

export default Article
