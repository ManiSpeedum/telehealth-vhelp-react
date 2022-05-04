/**
 * @author Speedum Team
 * @copyright Copyright (c) 2022 Speedum (http://speedum.co.in/)
 * @package Suggestus Session Model
 */

 let mRemoteAddr="";
 let mSgAppPlatform="";
 let mSgAppVersion="";
 
 // Make sure your argument name doesn't conflict with variables set above
 exports.setRemoteAddr = function (remoteAddr) {
    mRemoteAddr = remoteAddr;
 };
 
 exports.setSgAppPlatform = function (sgAppPlatform) {
    mSgAppPlatform = sgAppPlatform;
 };
 exports.setSgAppVersion = function (sgAppVersion) {
    mSgAppVersion = sgAppVersion;
 };
 
 
 // You're returning an object with property values set above
 exports.getOtherData = function () {
     return {
        remoteAddr: mRemoteAddr,
        sgAppPlatform: mSgAppPlatform,
        sgAppVersion: mSgAppVersion
     };
 };