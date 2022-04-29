/**
 * @author Speedum Team
 * @copyright Copyright (c) 2022 Speedum (http://speedum.co.in/)
 * @package User data Model
 */

 let mSgAppSession="";
 let mSgMenuId="";
 let mSgOrgId="";
 let mSgRoleId="";
 let mSgUserId="";
 
 // Make sure your argument name doesn't conflict with variables set above
 exports.setSgAppSession = function (sgAppSession) {
    mSgAppSession = sgAppSession;
 };
 
 exports.setSgMenuId = function (sgMenuId) {
    mSgMenuId = sgMenuId;
 };
 exports.setSgOrgId = function (sgOrgId) {
    mSgOrgId = sgOrgId;
 };
 exports.setSgRoleId = function (sgRoleId) {
    mSgRoleId = sgRoleId;
 };
 exports.setSgUserId = function (sgUserId) {
    mSgUserId = sgUserId;
 };
 
 // You're returning an object with property values set above
 exports.getUserData = function () {
     return {
            sgAppSession: mSgAppSession,
            sgMenuId: mSgMenuId,
            sgOrgId: mSgOrgId,
            sgRoleId: mSgRoleId,
            sgUserId: mSgUserId
     };
 };