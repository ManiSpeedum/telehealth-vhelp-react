// require('dotenv').config({path:'config/.env'});
const axios = require("axios");
// body parser is used for parsing json received in request
const sg_session_body = require("./models/sg_session_model");
const mGlobal_vars = require("./config/global_variables");
const mMessages_obj = require("./config/error_messages");
const mUtil_obj = require("./util/util_functions");
//const crypto = require("crypto");
// var os = require('os');
// var suggestusClientConfig;
import  {suggestusClientConfig} from '../Suggestus_client_lib/suggestus_client_config'
/*
 * this function will create suggestus session
 */
async function createSuggestusSession() {
  try {
    let url = suggestusClientConfig.SUGGESTUS_INTERNAL_URL;
    let env = suggestusClientConfig.SUGGESTUS_EVN;
    let ai_code = suggestusClientConfig.SUGGESTUS_AI_CODE;
    const uuid = mUtil_obj.fetchDataFromLocalStorage("device_unique_id");
    // create session body
    sg_session_body.setai_code(ai_code);
    sg_session_body.setdevice_type(mGlobal_vars.DEVICE_TYPE);
    sg_session_body.setdevice_unique_id(uuid);
    sg_session_body.setdevice_os(""); //os.type()
    sg_session_body.setdevice_os_version(""); //os.release()
    sg_session_body.setdevice_ip(""); //ip.address()
    const session_body = sg_session_body.getSession_Response();
    // console.log(sg_session_body.getSession_Response());
    // create session header
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        sgIntProcess: mGlobal_vars.SESSION_HEADER_VALUE,
        sgIntEnvironment: env,
      },
    };
    // now hit API and create Session print on suggestus
    const response = await axios.post(url, session_body, axiosConfig);
    if (response.status === 200) {
      const return_AppIdentifier = response.data.return_AppIdentifier;
      const return_LicenseIdentifier = response.data.return_AppIdentifier;
      if (
        return_AppIdentifier === "true" &&
        return_LicenseIdentifier === "true"
      ) {
        //save session token and expiry date
        mUtil_obj.saveDataFromLocalStorage(
          "SessionToken",
          response.data.return_SessionToken
        );
        mUtil_obj.saveDataFromLocalStorage(
          "SessionExpiry",
          response.data.return_SessionExpiry
        );
        //Add retun code
        response.data.returnCode = true;
        delete response.data.return_AppIdentifier;
        delete response.data.return_LicenseIdentifier;
        delete response.data.return_SessionToken;
        delete response.data.return_SessionExpiry;
        return response.data;
      } else {
        if (return_AppIdentifier === "false") {
          response.data.returnCode = false;
          delete response.data.return_AppIdentifier;
          delete response.data.return_LicenseIdentifier;
          delete response.data.return_SessionToken;
          delete response.data.return_SessionExpiry;
        }
        if (return_LicenseIdentifier === "false") {
          response.data.returnCode = false;
          delete response.data.return_AppIdentifier;
          delete response.data.return_LicenseIdentifier;
          delete response.data.return_SessionToken;
          delete response.data.return_SessionExpiry;
        }
        return response.data;
      }
    } else {
      console.log("createSuggestusSession : while Creating Suggestus Session");
      // console.log(response);
      return {
        msg: "Error146 while Creating Suggestus Foot Print",
        returnCode: false,
      };
    }
  } catch (error) {
    console.log("Exception : createSuggestusSession-- Error--" + error.message);
    return {
      msg: "Error85 while initializing Suggestus: " + error.message,
      returnCode: false,
    };
  }
}
/*
 * this function will create suggestus Foot print
 */
