import Contact from '../../pages/contact'

describe('<Contact />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Contact />
    )

    expect(component).toMatchSnapshot()
  })
})
