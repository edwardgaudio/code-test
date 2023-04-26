const express = require('express');
const productUtil = require('../util/productUtil')
const router = express.Router();
const _ = require("lodash")

router.get('/', function(req, res, next) {
  console.log(req.query)
  let data;

  try {
    if (_.isEmpty(req.query)) {
      data = productUtil.getAllProductsData() 
    } else {
      data = productUtil.getProductsFiltered(req.query)
    }
    return res.send(data)

  } catch (error) {
    console.error(error)
    return res.status(400).send({ error: error.message })
  }
});

router.get('/characteristics-score', function(req, res, next) {

  try {
    // Not wild about this way of doing this
    // this "score" seems like something that would be computed on insert to a datastore instead of on retrieval
    const data = productUtil.getProductsWithCharacteristicPoints()
    return res.send(data)
  } catch (error) {
    console.error(error)
    return res.status(400).send({ error: error.message })
  }
});

module.exports = router;
