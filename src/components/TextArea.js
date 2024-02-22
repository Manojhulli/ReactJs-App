import React, { useState } from 'react'

export default function TextArea(props) {
  const handleButton = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleText = (event) =>{
    setText (event.target.value);
  }

  const  [text , setText] = useState("enter text here : "); 
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleText} id="myBox" rows="8"></textarea>
        </div>
        <>
            <button type="button" class="btn btn-primary" onClick={handleButton}>Convert to upper case</button>
            </>
    </div>
  )
}
