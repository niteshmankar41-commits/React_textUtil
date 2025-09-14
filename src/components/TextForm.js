import React, { useState } from "react";

export default function TextForm(props) {

  //Concept -> State, useState

  const [text, setText] = useState("set this text");
  // text = "new Text" -> Wrong way to change the value of text
  //setText("new text ") -> Correct way to change the value of text

  const handleUpClick = () => {
    console.log("Upper case is clicked -> "+ text);
    let newText = text.toUpperCase();
    setText(newText)
  };


  // How to handle events// how to listen events
  const handleOnChange = (event) => {
    console.log("Handle on change");
    setText(event.target.value)
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">{props.heading}</label>
          <input type="email" className="form-control" onChange={handleOnChange} id="exampleInputEmail1" value={text}/>
        </div>
        <button type="submit" onClick={handleUpClick} className="btn btn-primary" >
          Convert to upperCase
        </button>
      </form>
    </div>
  );
}
