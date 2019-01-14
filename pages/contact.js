import { Component } from 'react'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

class Contact extends Component {
  render () {
    return <Layout>
      <div className='o-contact__container'>
        <h2>Contact</h2>
        <div className='c-header-divider' />
        <section className='c-contact-details'>
          <h3>Connect with me</h3>
          <p>I am conveniently situated between Wakefield and Doncaster in Fitzwilliam, Wakefield and have access to the train station that connects to Leeds and Sheffield.</p>
          <p>I will be actively looking for work as a web developer as soon as I finish my course at &#123;Pro&#125;Coders.</p>
          <p>Feel free to contact me with any comments or inquires using the contact form or connect with me on social media.</p>
          <ul>
            <li><a href='https://twitter.com/paulbrighton_'>Twitter</a></li>
            <li><a href='https://www.facebook.com/paul.brighton.10'>Facebook</a></li>
            <li><a href='https://www.pinterest.co.uk/paulbrightonfda/'>Pinterest</a></li>
            <li><a href='https://www.linkedin.com/in/paulbrighton/'>LinkedIn</a></li>
          </ul>
        </section>
        <ContactForm />
      </div>
    </Layout>
  }
}

export default Contact
