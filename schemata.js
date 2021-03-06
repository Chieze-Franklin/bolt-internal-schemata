'use strict';

var defs = require("bolt-internal-defs");
var mongoose = require('mongoose'), Schema = mongoose.Schema;

var appSchema = new Schema(defs.app);
var appRoleAssocSchema = new Schema(defs.appRoleAssoc);
var appUserAssocSchema = new Schema(defs.appUserAssoc);
var boltSecretSchema = new Schema(defs.boltSecret);
var collectionSchema = new Schema(defs.collection);
var extensionSchema = new Schema(defs.extension);
var hookSchema = new Schema(defs.hook);
var permissionSchema = new Schema(defs.permission);
var roleSchema = new Schema(defs.role);
var routerSchema = new Schema(defs.router);
var userRoleAssocSchema = new Schema(defs.userRoleAssoc);

var userSchema = new Schema(defs.user);
userSchema.virtual('dn')
	.get(function(){ return this.displayName; })
	.set(function(dn){ this.displayName = dn; });
userSchema.virtual('dp')
	.get(function(){ return this.displayPic; })
	.set(function(dp){ this.displayPic = dp; });
/*userSchema.statics.getRoles = function(){
	userRoleAssocSchema.find({ user_id: this._id }, { role_id: 1 });
}*/


module.exports = {
	app : appSchema,
	appRoleAssoc : appRoleAssocSchema,
	appUserAssoc : appUserAssocSchema,
	boltSecret : boltSecretSchema,
	collection : collectionSchema,
	extension : extensionSchema,
	hook : hookSchema,
	permission : permissionSchema,
	role : roleSchema,
	router : routerSchema,
	user : userSchema,
	userRoleAssoc : userRoleAssocSchema
};