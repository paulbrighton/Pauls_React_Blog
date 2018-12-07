import Layout from '../../components/Footer'

describe('<Layout />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Layout />
    )

    expect(component).toMatchSnapshot()
  })
})
