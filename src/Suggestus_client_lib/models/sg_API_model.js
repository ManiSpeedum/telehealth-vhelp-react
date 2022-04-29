/**
 * @author Speedum Team
 * @copyright Copyright (c) 2022 Speedum (http://speedum.co.in/)
 * @package Suggestus API Model
 */

 let mDataJson={};
 let mEnvironment="";
 let mMeta_data={};
 let mOther_data={};
 let mProcess_id="";
 let mUser_data={};
 
 // Make sure your argument name doesn't conflict with variables set above
 exports.setDataJson = function (dataJson) {
   mDataJson = dataJson;
 };
 
 exports.setEnvironment = function (environment) {
   mEnvironment = environment;
 };
 
 exports.setMeta_data = function (meta_data) {
   mMeta_data = meta_data;
 };
 
 exports.setOther_data = function (other_data) {
   mOther_data = other_data;
 };
 
 exports.setProcess_id = function (process_id) {
   mProcess_id = process_id;
 };
 
 exports.setUser_data = function (user_data) {
   mUser_data = user_data;
 };
 
 // You're returning an object with property values set above
 exports.getSession_Response = function () {
     return {
         dataJSON: mDataJson,
         environment: mEnvironment,
         meta_data: mMeta_data,
         other_data: mOther_data,
         process_id: mProcess_id,
         user_data: mUser_data
     };
 };