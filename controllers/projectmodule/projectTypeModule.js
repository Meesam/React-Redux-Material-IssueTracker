(function () {
  'use strict';

  let appconfig=require('../../appconfig');
  let globalobj=require('../../core/global');
  let util=require('util');
  let mongoose=require('mongoose');
  let ProjectType = mongoose.model('ProjectType');

  exports.getProjectType=function(callback){
    ProjectType.find(function(err,data){
      if(err)
        callback(null,err);
      else{
        let obj={
          status:'success',
          count:data.length,
          data:data
        }
        callback(globalobj.globalObject(obj));
      }
    });
  };

})();




