import Show from '../../components/Footer'

describe('<Show />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Show />
    )

    expect(component).toMatchSnapshot()
  })
})
