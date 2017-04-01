(function () {
  'use strict';

  let express=require('express');
  let issues=require('../controllers/issuemodule/issues');
  let apiRoutes = express.Router();
  let logger=require('../core/Logger');

// Get all issues list
  apiRoutes.post('/issues',function (req,resp,next) {
    issues.getAllIssues(req.body,function(data,err){
      if(err) {
        return next(err);
      }
      else {
        resp.json(data);
      }
    });
  });

  // Add Issues
  apiRoutes.post('/issues/add',function(req,resp,next){
    issues.addIssue(req.body,function(data,err){
      if(err) {
        return next(err);
      }
      else {
        resp.json(data);
      }
    });
  });


  // Issue Search
  apiRoutes.post('/issues/search',function (req,resp,next) {
    issues.getSearchIssue(req.body,function(data,err){
      if(err) {
        return next(err);
      }
      else {
        resp.json(data);
      }
    });
  });

 // Issue by Id
  apiRoutes.get('/issues/:issueId',function(req,resp,next){
    issues.getIssueById(req.params.issueId,function(data,err){
      if(err) {
        return next(err);
      }
      else{
        resp.json(data);
      }
    });
  });


  module.exports = apiRoutes;
})();
