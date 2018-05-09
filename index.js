const basicAuth = require('basic-auth')

module.exports = (name, pass, realm='Private Area') => (req, res, next) => {
    const cred = basicAuth(req)

    if (cred && cred.name === name && cred.pass === pass)
      return next()

    res.set('WWW-Authenticate', `Basic realm="${realm}"`)
       .sendStatus(401)
}
