import UserComments from '../../components/UserComments'

describe('<UserComments  />', () => {
  it('it renders correctly', () => {
    const comments = [{
      id: 'ID',
      slug: 'Title',
      createdAt: '2018-12-12 10:20:46 UTC',
      authorName: 'authorName',
      body: 'This is a commment!'
    }]
    const component = shallow(
      <UserComments comments={comments} />
    )

    expect(component).toMatchSnapshot()
  })

  it('should render correctly without a comment', () => {
    const comments = []
    const component = shallow(
      <UserComments comments={comments} />
    )

    expect(component).toMatchSnapshot()
  })
})
