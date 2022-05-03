import React,{useState} from 'react';
import ImagePicker from "react-image-picker";
import img1 from "../../../assets/imagepick.png";
import img2 from "../../../assets/imagepick.png";
import img3 from "../../../assets/imagepick.png";
import "react-image-picker/dist/index.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";

export const TextBox = (props) => {
    console.log(props);
    const [textBox, setTextBox] = useState("");
    console.log(textBox);
  
    const onChangeTextBox = (e) => {
      setTextBox(e.target.value);
    };
  
    return (
      <div className="form-group">
        <input
          type="text"
          // name="textBox"
          name={props.filedName}
          id={props.fieldIdd}
          value={textBox}
          className="form-control"
          // id="usr"
          onChange={onChangeTextBox}
        />
      </div>
    );
  };

  export const Separator = (props) =>{
    return(
      <div>
        <hr class="solid"/>
      </div>
    )
  }

  export const TextArea = (props) => {
    const [textArea, setTextArea] = useState("");
    console.log(textArea);
  
    const onChangeTextArea = (e) => {
      setTextArea(e.target.value);
    };
  
    return (
      <div className="form-group">
         <label for="comment">Comment:</label>
    <textarea class="form-control"   name={props.filedName} 
     id={props.fieldIdd}
      rows="5" id="comment"  value={textArea}  onChange={onChangeTextArea}></textarea>
      </div>
    );
  };

  export const ContentEditableDiv = () =>{
    return(
      <div
    contentEditable='true'
    onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
  >
  Text inside div
  </div>
    )
  }

  export const FormFileUpload = (props) => {
    const [file, setFile] = useState("");
    // console.log(file);
    const [isValidFile, setIsValidFile] = useState(true);
  
    const handleChangeFileUpload = (e) => {
      setFile(e.target.files[0]);
      const files = e.target.files[0].type;
      console.log(files);
      const validExtensions = ["jpeg", "jpg"];
      const fileExtensions = files.split("/")[1];
      const isValidFileUploaded = validExtensions.includes(fileExtensions);
      console.log(isValidFileUploaded);
      if (isValidFileUploaded === true) {
        setIsValidFile(true);
        console.log("file is valid");
      } else {
        setIsValidFile(!isValidFile);
        console.log("file is invalid");
      }
    };
  
    return (
      <div>
        <input
          className="form-control form-control-lg"
          id="formFileLg"
          type="file"
          // name="file"
          name={props.filedName}
          id={props.fieldIdd}
          onChange={handleChangeFileUpload}
        ></input>
        {isValidFile ? null : (
          <div className="row">
            <div className="col-sm-4 FormFileUploadValidation">
              Invalid extension file
            </div>
          </div>
        )}
      </div>
    );
  };

  export const SimpleCheckbox = (props) => {
    const [checked, setChecked] = useState(false);
    //   console.log(checked);
    const onChangeCheckedSimpleCheckbox = () => {
      setChecked(!checked);
    };
  
    return (
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          // id="exampleCheck1"
          id={props.fieldIdd}
          onChange={onChangeCheckedSimpleCheckbox}
        />
        <label
          className="form-check-label checkbox-label"
          htmlFor="exampleCheck1"
        >
          Agree to terms and conditions
        </label>
      </div>
    );
  };

  export const ToggleButton = (props) => {
    const [toggle, setToggle] = useState(false);
    // console.log(toggle);
  
    const triggerToggle = () => {
      setToggle(!toggle);
    };
  
    return (
      <label className="switch">
        <input type="checkbox" onChange={triggerToggle}   name={props.filedName}
          id={props.fieldIdd}
          />
        <span className="slider round"></span>
      </label>
    );
  };
  
  const ImageCheckboxList = [img1, img2, img3];

export const ImageCheckbox = (props) => {
  const [image, setimage] = useState("");
  // console.log(image);
  const onPickImage = (images) => {
    setimage({images});
  };

  return (
    <div>
      <ImagePicker
       multiple
        maxPicks={2}
        images={ImageCheckboxList.map((image, i) => ({ src: image, value: i }))}
        onPick={onPickImage}
      />
      <div>
        <button
          type="button"
          onClick={() => console.log(image)}
          className="btn btn-primary"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export const PhoneInput2 = () => {
  const [phone, setphone] = useState("");
  // console.log(phone);

  return (
    <div>
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => setphone(phone)}
      />
    </div>
  );
};

const MultiselectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const Multiselect = (props) => {
  const [selectedOption, setselectedOption] = useState("");

  // console.log(selectedOption);

  return (
    <div>
      <Select
        isMulti={selectedOption}
        value={selectedOption}
        onChange={setselectedOption}
        options={MultiselectOptions}
      />
    </div>
  );
};