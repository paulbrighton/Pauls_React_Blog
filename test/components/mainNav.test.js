import MainNav from '../../components/MainNav'

describe('<MainNav />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <MainNav />
    )

    expect(component).toMatchSnapshot()
  })
})
