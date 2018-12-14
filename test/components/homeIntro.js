import HomeIntro from '../../components/HomeIntro'

describe('<HomeIntro />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <HomeIntro />
    )

    expect(component).toMatchSnapshot()
  })
})