import { Component } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/application.scss'

class Layout extends Component {
  render () {
    return <div className='container'>
      <Head>
        <title>Paul Brighton's Web Development Blog</title>
        <meta name='description' content='A blog by Paul Brighton all about web development. It includes articles about HTML, CSS, JavaScript and Ruby on Rails plus other tips on web design and developing.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/static/images/favicon.ico' type='image/x-icon' />
      </Head>
      <Header />
      { this.props.children }
      <Footer />
    </div>
  }
}

export default Layout
