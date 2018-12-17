import Index from '../../pages/index'

describe('<Index />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Index />
    )

    expect(component).toMatchSnapshot()
  })
})
