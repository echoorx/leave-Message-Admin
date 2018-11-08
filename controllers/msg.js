'use strict';

/**
 * Module dependencies.
 */

// const mongoose = require('mongoose');
// const MsgSchema = mongoose.model('MsgSchema');
// const assign = Object.assign;
var MsgList = require('../models/msg')

// addMsg
const addMsg = (req, res) => {
  var data = {
    title: req.body.title || '',
    content: req.body.content || '',
    userInfo: req.body.userInfo || '',
    openid: req.body.openid || '',
    createdAt: new Date().getTime()
  }
  for(let k in data) {
    if(!data[k]) return res.send({code: 500, msg: '内容不能为空'})
  }
  MsgList.create(data, (err, user) => {
    if (err) return res.send({msg: '服务器异常，请联系管理员',code: 500});   
    res.send({msg: 'success',code: 0})  
  })
}

// getAllMsg
const getAllMsg = (req, res) => {
  console.log(req.query)
  let query = {
    sort: {createdAt: -1},
    limit: req.query.limit || 5,
    skip: req.query.page || 1
    // skip: ( req.query.page - 1 ) * query.limit || 0 
  }
  query.skip = (query.skip - 1) * query.limit
  MsgList.count({},(err, count) => {
    if(err) return res.send({msg: '未知异常，请联系管理员',code: 500})
    MsgList.find({}, null, query, (err, docs) => {
      if(err) return res.send({msg: '服务器异常，请联系管理员',code: 500})
      res.send({msg: 'success',code: 0, data: docs, total: count})  
    })
  })
}

// getMyMsg
const getMyMsg = (req, res) => {
  var data = {
    openid: req.query.openid || '',
  }
  let query = {
    sort: {createdAt: -1},
    limit: req.query.limit || 5,
    skip: req.query.page || 1
  }
  query.skip = (query.skip - 1) * query.limit
  if(!data.openid) return res.send({msg: '服务器异常，请联系管理员',code: 500})
  
  MsgList.count({openid: data.openid},(err, count) => {
    if(err) return res.send({msg: '未知异常，请联系管理员',code: 500})
    MsgList.find({openid: data.openid}, null, query, (err, docs) => {
      if(err) return res.send({msg: '服务器异常，请联系管理员',code: 500})
      res.send({msg: 'success',code: 0, data: docs, total: count})  
    })
  })
}

// getDetail
const getDetail = (req, res) => {
  var data = {
    id: req.query.id || '',
  }
  if(!data.id) return res.send({msg: '服务器异常，请联系管理员',code: 500})
  MsgList.find({_id: data.id}, null, {sort: {createdAt: -1}}, (err, docs) => {
    if(err) return res.send({msg: '服务器异常，请联系管理员',code: 500})
    res.send({msg: 'success',code: 0, data: docs})  
  })
}

module.exports = {
  addMsg,
  getAllMsg,
  getMyMsg,
  getDetail
}