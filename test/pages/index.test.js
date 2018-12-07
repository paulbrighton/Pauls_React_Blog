import Index from '../../components/Footer'

describe('<Index />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Index />
    )

    expect(component).toMatchSnapshot()
  })
})
