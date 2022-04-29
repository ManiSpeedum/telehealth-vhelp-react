/**
 * @author Speedum Team
 * @copyright Copyright (c) 2022 Speedum (http://speedum.co.in/)
 * @package Suggestus Session Model
 */

 let mAi_code="";
 let mDevice_type="";
 let mDevice_unique_id="";
 let mDevice_os="";
 let mDevice_os_version="";
 let mDevice_ip="";
 
 // Make sure your argument name doesn't conflict with variables set above
 exports.setai_code = function (ai_code) {
    mAi_code = ai_code;
 };
 
 exports.setdevice_type = function (device_type) {
    mDevice_type = device_type;
 };
 
 exports.setdevice_unique_id = function (device_unique_id) {
    mDevice_unique_id = device_unique_id;
 };
 
 exports.setdevice_os = function (device_os) {
    mDevice_os = device_os;
 };
 
 exports.setdevice_os_version = function (device_os_version) {
    mDevice_os_version = device_os_version;
 };
 
 exports.setdevice_ip = function (device_ip) {
    mDevice_ip = device_ip;
 };
 
 // You're returning an object with property values set above
 exports.getSession_Response = function () {
     return {
         ai_code: mAi_code,
         device_type: mDevice_type,
         device_unique_id: mDevice_unique_id,
         device_os: mDevice_os,
         device_os_version: mDevice_os_version,
         device_ip: mDevice_ip
     };
 };