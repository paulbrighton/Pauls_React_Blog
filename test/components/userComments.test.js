import UserComments from '../../components/Footer'

describe('<UserComments  />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <UserComments />
    )

    expect(component).toMatchSnapshot()
  })
})