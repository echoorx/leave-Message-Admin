'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  userInfo: { type : {}, default : '', trim : true  },
  msg_id: { type : String, default : '', trim : true },
  content: { type : String, default : '', trim : true },
  openid: { type: String, default : '', trim : true },
  createdAt: { type : String, default : +new Date(), trim : true }
});

/**
 * Validations
 */

CommentsSchema.path('msg_id').required(true, ' msg_id cannot be blank');
CommentsSchema.path('openid').required(true, ' openid cannot be blank');
CommentsSchema.path('content').required(true, 'content cannot be blank');
CommentsSchema.path('userInfo').required(true, 'userInfo cannot be blank');

/**
 * Methods
 */

CommentsSchema.methods = {

}



module.exports = mongoose.model("CommentsSchema",CommentsSchema);