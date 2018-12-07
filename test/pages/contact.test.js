import Contact from '../../components/Footer'

describe('<Contact />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Contact />
    )

    expect(component).toMatchSnapshot()
  })
})
