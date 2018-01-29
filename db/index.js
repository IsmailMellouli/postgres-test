const { Pool } = require('pg')
const connectionString = 'postgres://localhost:5432/test'

const pool = new Pool({
  connectionString: connectionString
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}
