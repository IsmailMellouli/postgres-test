
const { Pool, Client } = require('pg')
const connectionString = 'postgres://localhost:5432/test'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query("CREATE TABLE users(id SERIAL PRIMARY KEY, name VARCHAR(40) not null,location VARCHAR(40) );INSERT INTO users values(1,'Ismail','Morocco');", (err, res) => {
  console.log(err, res)
  client.end()
})