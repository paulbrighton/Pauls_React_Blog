import Comments from '../../components/Footer'

describe('<Comments />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Comments />
    )

    expect(component).toMatchSnapshot()
  })
})