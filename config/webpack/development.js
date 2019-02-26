process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.plugins.prepend(
  'Dotenv',
  new Dotenv()
)

module.exports = environment.toWebpackConfig()
