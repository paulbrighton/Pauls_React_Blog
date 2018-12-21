import { Component } from 'react'
import Router from 'next/router'

import Layout from '../components/Layout'

import Auth from '../lib/Auth'

class Callback extends Component {
  componentDidMount () {
    const auth = new Auth()
    if (/access_token|id_token|error/.test(this.props.url.asPath)) {
      // console.log(this.props.url.asPath)
      auth.handleAuthentication()
      Router.push('/')
    }
  }

  render () {
    return <Layout>
      <div>Error</div>
    </Layout>
  }
}

export default Callback
