import { Component } from 'react'

import NavListItems from './NavListItems'

class HeaderNav extends Component {
  constructor (props) {
    super(props);

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.onClick= this.onClick.bind(this);   
  }

  openNav () {
    this.setState({open: true});
    document.querySelector("div[data-behavior='myNav']").style.width = '100%';
  }
  closeNav () {
    this.setState({open: false});
    document.querySelector("div[data-behavior='myNav']").style.width = '0%';
  }
  onClick () {
    if (this.state.open) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  render () {
    return <div>
      <nav className='c-header__nav'>
        <div data-behavior='myNav' className='c-overlay'>
          <a href='javascript:void(0)' className='c-closebtn' onClick={this.onClick}>&times;</a>
          <div className='c-overlay-content'>
            <NavListItems />
          </div>
        </div>
        <span className='c-hamburger-nav' onClick={this.onClick}>&#9776;</span>
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
