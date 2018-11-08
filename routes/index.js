var express = require('express');
var router = express.Router();
var msgController = require('../controllers/msg')
var MsgList = require('../models/msg')

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  req.requestTime = Date.now()
  next()
})

router
.post('/addMsg', (req, res,  next) => {
  msgController.addMsg(req, res)
})
.get('/getAllMsg', (req, res) => {
  msgController.getAllMsg(req, res)
})
.get('/getMyMsg', (req, res) => {
  msgController.getMyMsg(req, res)
})
.get('/getDetail', (req, res) => {
  console.log(req.body)
  msgController.getDetail(req, res)
})

module.exports = router;
