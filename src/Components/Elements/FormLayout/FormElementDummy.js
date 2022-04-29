import React, { useState, useEffect } from "react";

// import { Carousel,SwipeSlider  } from '@farfetch/react-carousel';
// import '@farfetch/react-carousel/styles.css'



export const TextBox = (props) => {
  console.log(props);
  const [textBox, setTextBox] = useState("");
  console.log(textBox);

  const onChangeTextBox = (e) => {
    setTextBox(e.target.value);
  };

  // let activeStatus='';
  // if(props.datalabel.ff_active_status === "Y"){
  //   activeStatus=true;
  // }
  // else  activeStatus=false;

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

export const Separator = (props) => {
  return (
    <div>
      <hr class="solid" />
    </div>
  );
};

export const ButtonRadio = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const onClickButtonRadio = (e)=>{
    setValue(e.target.value);
  }

  return (
    <div className="custom-radio custom-control custom-control-inline ">
      <div className="form-group">
        <input
          type="radio"
          value="MALE"
          name="gender"
          onClick={onClickButtonRadio}
        />{" "}
        Male
        <input
          type="radio"
          value="FEMALE"
          name="gender"
          onClick={onClickButtonRadio}
        />{" "}
        Female
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const [textArea, setTextArea] = useState("");
  console.log(textArea);

  const onChangeTextArea = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <div className="form-group">
      <label for="comment">Comment:</label>
      <textarea
        class="form-control"
        name={props.filedName}
        id={props.fieldIdd}
        rows="5"
        // id="comment"
        value={textArea}
        onChange={onChangeTextArea}
      ></textarea>
    </div>
  );
};

export const ContentEditableDiv = (props) => {
  return (
    <div
      name={props.filedName}
      id={props.filedName}
      contentEditable="true"
      onInput={(e) =>
        console.log("Text inside div", e.currentTarget.textContent)
      }
    >
      Text inside div
    </div>
  );
};

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
      console.log("file is valid",file);
    } else {
      setIsValidFile(!isValidFile);
      console.log("file is invalid");
    }
  };

  return (
    <div>
      <input
        className="form-control form-control-lg"
        // id="formFileLg"
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
      <input
        type="checkbox"
        onChange={triggerToggle}
        name={props.filedName}
        id={props.fieldIdd}
      />
      <span className="slider round"></span>
    </label>
  );
};


export const Slider = (props) => {
  // console.log(index);

  return (
    <div className="container SliderContainer">
      <div
        id="myCarousel"
        className="carousel slide SliderSlide"
        data-ride="carousel"
      >
        {/* Indicators */}
        <ol className="carousel-indicators SliderIndicators">
          <li
            data-target="#myCarousel"
            index="0"
            data-slide-to="0"
            // data-slide-to={index}
            className="active"
          ></li>
          <li
            data-target="#myCarousel"
            index="1"
            data-slide-to="1"
            // data-slide-to={index}
          ></li>
          <li
            data-target="#myCarousel"
            index="2"
            data-slide-to="2"
            // data-slide-to={index}
          ></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="Los Angeles"
              className="sliderImg"
            />
          </div>

          <div className="item">
            <img
              src="https://static.remove.bg/remove-bg-web/f4b1a5b6ab0be77785c26078f8a7569489d184da/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              alt="Chicago"
              className="sliderImg"
            />
          </div>

          <div className="item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="New york"
              className="sliderImg"
            />
          </div>
        </div>
        {/* Left and right controls  */}
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control sliderNextControl"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};



export const ImageAnnotation = (props) => {
  const [selectedId, setSelectedId] = useState("");
  // console.log(selectedId);
  const [data, setData] = useState("");
  // console.log(data);

  const [pageSize, setPageSize] = useState({
    width: 400,
    height: 600,
  });

  const onResize = () => {
    setPageSize({ width: 400, height: 600 });
  };

  useEffect(() => {
    addEventListener("resize", onResize);
    // window.addEventListener("resize", onResize);
    return () => removeEventListener("resize", onResize);
    //  window.removeEventListener("resize", onResize);
  }, []);

  const onSelectImageAnnotation = () => {
    setSelectedId(selectedId);
  };
  const onChangeImageAnnotation = () => setData(data);

  return (
    <div>
     
    </div>
  );
};



const MultiselectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];



// const images = [
//   {
//     id: 1,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
//   },
//   {
//     id: 2,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
//   },
//   {
//     id: 3,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
//   },
// ];

// export const ImageRadio = () => {
//  const handleAfterChange = (e) => {
//     console.log(e.index);
//     console.log(e.dir);
// };

//   return <div>
//     <Carousel className={ Style.container } isInfinite isRTL itemsToShow={ 2 } onAfterChange={ handleAfterChange }>
//         <SwipeSlider className={ Style.slider } disableSwipe hasKeysNavigation>
//             <div className={ Style.customItem }>Item 1</div>
//             <div className={ Style.moreCustomItem }>Item 2</div>
//             <div>Item 3</div>
//             <div>Item 4</div>
//             <div>Item 5</div>
//         </SwipeSlider>
//     </Carousel>
//   </div>;
// };
