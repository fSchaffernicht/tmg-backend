const monk = require('monk')

const db = monk('localhost:27017/tmg')

module.exports = db
