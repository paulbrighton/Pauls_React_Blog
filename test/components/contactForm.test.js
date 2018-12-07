import ContactForm from '../../components/Footer'

describe('<ContactForm />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <ContactForm/>
    )

    expect(component).toMatchSnapshot()
  })
})