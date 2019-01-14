const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const postmark = require('postmark')
const bodyParser = require('body-parser')

app.prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.json())

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })

    server.get('/about', (req, res) => {
      return app.render(req, res, '/about')
    })

    server.get('/portfolio', (req, res) => {
      return app.render(req, res, '/portfolio')
    })

    server.get('/contact', (req, res) => {
      return app.render(req, res, '/contact')
    })

    server.get('/articles/:slug', (req, res) => {
      return app.render(req, res, '/article', { slug: req.params.slug })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })

    server.post('/contact', (req, res) => {
      const client = new postmark.ServerClient(`${process.env.POSTMARK_API_KEY}`)

      client.sendEmail(
        {
          From: 'pbrighton@paulbrighton.com',
          To: 'pbrighton@paulbrighton.com',
          Subject: req.body.Name,
          HtmlBody: req.body.HtmlBody,
          ReplyTo: req.body.ReplyTo
        }
      ).then(response => {
        console.log('Sending message')
        console.log(response.To)
        console.log(response.Message)
        return res.sendStatus(200)
      }).catch(error => {
        console.log(error)
        return res.sendStatus(500)
      })
    })
  })
