

// @ts-ignore
import  {suggestUsAPICall}  from "./suggestApi.js";






// async function initSuggestUs() {
//     const result = await suggestUsInitialize();

//     console.log('result', result)

//     if (result?.returnCode) {
//         orgID("1");
//         // const response = await suggestUsAPICall(
//         //     "xcelecomconfig_get_mst_ecom_application_config",
//         //     {},
//         //     "1.0"
//         // );

//         // console.log("response", response);

//         // if (response?.returnCode) {
//         //     console.log("Data", response?.returnData);
//         // } else {
//         //     console.log("response message", response?.msg);
//         // }
//     } else {
//         console.log("Initialize -- error - ", result?.return_Error);
//     }
// }

// export default initSuggestUs;


export async function CallAPI(type, payload) {
  
    const response = await suggestUsAPICall(
        type,
        { ...payload },
        "1.0"
    );
    return response;
}

