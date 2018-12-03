import { Component } from 'react'

class NavListItems extends Component {
  render () {
    return <div>
      <ul className='c-footer__nav'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>
  }
}

export default NavListItems
