(function () {
	'use strict';

let appconfig=require('../../appconfig');
let globalobj=require('../../core/global');
let util=require('util');
let mongoose=require('mongoose');
let Projects = mongoose.model('Projects');

	exports.getAllProject=function(aTableInfo,callback){
		console.log('aTableInfo ' +  JSON.stringify(aTableInfo));
		let totalRecord=null;
		let perPage = aTableInfo.RPP
		 , page = Math.max(0, aTableInfo.CurPage);
		Projects.count({},function(err,data){
			if(err)
			totalRecord=0;
			else
				totalRecord=data;
		});
		Projects.find(function(err,data){
			if(err)
				callback(null,err);
			else {
			let	obj = {
					 status: 'success',
						data: data
				};
				callback(globalobj.globalObject(obj));
			}
		}).skip(perPage * (page-1)).limit(perPage).sort('ProjectName');;
	};


  exports.getSearchProject=function(aTableInfo,callback){
    console.log('aTableInfo ' +  JSON.stringify(aTableInfo));
    let totalRecord=null;
    let perPage = aTableInfo.RPP
      , page = Math.max(0, aTableInfo.CurPage);
    let mongoqueryfilter;
    if(aTableInfo.ProjectName){

    	mongoqueryfilter={'ProjectName' : new RegExp(aTableInfo.ProjectName, 'i')}

		} else if(aTableInfo.ProjectType){

    	mongoqueryfilter={'ProjectType' : aTableInfo.ProjectType}

		} else if(aTableInfo.ProjectName && aTableInfo.ProjectType){

			mongoqueryfilter={'ProjectName' : new RegExp(aTableInfo.ProjectName, 'i'),'ProjectType':aTableInfo.ProjectType};
		} else {
      mongoqueryfilter={};
		}

    //let mongoqueryfilter={'ProjectName' : new RegExp(aTableInfo.ProjectName, 'i'),'ProjectType':aTableInfo.ProjectType};
    Projects.count(mongoqueryfilter,function(err,data){
      if(err)
        totalRecord=0;
      else
        totalRecord=data;
    });
    Projects.find(mongoqueryfilter,function(err,data){
      if(err)
        callback(null,err);
      else {
        let	obj = {
          status: 'success',
          data: data
        };
        callback(globalobj.globalObject(obj));
      }
    }).skip(perPage * (page-1)).limit(perPage).sort('ProjectName');
  };

exports.addProject=function(projectdetails,callback){
  let project=new Projects(projectdetails);
	project.save(function(err){
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

exports.getProjectById=function(projectId,callback){

	if(projectId==0)
		callback(null,err);
	else{
		Projects.find({_id:projectId},function(err,data){
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

  exports.getProjectByName=function(name,callback){
  	Projects.find({'ProjectName':new RegExp(name,'i') },function(err,data){
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
  };


})();


/*
exports.getAllPoject=function(callback){
	let sqlqury="select p.ProjectId,p.CreateDate,p.ProjectTitle,p.ProjectDescription,";
	sqlqury += "ISNULL(u.FirstName,'')+ ' ' + ISNULL(u.LastName, '')as CreatedBy from ProjectMaster p inner join Users u on p.CreateBy=u.UserId";
	db.runSql(sqlqury,function(data,err){
		if(err){
          callback(null,err);
		}
		else{
			let obj={
					status:'success',
					count:data.length,
					data:data
				}
				callback(globalobj.globalObject(obj));
		}
	});
}

exports.addProject=function(project,callback){
   if(project==null){
   	callback(null,err);
   }
   else{
   	console.log(project);
   	let sqlqury="Insert into ProjectMaster(ProjectTitle,ProjectDescription,CreateBy) Values ";
   	sqlqury +=util.format("('%s','%s',%d)",project.ProjectTitle,project.ProjectDescription,project.CreateBy);
   	console.log(sqlqury);
   	db.runSql(sqlqury,function(err,data){
         if(err)
         	return err;
         else{
         	let obj={
					status:'success',
					count:0,
					data:'Record add successfully'
				}
				callback(globalobj.globalObject(obj));
         }
   	});
   }
}

exports.getProjectById=function(projectid,callback){
	if(projectid==0)
		return callback(null,err);
	else{
		let sqlqury="Select * from ProjectMaster where Projectid=" + projectid;
		db.runSql(sqlqury,function(data,err){
			if(err)
				return err;
			else{
		        let obj={
					status:'success',
					count:data.length,
					data:data
				}
				callback(globalobj.globalObject(obj));
			}
		})
	}
}
*/

