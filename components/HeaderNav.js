import { Component } from 'react'

import NavListItems from './NavListItems'

class HeaderNav extends Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
    if (this.state.isOpen) {
      document.querySelector("div[data-behavior='myNav']").style.width = '100%'
    } else {
      document.querySelector("div[data-behavior='myNav']").style.width = '0%'
    }
  }

  render () {
    return <div>
      <nav className='c-header__nav'>
        <div data-behavior='myNav' className='c-overlay'>
          <a href='javascript:void(0)' className='c-closebtn' onClick={this.toggleMenu}>&times;</a>
          <div className='c-overlay-content'>
            <NavListItems />
          </div>
        </div>
        <span className='c-hamburger-nav' onClick={this.toggleMenu}>&#9776;</span>
      </nav>
      <nav className='c-main-nav'>
        <ul>
          <NavListItems />
        </ul>
      </nav>
    </div>
  }
}

export default HeaderNav
