import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import Layout from '../components/Layout'
import Article from '../components/Article'

class Articles extends Component {
  constructor (props) {
    super(props)

    this.articleQuery = gql`
      query article($slug: String!) {
        article(slug:$slug) {
          author
          title
          text
          createdAt
          image
          comments {
            body
            authorName
            articleId
            id
            created_at
            image
          }
        }
      }
    `
  }

  render () {
    return <Query query={this.articleQuery} variables={{slug: this.props.url.query.slug}}>
      {({loading, data: { article }}) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading...</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <Article article={article} />
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(Articles)
