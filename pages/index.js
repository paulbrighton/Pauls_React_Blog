import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import HomeIntro from '../components/HomeIntro'
import Layout from '../components/Layout'
import FeaturedArticle from '../components/FeaturedArticle'
import LatestArticles from '../components/LatestArticles'

class Index extends Component {
  constructor (props) {
    super(props)
    this.articlesQuery = gql`
      query articles {
        articles {
          slug
          title
          image
        }
      }
    `
  }

  render () {
    return <Query query={this.articlesQuery}>
      {({ loading, error, data: { articles } }) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading...</p>
          </Layout>
        } else if (error) {
          return <Layout {...this.props.data.error}>
            <p>Error</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <main>
              <HomeIntro />
              <FeaturedArticle article={articles[0]} />
              <LatestArticles articles={articles} />
            </main>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(Index)
