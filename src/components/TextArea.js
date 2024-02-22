import React, { useState } from 'react'

export default function TextArea(props) {
  const handleUppercase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowercase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleText = (event) =>{
    setText (event.target.value);
  }
  const  [text , setText] = useState("enter text here : "); 
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleText} id="myBox" rows="8"></textarea>
        </div>
        <>
            <button type="button" class="btn btn-primary mx-1" onClick={handleUppercase}>Convert to upper case</button>
            <button type="button" class="btn btn-primary mx-2" onClick={handleLowercase}>Convert to Lower case</button>
            </>
    </div>

    <div className="container mb-2">
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} words and {text.length}Characters</p>
    </div>
    </>
  )
}