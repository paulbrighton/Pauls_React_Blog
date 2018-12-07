import About from '../../components/Footer'

describe('<About />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <About />
    )

    expect(component).toMatchSnapshot()
  })
})
