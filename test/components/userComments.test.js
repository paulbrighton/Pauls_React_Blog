import UserComments from '../../components/UserComments'

describe('<UserComments  />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <UserComments />
    )

    expect(component).toMatchSnapshot()
  })
})