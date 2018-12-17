import LatestArticles from '../../components/LatestArticles'

describe('<LatestArticles />', () => {
  it('it renders correctly', () => {
    const articles = [{
      slug: 'Title',
      title: 'Article Title',
      image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e7738a08f01012432864f3fb9a3e44033a0cddc3/mobile_first.jpg'
    }]

    const component = shallow(
      <LatestArticles articles={articles} />
    )

    expect(component).toMatchSnapshot()
  })
})