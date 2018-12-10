import Article from '../../pages/article'

describe('<Article />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Article />
    )

    expect(component).toMatchSnapshot()
  })
})