async function createSuggestusFootPrint() {
  try {
    let url = suggestusClientConfig.SUGGESTUS_INTERNAL_URL;
    let env = suggestusClientConfig.SUGGESTUS_EVN;
    let ai_code = suggestusClientConfig.SUGGESTUS_AI_CODE;
    // create foot print body
    //const uuid = crypto.randomBytes(8).toString("hex");
    const uuid = Math.random().toString().slice(2,11);
    mUtil_obj.saveDataFromLocalStorage("device_unique_id", uuid);
    // create session body
    sg_session_body.setai_code(ai_code);
    sg_session_body.setdevice_type(mGlobal_vars.DEVICE_TYPE);
    sg_session_body.setdevice_unique_id(uuid);
    sg_session_body.setdevice_os(""); //os.type()
    sg_session_body.setdevice_os_version(""); //os.release()
    sg_session_body.setdevice_ip(""); //ip.address()
    const foot_print_body = sg_session_body.getSession_Response();
    // console.log(sg_session_body.getSession_Response());
    // create session header
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        sgIntProcess: mGlobal_vars.FOOT_PRINT_HEADER_VALUE,
        sgIntEnvironment: env,
      },
    };
    // now hit API and create foot print on suggestus
    const response = await axios.post(url, foot_print_body, axiosConfig);
    if (response.status === 200) {
      const return_AppIdentifier = response.data.return_AppIdentifier;
      const return_LicenseIdentifier = response.data.return_AppIdentifier;
      if (
        return_AppIdentifier === "true" &&
        return_LicenseIdentifier === "true"
      ) {
        // now create device session
        const return_result = await createSuggestusSession();
        return return_result;
      } else {
        if (return_AppIdentifier === "false") {
          response.data.returnCode = false;
          delete response.data.return_AppIdentifier;
          delete response.data.return_LicenseIdentifier;
          delete response.data.return_SessionToken;
          delete response.data.return_SessionExpiry;
        }
        if (return_LicenseIdentifier === "false") {
          response.data.returnCode = false;
          delete response.data.return_AppIdentifier;
          delete response.data.return_LicenseIdentifier;
          delete response.data.return_SessionToken;
          delete response.data.return_SessionExpiry;
        }
        return response.data;
      }
    } else {
      console.log(
        "createSuggestusFootPrint : while Creating Suggestus Foot Print"
      );
      console.log(response);
      return {
        msg: "Error146 while Creating Suggestus Foot Print",
        returnCode: false,
      };
    }
  } catch (error) {
    console.log(
      "Exception : createSuggestusFootPrint-- Error--" + error.message
    );
    return {
      msg: "Error145 while initializing Suggestus: " + error.message,
      returnCode: false,
    };
  }
}

/*
 * function will init the suggestus by creating Foot print and session token
 */
export async function initializeSuggestus(config_path) {
  console.log(config_path);
  try {
    const suggestusClientConfig = config_path; // require(config_path);
    console.log(suggestusClientConfig);
    const response_result = await createSuggestusFootPrint();
    return response_result;
  } catch (error) {
    console.log("Exception : initializeSuggestus-- Error--" + error.message);
    return {
      msg: "Error158 while initializing Suggestus: " + error.message,
      returnCode: false,
    };
  }
}

/*
 * function will be called to hit the API and get result back
 */
