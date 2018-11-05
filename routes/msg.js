var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.send([
    { 
      title: 'title1' ,
      ctime: +new Date(),
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      user: 'test1',
      headImg: ''
    },{ 
      title: 'title2' ,
      ctime: +new Date(),
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      user: 'test2',
      headImg: ''
    },{ 
      title: 'title3' ,
      ctime: +new Date(),
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      user: 'test3',
      headImg: ''
    },
  ])
})

module.exports = router;
