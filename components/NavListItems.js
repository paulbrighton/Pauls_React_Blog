import { Component } from 'react'

import Link from 'next/link'

class NavListItems extends Component {
  render () {
    return <div>
      <li><Link href='/index'><a>Home</a></Link></li>
      <li><Link href='/about'><a>About</a></Link></li>
      <li><Link href='/portfolio'><a>Portfolio</a></Link></li>
      <li><Link href='/contact'><a>Contact</a></Link></li>
    </div>
  }
}

export default NavListItems
