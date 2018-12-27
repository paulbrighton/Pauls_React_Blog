import auth0 from 'auth0-js'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'pauls-blog.eu.auth0.com',
    clientID: 'bHssOomqrFj4rHVBbc4YyzGc8ceU06C2',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://pauls-blog.eu.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  constructor () {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No Access Token found')
    }
    return accessToken
  }

  login () {
    this.auth0.authorize()
  }

  getProfile(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile
      }
      cb(err, profile)
    })
  }

  logout () {
    localStorage.clear()
    this.userProfile = null

    this.auth0.logout({
      returnTo: 'http://localhost:3000',
      clientID: 'bHssOomqrFj4rHVBbc4YyzGc8ceU06C2'
    });
  }
  
  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        console.log(err)
      }
    })
  }
 
  setSession (authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('name', authResult.idTokenPayload.name)
    localStorage.setItem('picture', authResult.idTokenPayload.picture)
    console.log(authResult)
  }

  isAuthenticated () {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}

export default Auth