import React, { useEffect, useState } from "react";
import Form from "./Form";
import Config from "../../Suggestus_client_lib/config/processmaster";
import { CallAPI } from "../../suggest-us/callSuggest";
// import md5 from "md5";


function FormAPICall() {

  const [resData, setResData] = useState();
  // const [isPageLoad, setIsPageLoad] = useState(0);

  //  console.log(Config)

  // useEffect(()=>{
  //   CallAPI(Config.SGCONFIG_GET_FROM_LAYOUT_JSON,{
  //     p_form_id:"6",
  //   }).then((res)=>{
  //     console.log(res);
  //     setResData(res);
  //   })
  // },[])

  useEffect(() => {
    CallAPI(Config.SGCONFIG_GET_FROM_LAYOUT_JSON, {
      p_form_code: "F0004",
    }).then((res) => {
      //  console.log(JSON.parse(res.returnData[0].form_layout));
      //  setResData({
      //   id: JSON.parse(res.returnData[0].form_layout).form_id,
      //   code: JSON.parse(res.returnData[0].form_layout).form_code
      //  })

      console.log(JSON.parse(res.returnData[0].form_layout));
     
      setResData(JSON.parse(res.returnData[0].form_layout));

    });
  }, []);

  // useEffect(() => {
  //   CallAPI(Config.SG_CONFIG_VALIDATE_USER, {
  //     p_username: "svirk",
  //     p_password: md5("Speedum@1"),
  //   }).then((res) => {
  //     console.log(res.returnData[0]);
  //     console.log(res);
  //   });
  // }, []);
  //
  console.log(resData);
 
      return (
    <div>
  
               <div className="container SidebarComponents FormLayout">
         <div className="row">
         
              <Form resData={resData}/>
         
         </div>
      </div>
    
    </div>
  );
}
    
  
     
export default FormAPICall;
