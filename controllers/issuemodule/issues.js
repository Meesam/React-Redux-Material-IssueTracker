let appconfig=require('../../appconfig');
let globalobj=require('../../core/global');
let util=require('util');
let mongoose=require('mongoose');
let Issues = mongoose.model('Issues');


exports.getAllIssues=function(aTableInfo,callback){
  let totalRecord=null;
  let perPage = aTableInfo.RPP
    , page = Math.max(0, aTableInfo.CurPage);
  Issues.count({},function(err,data){
    if(err)
      totalRecord=0;
    else
      totalRecord=data;
  });
  Issues.find(function(err,data){
    if(err)
      callback(null,err);
    else {
      let	obj = {
        status: 'success',
        data: data
      };
      callback(globalobj.globalObject(obj));
    }
  }).skip(perPage * (page-1)).limit(perPage).sort('IssueTitle');
};

exports.addIssue=function(issuedetails,callback){
  let issue=new Issues(issuedetails);
  issue.save(function(err){
    if(err)
      callback(null,err);
    else{
      let obj={
        status:'success',
        count:0,
        data:'Record add successfully'
      };
      callback(globalobj.globalObject(obj));
    }
  });
};

exports.getIssueById=function(issueId,callback){
  if(issueId==0)
    callback(null,err);
  else{
    Issues.find({_id:issueId},function(err,data){
      if(err)
        callback(null,err);
      else{
        let	obj = {
          status: 'success',
          count:data.length,
          data: data
        };
        callback(globalobj.globalObject(obj));
      }
    });
  }
};

exports.getSearchIssue=function(aTableInfo,callback){
  let totalRecord=null;
  let perPage = aTableInfo.RPP
    , page = Math.max(0, aTableInfo.CurPage);
  let mongoqueryfilter;
  if(aTableInfo.ProjectNameitle){

    mongoqueryfilter={'IssueTitle' : new RegExp(aTableInfo.IssueTitle, 'i')}

  } else {
    mongoqueryfilter={};
  }

  //let mongoqueryfilter={'ProjectName' : new RegExp(aTableInfo.ProjectName, 'i'),'ProjectType':aTableInfo.ProjectType};
  Issues.count(mongoqueryfilter,function(err,data){
    if(err)
      totalRecord=0;
    else
      totalRecord=data;
  });
  Issues.find(mongoqueryfilter,function(err,data){
    if(err)
      callback(null,err);
    else {
      let	obj = {
        status: 'success',
        data: data
      };
      callback(globalobj.globalObject(obj));
    }
  }).skip(perPage * (page-1)).limit(perPage).sort('IssueTitle');
};