export async function callSuggestusAPI(process_id, dataJSON, app_ver) {
      
  try {

    if (process_id !== null && process_id !== undefined && process_id !== "") {
      let api_url = suggestusClientConfig.SUGGESTUS_ULTRA_URL;
      let int_url = suggestusClientConfig.SUGGESTUS_INTERNAL_URL;
      let env = suggestusClientConfig.SUGGESTUS_EVN;
      let ai_code = suggestusClientConfig.SUGGESTUS_AI_CODE;

     
      let session_token = mUtil_obj.fetchDataFromLocalStorage("SessionToken");
      let sessionExpiry = mUtil_obj.fetchDataFromLocalStorage("SessionExpiry");
  

      // check if session has expired or not
      if (mUtil_obj.convertUTCTimeToLocal(sessionExpiry)) {
        // means session has expired
        //now renewing the session
        await createSuggestusFootPrint(int_url, env, ai_code);
        session_token = mUtil_obj.fetchDataFromLocalStorage("SessionToken");
        sessionExpiry = mUtil_obj.fetchDataFromLocalStorage("SessionExpiry");
      }

      // create API body
      let request_body = mUtil_obj.createAPIBody(
        env,
        app_ver,
        process_id,
        dataJSON
      );
      // console.log(JSON.stringify(request_body));
      // create session header
      let axiosConfig = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Sgsessiontoken: session_token,
        },
      };
      // console.log(api_url);
      // console.log(JSON.stringify(request_body));
      // now hit API and create foot print on suggestus
      const response = await axios.post(
        api_url,
        JSON.stringify(request_body),
        axiosConfig
      );
     
 
      if (response.status === 200) {
        let return_LicenseIdentifier = response.data.return_LicenseIdentifier;
        let return_SessionIdentifier = response.data.return_SessionIdentifier;
        let return_AppIdentifier = response.data.return_AppIdentifier;
        // check session, licence and app identifier if false then return back the reposne
        if (return_SessionIdentifier === "false") {
          //now renewing the session
          await createSuggestusFootPrint(int_url, env, ai_code);
          session_token = mUtil_obj.fetchDataFromLocalStorage("SessionToken");
          sessionExpiry = mUtil_obj.fetchDataFromLocalStorage("SessionExpiry");
          // now call the API again
          let final_result = await callSuggestusAPI(
            process_id,
            dataJSON,
            app_ver
          );
          return final_result;
        
        }
        if (return_LicenseIdentifier === "false") {
          return {
            msg: mMessages_obj.LICENSEIDENTIFIER_BLANK_ERROR,
            returnCode: false,
          };
        }
        if (return_AppIdentifier === "false") {
          return {
            msg: mMessages_obj.APPIDENTIFIER_BLANK_ERROR,
            returnCode: false,
          };
        }
        // above all are true now we can check the response further for message and return code
        let returnCode = response.data.returnCode.toLowerCase();
        let return_msg = response.data.message;
        let return_error_msg = response.data.error;
        let return_failure_msg = response.data.failureMessage;
        let return_failureMessageIsCode = response.data.failureMessageIsCode;
        return_failureMessageIsCode = return_failureMessageIsCode.toLowerCase();
        let return_messageIsCode = response.data.messageIsCode;
        return_messageIsCode = return_messageIsCode.toLowerCase();
        // remove unwanted tags
        delete response.data.returnCode;
        delete response.data.return_AppIdentifier;
        delete response.data.return_LicenseIdentifier;
        delete response.data.return_SessionIdentifier;
        delete response.data.failureMessage;
        delete response.data.failureMessageIsCode;
        delete response.data.message;
        delete response.data.messageIsCode;
        delete response.data.error;
        //check if return code is true or false
        if (returnCode === "true") {
          if (return_messageIsCode === "true") {
            if (return_msg === "<blank>") {
                  response.data.msg = "";
            } else if (return_msg === "") {
                  response.data.msg = suggestusClientConfig.MSG_DEFAULT_SUCCESS;
            } else if (return_msg !== "") {
              let decoded_msg = suggestusClientConfig[return_msg];
              if (decoded_msg !== undefined) {
                  response.data.msg = decoded_msg;
              } else {
                  response.data.msg = suggestusClientConfig.MSG_DEFAULT_SUCCESS;
              }
            }
          } else if (return_messageIsCode === "false") {
            if (return_msg === "<blank>") {
                response.data.msg = "";
            } else if (return_msg === "") {
                response.data.msg = suggestusClientConfig.MSG_DEFAULT_SUCCESS;
            } else if (return_msg !== "") {
              let decoded_msg = suggestusClientConfig[return_msg];
              if (decoded_msg !== undefined) {
                  response.data.msg = decoded_msg;
              } else {
                  response.data.msg = suggestusClientConfig.MSG_DEFAULT_SUCCESS;
              }
            }
          } else {
            if (return_msg === "") {
              response.data.msg = suggestusClientConfig.MSG_DEFAULT_SUCCESS;
            } else {
              response.data.msg = return_msg;
            }
          }
          response.data.returnCode = true;
        } else if (returnCode === "false") {
          if (return_error_msg !== "") {
            response.data.msg = return_error_msg;
          } else if (return_failure_msg !== "") {
            if (return_failureMessageIsCode === "true") {
              if (return_failure_msg === "") {
                response.data.msg = suggestusClientConfig.MSG_DEFAULT_ERR;
              }else if (return_msg !== "") {
                response.data.msg =return_msg;
              } else if (return_failure_msg !== "") {
                let decoded_msg = suggestusClientConfig[return_msg];
                if (decoded_msg !== undefined) {
                    response.data.msg = decoded_msg;
                } else {
                    response.data.msg = suggestusClientConfig.MSG_DEFAULT_ERR;
                }
              }
            } else if (return_failureMessageIsCode === "false") {
              if (return_failure_msg === "") {
                  response.data.msg = suggestusClientConfig.MSG_DEFAULT_ERR;
              }else if (return_msg !== "") {
                response.data.msg =return_msg;
              } else if (return_failure_msg !== "") {
                let decoded_msg = suggestusClientConfig[return_msg];
                if (decoded_msg !== undefined) {
                    response.data.msg = decoded_msg;
                } else {
                    response.data.msg = suggestusClientConfig.MSG_DEFAULT_ERR;
                }
              }
            } else {
              if (return_failureMessageIsCode === "") {
                  response.data.msg = suggestusClientConfig.MSG_DEFAULT_ERR;
              } else {
                  response.data.msg = return_failureMessageIsCode;
              }
            }
          } else if (return_msg !== "") {
                     response.data.msg = return_msg;
          }else if (return_error_msg === "" && return_failure_msg === "") {
                     response.data.msg = suggestusClientConfig.MSG_DEFAULT_ERR;
          }
            response.data.returnCode = false;
        }

        return response.data;
      } else {
        console.log("callSuggestusAPI : Got Error while hitting the API");
        //console.log(response);
        return {
          msg: mMessages_obj.API_NO_RESPONSE_ERROR,
          returnCode: false,
        };
      }
    } else {
      return {
        msg: mMessages_obj.PROCESS_ID_BLANK,
        returnCode: false,
      };
    }
  } catch (error) {
    console.log("Exception : callSuggestusAPI-- Error--" + error.message);
    return {
      msg: "Error167 while hitting Suggestus API : " + error.message,
      returnCode: false,
    };
  }
}

