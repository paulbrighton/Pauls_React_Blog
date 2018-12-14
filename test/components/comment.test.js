import Comment from '../../components/Comment'

describe('<Comment />', () => {
  it('it renders correctly', () => {
    const comment = {
      authorName: 'authorName'
    }
    
    const component = shallow(
      <Comment comment={comment} />
    )

    expect(component).toMatchSnapshot()
  })
})
