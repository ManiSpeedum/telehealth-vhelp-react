/**
 * @author Speedum Team
 * @copyright Copyright (c) 2022 Speedum (http://speedum.co.in/)
 * @package Suggestus Session Model
 */

 let mSgPatientId="";
 let mSgVisitId="";
 
 // Make sure your argument name doesn't conflict with variables set above
 exports.setSgPatientId = function (sgPatientId) {
    mSgPatientId = sgPatientId;
 };
 
 exports.setSgVisitId = function (sgVisitId) {
    mSgVisitId = sgVisitId;
 };
 
 // You're returning an object with property values set above
 exports.getMetaData = function () {
     return {
        sgPatientId: mSgPatientId,
        sgVisitId: mSgVisitId 
     };
 };