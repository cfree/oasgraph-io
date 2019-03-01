const { siteName } = require('../helpers');

exports.homePage = (req, res) => {
  res.render('index', { title: siteName });
};
