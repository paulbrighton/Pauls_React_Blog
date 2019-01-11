import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class ContactForm extends Component {
  async handleSubmit (event) {
    event.preventDefault()
    const form = event.target
    const formData = {
      From: 'paul@paulbrighton.com',
      To: 'paul@paulbrighton.com',
      ReplyTo: form.email.value,
      HtmlBody: form.body.value,
      Name: form.name.value
    }
    const response = await fetch('/contact',
      {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
    if (response.status === 200) {
      form.reset()
    }
  }
  render () {
    return <section className='contact-form'>
      <h3>Contact Form</h3>
      <p>Fill in the contact form and I'll get back to you as soon as possible.</p>
      <fieldset>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter name here' name='name' className='contact-form__input--short' required />
          <input type='email' placeholder='Enter email here' name='email' className='contact-form__input--short' required />
          <textarea placeholder='Enter message here.' className='contact-form__input--tall' name='body' required />
          <input type='submit' value='Send' className='contact-form__btn' />
        </form>
      </fieldset>
    </section>
  }
}

export default ContactForm
