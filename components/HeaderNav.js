import { Component } from 'react'

import HamburgerNav from './HamburgerNav'
import MainNav from './MainNav'

class HeaderNav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      styles: { width: '0%' }
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    if (this.state.isOpen) {
      this.setState({
        styles: { width: '0%' },
        isOpen: false
      })
    } else {
      this.setState({
        styles: { width: '100%' },
        isOpen: true
      })
    }
  }

  render () {
    return <div>
      <nav className='c-header__nav'>
        <div style={this.state.styles} className='c-overlay'>
          <a href='#' className='c-closebtn' onClick={this.toggleMenu}>&times;</a>
          <div className='c-overlay-content'>
            <HamburgerNav click={this.toggleMenu} />
          </div>
        </div>
        <span className='c-hamburger-nav' onClick={this.toggleMenu}>&#9776;</span>
      </nav>
      <nav className='c-main-nav'>
        <ul>
          <MainNav />
        </ul>
      </nav>
    </div>
  }
}

export default HeaderNav
