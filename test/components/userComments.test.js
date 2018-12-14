import UserComments from '../../components/UserComments'

describe('<UserComments  />', () => {
  it('it renders correctly', () => {
    const comments = []
    const component = shallow(
      <UserComments comments={comments}/>
    )

    expect(component).toMatchSnapshot()
  })
})