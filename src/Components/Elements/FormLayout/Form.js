import React from "react";
// import { UserContext } from "./index";
import {
  TextBox,
  // Separator,
  // TextArea,
  // ContentEditableDiv,
  // FormFileUpload,
  // SimpleCheckbox,
  // ToggleButton,

  
  // FormRichTextEditor,
  // Slider,
 
  // TextandSpeechRecognition,
  Dynamicdropdown,
  // Multiselect,
  ImageCheckbox,
  PhoneInput2,
  // ImageRadio,
  // ImageAnnotation,
} from "./FormElement";
// import FormAPICall from "./index";

const Form = (props) => {
  if (typeof props.resData !== "undefined" && props.resData.length !== 0) {
    const formData = props.resData;
    console.log("formData", formData);
    console.log(formData.fb_mst_form_section_table);

    return (
      <div>
        <div className="container FormLayout">
          {formData.fb_mst_form_section_table.map((data) => {
            return (
              <div>
                <div className="ma-title formHeadings">
                  {" "}
                  {data.section_label}
                </div>

                <div className="formSubHeadingContainer">
                  {data.fb_mst_form_field_mapping_table.map(
                    (datalabel, index) => {
                      let filedName =
                        datalabel.ff_id +
                        "_" +
                        datalabel.ff_form_id +
                        "__" +
                        datalabel.ff_field_id;
                      let fieldIdd =
                        datalabel.ff_id +
                        "_" +
                        datalabel.ff_form_id +
                        "__" +
                        datalabel.ff_field_id;
                    
                      let activeStatus = "";
                      if (datalabel.ff_active_status === "Y") {
                        activeStatus = true;
                      } else activeStatus = false;

                      let mandatory_flag = "";
                      if (datalabel.ff_mandatory_flag === "N") {
                        mandatory_flag = false;
                      } else mandatory_flag = true;

                      let read_only_flag = "";
                      if (datalabel.ff_read_only_flag === "Y") {
                        read_only_flag = true;
                      } else read_only_flag = false;

                      let numeric_only_flag = "";
                      if (datalabel.numeric_only_flag === "N") {
                        numeric_only_flag = false;
                      } else numeric_only_flag = true;

                      let vertical_alignment = "";
                      if (datalabel.ff_vertical_alignment === "T") {
                        vertical_alignment = true;
                      } else vertical_alignment = false;

                      let horizontal_alignment = "";
                      if (datalabel.ff_horizontal_alignment === "L") {
                        horizontal_alignment = true;
                      } else horizontal_alignment = false;

                      let custom_label_for_survey = "";
                      if(datalabel.ff_custom_label_for_survey == null){
                        custom_label_for_survey = false;
                      }
                      else custom_label_for_survey = true;

                      let enabled_for_survey_flag = '';
                      if(datalabel.ff_enabled_for_survey_flag ==  "Y"){
                        enabled_for_survey_flag = true;
                      }
                      else enabled_for_survey_flag =false;
                     


                      return (
                        <div>
                          {datalabel.fb_mst_fields_table && (
                            <div>
                              <div>
                                {" "}
                                <div className="formSubHeading">
                                  {datalabel.fb_mst_fields_table.field_label}
                                </div>
                              </div>

                              <div className="formInputFieldsData">
                                <div>
                                  {datalabel.fb_mst_fields_table
                                    .field_control_type === "text_box" && (
                                    <TextBox
                                      datalabel={datalabel}
                                      name={filedName}
                                      id={fieldIdd}
                                      disabled={activeStatus}
                                      mandatory_flag={mandatory_flag}
                                      read_only_flag={read_only_flag}
                                      numeric_only_flag={numeric_only_flag}
                                      vertical_alignment={vertical_alignment}
                                      horizontal_alignment ={ horizontal_alignment }
                                      custom_label_for_survey={custom_label_for_survey}
                                      enabled_for_survey_flag={enabled_for_survey_flag}
                                    />
                                  )}
                                </div>
                                <div>
                                 
                                </div>
                                <div>
                                  {datalabel.fb_mst_fields_table
                                    .field_control_type ===
                                    "dynamic_dropdown" && (
                                    <Dynamicdropdown
                                    datalabel={datalabel}
                                    name={filedName}
                                    id={fieldIdd}
                                    disabled={activeStatus}
                                    mandatory_flag={mandatory_flag}
                                    read_only_flag={read_only_flag}
                                    numeric_only_flag={numeric_only_flag}
                                    vertical_alignment={vertical_alignment}
                                    horizontal_alignment ={ horizontal_alignment }
                                    />
                                  )}
                                </div>
                                <div>
                                  {/* {datalabel.fb_mst_fields_table
                                    .field_control_type === "mobile_number" && (
                                    <PhoneInput2
                                    datalabel={datalabel}
                                    name={filedName}
                                    id={fieldIdd}
                                    disabled={activeStatus}
                                    mandatory_flag={mandatory_flag}
                                    read_only_flag={read_only_flag}
                                    numeric_only_flag={numeric_only_flag}
                                    vertical_alignment={vertical_alignment}
                                    horizontal_alignment ={ horizontal_alignment }
                                    />
                                  )} */}
                                </div>
                                <div>
                                
                                </div>
                                <div>
                                  {/* {datalabel.fb_mst_fields_table
                                    .field_control_type ===
                                    "button_checkbox_grp" && (
                                    <ImageCheckbox
                                    datalabel={datalabel}
                                    name={filedName}
                                    id={fieldIdd}
                                    disabled={activeStatus}
                                    mandatory_flag={mandatory_flag}
                                    read_only_flag={read_only_flag}
                                    numeric_only_flag={numeric_only_flag}
                                    vertical_alignment={vertical_alignment}
                                    horizontal_alignment ={ horizontal_alignment }
                                    />
                                  )} */}
                                </div>

                                <div>
                                  {datalabel.fb_mst_fields_table
                                    .field_control_type ===
                                    "static_dropdown" && (
                                    <Dynamicdropdown
                                    datalabel={datalabel}
                                    name={filedName}
                                    id={fieldIdd}
                                    disabled={activeStatus}
                                    mandatory_flag={mandatory_flag}
                                    read_only_flag={read_only_flag}
                                    numeric_only_flag={numeric_only_flag}
                                    vertical_alignment={vertical_alignment}
                                    horizontal_alignment ={ horizontal_alignment }
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    );
  }
};


export default Form;
