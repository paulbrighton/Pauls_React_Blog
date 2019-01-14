import HamburgerNav from '../../components/HamburgerNav'

describe('<HamburgerNav />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <HamburgerNav />
    )

    expect(component).toMatchSnapshot()
  })
})
