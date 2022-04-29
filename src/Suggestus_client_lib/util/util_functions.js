/**
 * @author Speedum Team
 * @copyright Copyright (c) 2022 Speedum (http://speedum.co.in/)
 * @package Until functions
 */
//  'use strict';
const store = require('store');
const moment = require('moment');
const meta_data_body=require("./../models/meta_data_model");
const other_data_body=require("./../models/other_data_model");
const user_data_body=require("./../models/user_data_model");
const sg_API_model=require("./../models/sg_API_model");
const mGlobal_vars=require("./../config/global_variables");


// print console in full code
function printConsole(message){
   if(process.env.PRINT_CONSOLE==="1"){
    console.log(message);
   } 
}

/*
* check if value is null or undefined
*/
function chechIfValueIsNull(value) {
    if(value===null || value===undefined){
      value="";
    }
   return value;
}
/*
* check if key contains in the array or not
*/
async function findIfKeyExistsInArray(headerArray,global_array) {
      if(headerArray!==null){
            for (const array_value of global_array) {
                 let fetched_value=headerArray.header(array_value);
                 if(fetched_value!==undefined){
                    return fetched_value;
                  //   break;
                 }
            }       
      }
      return undefined;
}

/*
* Check if value contains in array
*/
async function checkIfValueContainInArray(global_array,find_value) {
   for (const array_value of global_array) {
         if(array_value===find_value){
            return true;
            // break;
         }
   }       
   return false;
}

/*
*  get time in micro sec
*/
function getMicroTime(){
   var hrTime = process.hrtime();
   return hrTime[0] * 1000000 + hrTime[1] / 1000;
}

/*
*  function is used to save data in local memory for further usage
*/
function saveDataFromLocalStorage(key,value){
   store.set(key,value);
}
/*
*  function is used to fetch data from local storage
*/
function fetchDataFromLocalStorage(key) {
   return store.get(key);
}

/*
*  function will convert utc datetime to local datetime
*/
function convertUTCTimeToLocal(SessionExpiry) {
   try {
       /*converting UTC time to local device time*/
       var convert_local = convertUTCDateToLocalDate(moment(SessionExpiry, 'YYYY-MM-DD HH:mm:ss').toDate());
       SessionExpiry =toTimestamp(convert_local);
       SessionExpiry = new Date(SessionExpiry*1000);
       /*device current date time*/
       var targetTime = new Date();
       targetTime = moment(targetTime).subtract(5, 'minutes').toDate();
       /*checking is session time has expired or not*/
       if (SessionExpiry <= targetTime) {/*means time has expired*/
           return true;
       }else{
           return false;
       }  
   } catch (error) {
      return true;
   }
}

function toTimestamp(strDate){
   var datum = Date.parse(strDate);
   return datum/1000;
}
/*converting server time to local time*/
function convertUTCDateToLocalDate(date) {
   var newDate = new Date(date.getTime()-date.getTimezoneOffset()*60*1000);
   // var offset = date.getTimezoneOffset() / 60;
   // var hours = date.getHours();

   // newDate.setHours(hours - offset);

   return newDate;   
}

/*
*  function will create api body
*/
function createAPIBody(env,app_ver,process_id,dataJSON) {
   try {
      let other_data=createOtherdata(app_ver);
      let user_data=createUserdata();
      let meta_data=createMetadata();

      sg_API_model.setDataJson(dataJSON);
      sg_API_model.setEnvironment(env);
      sg_API_model.setMeta_data(meta_data);
      sg_API_model.setOther_data(other_data);
      sg_API_model.setProcess_id(process_id);
      sg_API_model.setUser_data(user_data);
      return sg_API_model.getSession_Response();
   } catch (error) {
       console.log("Exception : createAPIBody-- Error--"+error.message);
       return null;
   }
}

/*
*  function will create meta data for the API body
*/ 
function createMetadata() {
  try {
      // create meta object
      let patientId=chechIfValueIsNull(fetchDataFromLocalStorage("sg_patientId"));
      let visitId=chechIfValueIsNull(fetchDataFromLocalStorage("sg_visitId"));
      meta_data_body.setSgPatientId(patientId);
      meta_data_body.setSgVisitId(visitId);
      return meta_data_body.getMetaData();
 } catch (error) {
     console.log("Exception : createMetadata-- Error--"+error.message);
     return null;
 }
}
/*
*  function will create other data for the API body
*/
function createOtherdata(app_ver) {
  try {
      // create other object
      other_data_body.setRemoteAddr("");//ip.address()
      other_data_body.setSgAppPlatform(mGlobal_vars.DEVICE_TYPE);
      other_data_body.setSgAppVersion(app_ver);
      return other_data_body.getOtherData();
 } catch (error) {
     console.log("Exception : createOtherdata-- Error--"+error.message);
     return null;
 }
}

/*
*  function will create user data for the API body
*/
function createUserdata() {
  try {
      let session_token=chechIfValueIsNull(fetchDataFromLocalStorage("SessionToken"));
      let menuId=chechIfValueIsNull(fetchDataFromLocalStorage("sg_menuId"));
      let orgId=chechIfValueIsNull(fetchDataFromLocalStorage("sg_org_id"));
      let roleId=chechIfValueIsNull(fetchDataFromLocalStorage("sg_roleId"));
      let userId=chechIfValueIsNull(fetchDataFromLocalStorage("sg_userId"));
      // create user object
      user_data_body.setSgAppSession(session_token);
      user_data_body.setSgMenuId(menuId);
      user_data_body.setSgOrgId(orgId);
      user_data_body.setSgRoleId(roleId);
      user_data_body.setSgUserId(userId);
      return user_data_body.getUserData();
 } catch (error) {
     console.log("Exception : createUserdata-- Error--"+error.message);
     return null;
 }
}

module.exports.createAPIBody = createAPIBody;
module.exports.convertUTCTimeToLocal = convertUTCTimeToLocal;
module.exports.saveDataFromLocalStorage = saveDataFromLocalStorage;
module.exports.fetchDataFromLocalStorage = fetchDataFromLocalStorage;
module.exports.chechIfValueIsNull = chechIfValueIsNull;
module.exports.getMicroTime = getMicroTime;
module.exports.printConsole = printConsole;
module.exports.findIfKeyExistsInArray = findIfKeyExistsInArray;
module.exports.checkIfValueContainInArray = checkIfValueContainInArray;