import Portfolio from '../../pages/portfolio'

describe('<Portfolio />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Portfolio />
    )

    expect(component).toMatchSnapshot()
  })
})
