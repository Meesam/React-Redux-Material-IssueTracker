(function () {
    'use strict';

let mongoose = require( 'mongoose' );

// Create User Schema
let userSchema=new mongoose.Schema({
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},
    Gender:String,
    UserName:String,
    Password:String,
    Email:String,
    DOB:Date,
    LastLogin:Date
});
module.exports = mongoose.model('Users',userSchema);
})();