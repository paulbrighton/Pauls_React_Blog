import { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/application.scss'

class Layout extends Component {
  render () {
    return <div className='container'>
      <Header />
      { this.props.children }
      <Footer />
    </div>
  }
}

export default Layout
