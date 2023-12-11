import React, { useState } from 'react'

export default function Textarea(props) {
    const [data, setdata] = useState('');
    function handleTextareaChange(event){
        setdata(event.target.value);
    }
    function converttouppercase(){
        let newdata=data.toUpperCase();
        setdata(newdata);
        props.showAlert('Converted To Upper Case!');
    }
    function converttolowercase(){
      let newdata=data.toLowerCase();
      setdata(newdata);
      props.showAlert('Converted To Lower Case!');
  }
  function cleartext(){
    
    setdata('');
    props.showAlert('Text Cleared!');
}
  function countwords(inputString){
    // Remove leading and trailing whitespaces
    inputString = inputString.trim();

    // Split the string into an array of words
    var wordsArray = inputString.split(/\s+/);

    // Filter out empty strings
    wordsArray = wordsArray.filter(function(word) {
        return word.length > 0;
    });

    // Return the total number of words
    return wordsArray.length;
}
  return (
    <>
    <div>
    <h1 className="mb-5" style={{color: props.mode==='dark'?'white':'black'}}>Enter The Text To Analyze Below</h1>
  <div className="mb-3">
    <textarea htmlFor= "mytextarea" placeholder='Enter Text here' onChange={handleTextareaChange} className="form-control" value={data} id="exampleFormControlTextarea1" rows="8"> </textarea>
  </div>
  <button className="btn btn-primary"  onClick={converttouppercase}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={converttolowercase}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
  
    </div>
    <div>
      <h2 className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>Text Summary</h2>
      <p style={{color: props.mode==='dark'?'white':'black'}}>{countwords(data)} words and {data.length} characters</p>
      <p></p>
    </div>
    <div>
      <h2 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h2>
      <p style={{color: props.mode==='dark'?'white':'black'}}>{data.length>0?data:"Enter text to preview here"}</p>
    </div>
    
  </>
  )
}
