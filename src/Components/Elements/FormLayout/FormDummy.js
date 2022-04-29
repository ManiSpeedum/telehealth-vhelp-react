
        import React from "react";
import {
  TextBox,
  ButtonRadio,
  Separator,
  TextArea,
  ContentEditableDiv,
  FormFileUpload,
  SimpleCheckbox,
  ToggleButton,

  

  Slider,

  TextandSpeechRecognition,

  Multiselect,
 

  // ImageRadio,
  ImageAnnotation,
} from "./FormElementDummy";

const FormDummy = (props) => {

  // comment
  // if (typeof props.resData !== "undefined" && props.resData.length !== 0) {
  //   const formData = props.resData;
  //   console.log("formData", formData);
  //   console.log(formData.fb_mst_form_section_table);
    // comment remove

    return (
        <div className="SidebarComponents FormLayout">
          <form>

          <div className="mb-3">
              <TextBox />
            </div>
            <div className="mb-3">
              <ButtonRadio />
            </div>
            <div className="mb-3">
              <Separator />
            </div>
            <div className="mb-3">
              <TextArea />
            </div>
       <div className="mb-3">
              <ContentEditableDiv />
            </div>
            <div className="mb-3">
              <FormFileUpload />
            </div>
            <div className="mb-3">
              <SimpleCheckbox />
            </div>
            <div className="mb-3">
              <ToggleButton />
            </div>
            
            {/* <div className="mb-3">
              <DatePickerCalender />
            </div>
            <div className="mb-3">
              <FormRichTextEditor />
            </div> */}
            <div className="mb-3">
              <Slider />
            </div>
            {/* <div className="mb-3">
              <DateRange />
            </div>
            <div className="mb-3"><TextandSpeechRecognition/></div>
            <div className="mb-3">
              <Dynamicdropdown />
            </div> */}
            <div className="mb-3">
              <Multiselect />
            </div>
            {/* <div className="mb-3">
              <ImageCheckbox />
            </div> */}
          
            {/* <div className="mb-3">
              <ImageRadio />
            </div> */}
            {/* <div className="mb-3">
              <ImageAnnotation />
            </div> */}
          </form>
        </div>

      )}


      // sgshshhshshsh
      // <div>
      //   <div className="container FormLayout">
      //     {formData.fb_mst_form_section_table.map((data) => {
      //       return (
      //         <div>
      //           <div className="ma-title formHeadings">
      //             {" "}
      //             {data.section_label}
      //           </div>

      //           {/* {data.fb_mst_fields_table.map((i)=>{
      //             return(
      //               <div>{i.field_label}</div>
      //             )
      //           })} */}

      //           <div className="formSubHeadingContainer">
      //             {data.fb_mst_form_field_mapping_table.map(
      //               (datalabel, index) => {
      //                 let filedName=datalabel.ff_id+"_"+datalabel.ff_form_id  +"__"+datalabel.ff_field_id;
      //                 let fieldIdd=datalabel.ff_id+"_"+datalabel.ff_form_id+"__"+datalabel.ff_field_id;
      //                 // let disabledAttr='';
      //                 // let labelClass='';
      //                 // let divClass='';
      //                 // if(con){
      //                 //   disabledAttr='disabled="disabled"';
      //                 // }

                      


      //                 return (
      //                   <div>
              
      //                     {datalabel.fb_mst_fields_table
      //                       && (
      //                       <div>
      //                         <div>
      //                           {" "}
      //                           <div className="formSubHeading">
      //                             {datalabel.fb_mst_fields_table.field_label}
      //                           </div>
      //                         </div>

      //                         <div className="formInputFieldsData">
      //                           <div>
      //                             {datalabel.fb_mst_fields_table
      //                               .field_control_type === "text_box" && (
      //                               <TextBox datalabel={datalabel} name={filedName} id={fieldIdd}/>
      //                             )}
      //                           </div>
      //                           <div>
      //                             {datalabel.fb_mst_fields_table
      //                               .field_control_type === "dob" && (
      //                               <Calender datalabel={datalabel} name={filedName} id={fieldIdd}/>
      //                             )}
      //                           </div>
      //                           <div>
      //                             {datalabel.fb_mst_fields_table
      //                               .field_control_type ===
      //                               "dynamic_dropdown" && <Dynamicdropdown name={filedName} id={fieldIdd} />}
      //                           </div>
      //                           <div>
      //                             {datalabel.fb_mst_fields_table
      //                               .field_control_type === "mobile_number" && (
      //                               <PhoneInput2 datalabel={datalabel} name={filedName} id={fieldIdd} />
      //                             )}
      //                           </div>
      //                           <div>
      //                             {datalabel.fb_mst_fields_table
      //                               .field_control_type === "date_picker" && (
      //                               <Calender datalabel={datalabel} name={filedName} id={fieldIdd} />
      //                             )}
      //                           </div>
      //                           <div>
      //                             {datalabel.fb_mst_fields_table
      //                               .field_control_type ===
      //                               "button_checkbox_grp" && <ImageCheckbox datalabel={datalabel} name={filedName} id={fieldIdd} />}
      //                           </div>

      //                           <div>
      //                             {datalabel.fb_mst_fields_table
      //                               .field_control_type ===
      //                               "static_dropdown" && <Dynamicdropdown datalabel={datalabel} name={filedName} id={fieldIdd} />}
      //                           </div>
      //                         </div>
      //                       </div>
      //                     )}
      //                   </div>
      //                 );
      //               }
      //             )}
      //           </div>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>
      // coment remove

      // )
//     );
//   }
// };
// }

export default FormDummy;

 