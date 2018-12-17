import { Component } from 'react'

class HomeIntro extends Component {
  render () {
    return <section className='c-intro'>
      <div className='o-intro__container'>
        <h1 className='c-headers'>Paul Brighton Web Development</h1>
        <div className='c-headers__divider' />
        <figure>
          <a href='https://twitter.com/paulbrighton_'>
            <img src='/static/images/welcome_image.jpg' className='c-intro__img' alt='An HTML illustration' />
          </a>
        </figure>
        <div className='c-intro__text'>
          <p>Welcome to my blog all about my journey from photographer to web developer. Not only will it cover up to date web development practices but also some useful information on search engine optimization and a little web design.</p>
          <p>I intend to cover all the languages that I have used for my projects and these include HTML, CSS, SASS, JavaScript and Ruby (on Rails).</p>
          <p>There is more information about me and a copy of my latest CV on the About page and also a collection of my projects on the Portfolio page. You can also sign up for email updates by filling in the Subscribe form.</p>
        </div>
      </div>
    </section>
  }
}

export default HomeIntro
