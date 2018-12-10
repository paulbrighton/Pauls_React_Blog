import { Component } from 'react'

class ContactForm extends Component {
  render () {
    return <section className='contact-form'>
      <h3>Contact Form</h3>
      <p>Fill in the contact form and I'll get back to you as soon as possible.</p>
      <fieldset>
        <form>
          <input type='text' placeholder='Enter name here' name='name' className='contact-form__input--short' required />
          <input type='email' placeholder='Enter email here' name='email' className='contact-form__input--short' required />
          <textarea placeholder='Enter message here.' className='contact-form__input--tall' name='body' />
          <input type='submit' value='Send' className='contact-form__btn' />
        </form>
      </fieldset>
    </section>
  }
}

export default ContactForm
