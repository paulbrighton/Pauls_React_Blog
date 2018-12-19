import ArticleComment from '../../components/ArticleComment'
jest.mock('../../lib/Auth')

describe('<ArticleComment />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <ArticleComment />
    )

    expect(component).toMatchSnapshot()
  })
})