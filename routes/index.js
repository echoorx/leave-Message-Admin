var express = require('express');
var router = express.Router();
var msgController = require('../controllers/msg')
var commentsController = require('../controllers/comments')

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
  msgController.getDetail(req, res)
})
.get('/getComments', (req, res,  next) => {
  commentsController.getComments(req, res)
})
.post('/addComments', (req, res,  next) => {
  commentsController.addComments(req, res)
})

module.exports = router;
