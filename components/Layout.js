import { Component } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/application.scss'

class Layout extends Component {
  render () {
    return <div className='container'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />
      { this.props.children }
      <Footer />
    </div>
  }
}

export default Layout
