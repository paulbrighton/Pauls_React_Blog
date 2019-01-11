import { Component } from 'react'
import Link from 'next/link'

import HeaderNav from './HeaderNav'

class Header extends Component {
  render () {
    return <header className='c-header'>
      <div className='o-header__container'>
        <Link href='/index'><a><img src='/static/images/logo.png' alt='Paul Brighton Web Development Logo' className='c-brand-logo' /></a></Link>
        <div className='c-subscribe-form'>
          <form action='https://twitter.us17.list-manage.com/subscribe/post?u=5e14f42c2626123e850bb543f&amp;id=5dd22b22a9' method='post' name='mc-embedded-subscribe-form' className='c-subscribe-form__container' target='_blank' noValidate>
            <input type='email' placeholder='Email' name='EMAIL' className='c-subscribe-form__input' id='mce-EMAIL' />
            <input type='submit' value='Subscribe' name='subscribe' className='c-subscribe-form__btn' />
          </form>
        </div>
      </div>
      <HeaderNav />
    </header>
  }
}

export default Header
