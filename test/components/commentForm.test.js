import CommentForm from '../../components/Footer'

describe('<CommentForm />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <CommentForm />
    )

    expect(component).toMatchSnapshot()
  })
})