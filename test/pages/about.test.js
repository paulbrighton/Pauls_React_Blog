import About from '../../pages/about'

describe('<About />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <About />
    )

    expect(component).toMatchSnapshot()
  })
})
