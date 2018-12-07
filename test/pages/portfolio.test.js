import Portfolio from '../../components/Footer'

describe('<Portfolio />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Portfolio />
    )

    expect(component).toMatchSnapshot()
  })
})
