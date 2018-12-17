import Comment from '../../components/Comment'

describe('<Comment />', () => {
  it('it renders correctly', () => {
    const comment = {
      authorName: 'authorName',
      body: 'This is a comment',
      image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7d12c66030ae5e39faf3acc1b6e9cd19139f8dc6/water-tap-black-and-white-macro-615326.jpeg'
    }

    const component = shallow(
      <Comment comment={comment} />
    )

    expect(component).toMatchSnapshot()
  })
})
