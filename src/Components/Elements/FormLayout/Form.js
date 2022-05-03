import React from 'react';
import {
    TextBox,
    Separator,
    TextArea,
    ContentEditableDiv,
    FormFileUpload,
    SimpleCheckbox,
    ToggleButton,
    // Calender,
    // DatePickerCalender,
    // FormRichTextEditor,
    // Slider,
    // DateRange,
    // TextandSpeechRecognition,
    // Dynamicdropdown,
    Multiselect,
    ImageCheckbox,
    PhoneInput2,
    // // ImageRadio,
    // ImageAnnotation,
  } from "./FormElement";

function Form(params) {
    return(
        <div className="SidebarComponents FormLayout">

             <div className="mb-3">
              <TextBox />
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
            <div className="mb-3">
              <ImageCheckbox />
            </div>
            <div className="mb-3">
              <PhoneInput2 />
            </div>
            <div className="mb-3">
              <Multiselect />
            </div>
        </div>
    )
}

export default Form;