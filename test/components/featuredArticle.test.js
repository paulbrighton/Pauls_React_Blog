import FeaturedArticle from '../../components/FeaturedArticle'

describe('<FeaturedArticle />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <FeaturedArticle />
    )

    expect(component).toMatchSnapshot()
  })
})