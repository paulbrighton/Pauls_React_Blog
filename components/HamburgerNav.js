import { Component } from 'react'

import Link from 'next/link'

class HamburgerNav extends Component {
  render () {
    const { click } = this.props

    return <div>
      <li><Link href='/'><a onClick={click}>Home</a></Link></li>
      <li><Link href='/about'><a onClick={click}>About</a></Link></li>
      <li><Link href='/portfolio'><a onClick={click}>Portfolio</a></Link></li>
      <li><Link href='/contact'><a onClick={click}>Contact</a></Link></li>
    </div>
  }
}

export default HamburgerNav
