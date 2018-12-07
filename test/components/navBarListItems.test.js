import NavBarListItems from '../../components/Footer'

describe('<NavBarListItems />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <NavBarListItems />
    )

    expect(component).toMatchSnapshot()
  })
})
