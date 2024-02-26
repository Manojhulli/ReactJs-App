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

  const handleclear =() => {
    let newText = "";
    setText(newText);
  }
  const  [text , setText] = useState(" "); 
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          
            <textarea className="form-control" value={text} onChange={handleText} id="myBox" rows="10"></textarea>
        </div>
        <>
            <button type="button" class="btn btn-dark mx-1" onClick={handleUppercase}>Convert to upper case</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handleLowercase}>Convert to Lower case</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handleclear}>Clear</button>
            </>
    </div>

    <div className="container mb-2 ">
      <h3>Your Text Summary</h3>
      <p> {text.split(" ").length} words and {text.length}Characters</p>
    </div>
    </>
  )
}