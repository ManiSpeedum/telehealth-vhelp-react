import {
  initializeSuggestus,
  setMenuId,
  setVisitId,
  setPatientId,
  setUserId,
  setRoleId,
  setOrgId,
  callSuggestusAPI,
} from "../Suggestus_client_lib/suggestusClient.js";
// import { initializeSuggestus } from "../suggestus";
import suggestusConfig from "../Suggestus_client_lib/suggestus_client_config.js";
// console.log(initializeSuggestus);
// console.log(suggestusClient);

export async function suggestUsInitialize() {
  try {
    var result = await initializeSuggestus(suggestusConfig);
    return result;
  } catch (e) {
    console.log("e-- **", e);
  }
}

export async function suggestUsAPICall(
  process_id,
  request_array,
  application_ver
) {
  try {
    var result = await callSuggestusAPI(
      process_id,
      request_array,
      application_ver
    );
    
    return result;
  } catch (e) {
    console.log("e-- **", e);
   
  }
}

export function orgID(id) {
  try {
    setOrgId(id);
  } catch (e) {
    console.log("e-- **", e);
  }
}

export function menuID(id) {
  try {
    setMenuId(id);
  } catch (e) {
    console.log("e-- **", e);
  }
}
export function visitID(id) {
  try {
    setVisitId(id);
  } catch (e) {
    console.log("e-- **", e);
  }
}
export function patientID(id) {
  try {
    setPatientId(id);
  } catch (e) {
    console.log("e-- **", e);
  }
}

export function userID(id) {
  try {
    setUserId(id);
  } catch (e) {
    console.log("e-- **", e);
  }
}

export function roleID(id) {
  try {
    setRoleId(id);
  } catch (e) {
    console.log("e-- **", e);
  }
}

// export default suggestUsInitialize;
