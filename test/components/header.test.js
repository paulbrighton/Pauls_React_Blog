import Header from '../../components/Footer'

describe('<Header />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Header />
    )

    expect(component).toMatchSnapshot()
  })
})
