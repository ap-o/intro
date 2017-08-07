const path      = require('path')

const {
  development,
  static_url
} = require('../config');

module.exports = app => app.get("*", (req, res) => {
    res.render('index.njk', {
      static_url
    });
  });
