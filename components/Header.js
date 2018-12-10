import { Component } from 'react'
import Link from 'next/link'

import HeaderNav from './HeaderNav'

class Header extends Component {
  render () {
    return <header className='c-header'>
      <div className='o-header__container'>
        <Link href='/index'><a><img src='static/images/logo.png' alt='Paul Brighton Web Development Logo' className='c-brand-logo' /></a></Link>
        <div className='c-subscribe-form'>
          <form className='c-subscribe-form__container'>
            <input type='email' value='Email' placeholder='Email' name='EMAIL' className='c-subscribe-form__input' id='mce-EMAIL' />
            <input type='submit' value='Subscribe' name='subscribe' className='c-subscribe-form__btn' />
          </form>
        </div>
      </div>
      <HeaderNav />
    </header>
  }
}

export default Header
