import UserComments from '../../components/UserComments'
import ArticleComment from '../../components/ArticleComment'

describe('<UserComments  />', () => {
  it('it renders correctly', () => {
    const comments = [{
      id: 'ID',
      slug: 'Title',
      createdAt: '2018-12-12 10:20:46 UTC',
      authorName: 'authorName',
      body: 'This is a commment!'
    }]

    const postComment = [{
      id: 'ID',
      slug: 'Title',
      createdAt: '2018-12-12 10:20:46 UTC',
      authorName: 'authorName',
      body: 'This is a commment!'
    }]

    const component = shallow(
      <div>
        <UserComments comments={comments} />
        <ArticleComment postComment={postComment} />
      </div>
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
