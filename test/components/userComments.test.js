import UserComments from '../../components/UserComments'

describe('<UserComments  />', () => {
  it('it renders correctly', () => {
    const comments = [{
      id: 'ID',
      authorName: 'authorName',
      body: 'This is a commment!',
      articleId: 'ID'
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
