import NavListItems from '../../components/NavListItems'

describe('<NavListItems />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <NavListItems />
    )

    expect(component).toMatchSnapshot()
  })
})
