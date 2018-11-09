'use strict';

/**
 * Module dependencies.
 */

// const mongoose = require('mongoose');
// const MsgSchema = mongoose.model('MsgSchema');
// const assign = Object.assign;
var CommentsSchema = require('../models/comments')

// addComments
const addComments = (req, res) => {
  var data = {
    msg_id: req.body.msg_id || '',
    content: req.body.content || '',
    userInfo: req.body.userInfo || '',
    openid: req.body.openid || '',
    createdAt: new Date().getTime()
  }
  for(let k in data) {
    if(!data[k]) return res.send({code: 500, msg: '内容不能为空'})
  }
  CommentsSchema.create(data, (err, user) => {
    if (err) return res.send({msg: '服务器异常，请联系管理员',code: 500});   
    res.send({msg: 'success',code: 0})  
  })
}

// getComments
const getComments = (req, res) => {
  var data = {
    msg_id: req.query.msg_id || '',
  }
  let query = {
    sort: {createdAt: -1},
    limit: req.query.limit || 5,
    skip: req.query.page || 1
    // skip: ( req.query.page - 1 ) * query.limit || 0 
  }
  query.skip = (query.skip - 1) * query.limit
  console.log(data,'data')
  CommentsSchema.countDocuments(data, (err, count) => {
    if(err) return res.send({msg: '未知异常，请联系管理员',code: 500})
    CommentsSchema.find({msg_id: data.msg_id}, null, query, (err, docs) => {
      if(err) return res.send({msg: '服务器异常，请联系管理员',code: 500})
      res.send({msg: 'success',code: 0, data: docs, total: count})  
    })
  })
}

module.exports = {
  addComments,
  getComments
}