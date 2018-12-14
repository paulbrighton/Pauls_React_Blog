import LatestArticles from '../../components/FeaturedArticle'

describe('<LatestArticles />', () => {
  it('it renders correctly', () => {
    const article = {
      'title': 'New Article #3',
      'image': '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7d12c66030ae5e39faf3acc1b6e9cd19139f8dc6/water-tap-black-and-white-macro-615326.jpeg'
    }

    const component = shallow(
      <LatestArticles article={article} />
    )

    expect(component).toMatchSnapshot()
  })
})