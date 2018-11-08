'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MsgSchema = new Schema({
  userInfo: { type : {} },
  title: { type : String, default : '', trim : true },
  content: { type : String, default : '', trim : true },
  // comments: [{
  //   body: { type : String, default : '' },
  //   user: { type : Schema.ObjectId, ref : 'User' },
  //   createdAt: { type : Date, default : Date.now }
  // }],
  // tags: { type: [], get: getTags, set: setTags },
  // image: {
  //   cdnUri: String,
  //   files: []
  // },
  openid: { type: String, default : '', trim : true },
  createdAt: { type : String, default : +new Date(), trim : true }
});

/**
 * Validations
 */

MsgSchema.path('title').required(true, ' title cannot be blank');
MsgSchema.path('openid').required(true, ' openid cannot be blank');
MsgSchema.path('content').required(true, 'content cannot be blank');

/**
 * Methods
 */

MsgSchema.methods = {

}



module.exports = mongoose.model("MsgList",MsgSchema);