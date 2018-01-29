var express = require('express');
var router = express.Router();
const db = require('../db')

/* GET users listing. */
router.get('/', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM users')
  res.send(rows)
})
module.exports = router;
