import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import Layout from '../components/Layout'
import Article from '../components/Article'
import Comment from '../components/Comment'
import UserComments from '../components/UserComments'

class Articles extends Component {
  constructor (props) {
    super(props)

    this.postComment = this.postComment.bind(this)
    this.newComment = gql`
      mutation addComment($slug: String!, $authorName: String!, $body: String!, $image: String!) {
        addComment(slug:$slug, authorName:$authorName, body:$body, image:$image) {
          slug
          body
          authorName
          image
        }
      }
    `

    this.articleQuery = gql`
      query article($slug: String!) {
        article(slug:$slug) {
          author
          title
          text
          createdAt
          image
          comments {
            createdAt
            authorName
            body
            image
          }
        }
      }
    `
  }

  postComment (event, newComment) {
    event.preventDefault()
    const form = event.target

    newComment({
      variables: {
        articleId: this.props.url.query.id,
        authorName: form.authorName.value,
        body: form.body.value
      }
    })

    form.reset()
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
            <Mutation mutation={this.newComment}
              update={(cache, { data: { newComment } }) => {
                const updatedArticle = Object.assign({}, article, { comments: article.comments.concat([newComment]) })
                cache.writeQuery({
                  query: this.articleQuery,
                  variables: {id: this.props.url.query.id},
                  data: { article: updatedArticle }
                })
              }}>
              {newComment => {
                return <div>
                  {article.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} />
                  })}
                  <UserComments mutation={(event) => this.postComment(event, newComment)} />
                </div>
              }}
            </Mutation>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(Articles)
