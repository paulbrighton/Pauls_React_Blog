import { Component } from 'react'

import NavListItems from './NavListItems'

class Footer extends Component {
  render () {
    return <footer className='c-footer'>
      <div className='o-footer__container'>
        <nav>
          <ul className='c-footer__nav'>
            <NavListItems />
          </ul>
        </nav>
        <div className='c-social'>
          <h3>Social Media</h3>
          <div className='c-social__brands'>
            <a href='https://twitter.com/paulbrighton_'>
              <img src='../static/images/twitter.svg' className='c-social__icon c-social__icon--twitter' alt='Twitter logo' />
            </a>
            <a href='https://www.facebook.com/paul.brighton.10'>
              <img src='../static/images/facebook.svg' className='c-social__icon c-social__icon--facebook' alt='Facebook logo' />
            </a>
            <a href='https://www.pinterest.co.uk/paulbrightonfda/'>
              <img src='../static/images/pinterest.svg' className='c-social__icon c-social__icon--pinterest' alt='Pinterest logo' />
            </a>
            <a href='https://www.linkedin.com/in/paulbrighton/'>
              <img src='../static/images/linkedin.svg' className='c-social__icon c-social__icon--linkedin' alt='LinkedIn logo' />
            </a>
          </div>
        </div>

        <div className='c-useful-websites__links'>
          <h3>Useful Links</h3>
          <li><a href='https://procoders.co.uk/'>ProCoders Bootcamp</a></li>
          <li><a href='https://developer.mozilla.org/en-US/'>MDN Web Docs</a></li>
          <li><a href='https://guides.rubyonrails.org/'>Ruby on Rails Guides</a></li>
          <li><a href='https://caniuse.com/'>CanIUse</a></li>
        </div>

        <div className='c-about-info'>
          <h3>About</h3>
          <p>Designed by Paul Brighton</p>
          <p>Built with Ruby on Rails</p>
          <p>&copy; 2018 Paul Brighton</p>
        </div>
      </div>
    </footer>
  }
}

export default Footer