/*
 * this function will save org ID
 */
export function setOrgId(org_id) {
  try {
    mUtil_obj.saveDataFromLocalStorage("sg_org_id", org_id);
  } catch (error) {
    console.log("Exception : setOrgId-- Error--" + error.message);
  }
}
/*
 * this function will save role ID
 */
export function setRoleId(roleId) {
  try {
    mUtil_obj.saveDataFromLocalStorage("sg_roleId", roleId);
  } catch (error) {
    console.log("Exception : setOrgId-- Error--" + error.message);
  }
}
/*
 * this function will save user ID
 */
export function setUserId(userId) {
  try {
    mUtil_obj.saveDataFromLocalStorage("sg_userId", userId);
  } catch (error) {
    console.log("Exception : setOrgId-- Error--" + error.message);
  }
}

/*
 * this function will save patient ID
 */
export function setPatientId(patientId) {
  try {
    mUtil_obj.saveDataFromLocalStorage("sg_patientId", patientId);
  } catch (error) {
    console.log("Exception : setOrgId-- Error--" + error.message);
  }
}
/*
 * this function will save visit ID
 */
export function setVisitId(visitId) {
  try {
    mUtil_obj.saveDataFromLocalStorage("sg_visitId", visitId);
  } catch (error) {
    console.log("Exception : setOrgId-- Error--" + error.message);
  }
}

/*
 * this function will save menu ID
 */
export function setMenuId(menuId) {
  try {
    mUtil_obj.saveDataFromLocalStorage("sg_menuId", menuId);
  } catch (error) {
    console.log("Exception : setOrgId-- Error--" + error.message);
  }
}



