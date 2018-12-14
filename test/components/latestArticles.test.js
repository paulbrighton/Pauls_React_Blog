import LatestArticles from '../../components/FeaturedArticle'

describe('<LatestArticles />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <LatestArticles />
    )

    expect(component).toMatchSnapshot()
  })
})