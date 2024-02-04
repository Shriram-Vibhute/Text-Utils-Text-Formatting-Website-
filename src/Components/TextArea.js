import React, { useState } from 'react'
import './TextArea.css';

export default function TextArea(props) {
    const [text, setText] = useState("");

    // Convert to Upper Case
    const convertToUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const convertToLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }

    // Copy text to clipboard
    const copyText = () => {
        let textArea = document.getElementById("exampleFormControlTextarea1");
        textArea.select();
        navigator.clipboard.writeText(textArea.value); // navigator interface
    }

    // Remove Extra spaces
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        console.log(typeof newText);
        setText(newText.join(" "));
    }

    // Clear Text Area
    const clearTextArea = () => {
        setText('');
    }

    // Handling text writing
    const onChangeHandler = (event) => {
        setText(event.target.value);
        console.log("clicked");
    }

    // Change Opposite Theme
    const textTheme = (theme) => {
        if (theme === 'light') {
            return 'dark';
        }
        else {
            return 'light';
        }
    }
    return (
        <>
            <div className={`container bg-${props.mode}`}>
                <div className="mx10 container" id='text-area'>
                    <h1 className={`container text-center my-10 text-${textTheme(props.mode)}`}>TextUtils</h1>
                    <div className='container d-grid gap-2 d-md-flex justify-content-md-end'>
                        <div className="my-2 form-check form-switch">
                            <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode} />
                            <label className={`form-check-label text-${textTheme(props.mode)}`} htmlFor="flexSwitchCheckDefault">{(props.mode === 'light') ? 'Enable' : 'Disable'} Dark Mode</label>
                        </div>
                    </div>
                    <div className="container mb-1">
                        <textarea className={`form-control text-${textTheme(props.mode)} bg-${props.mode}`} id="exampleFormControlTextarea1" rows="13" placeholder={props.Placeholder} onChange={onChangeHandler} value={text} />
                    </div>
                </div>
                <hr />
                <div className="container" id='buttons'>
                    <button className={`btn btn-info mx-1 my-1 btn-${textTheme(props.mode)}`} onClick={convertToUpperCase}>UpperCase</button>
                    <button className={`btn btn-info mx-1 my-1 btn-${textTheme(props.mode)}`} onClick={convertToLowerCase}>LowerCase</button>
                    <button className={`btn btn-info mx-1 my-1 btn-${textTheme(props.mode)}`}>Remove Extra Space</button>
                    <button className={`btn btn-info mx-1 my-1 btn-${textTheme(props.mode)}`} onClick={copyText}>Copy Text</button>
                    <button className={`btn btn-info mx-1 my-1 btn-${textTheme(props.mode)}`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button className={`btn btn-info mx-1 my-1 btn-${textTheme(props.mode)}`} onClick={clearTextArea}>Clear</button>
                </div>
                <hr />
                <div className='container' id="summery">
                    <h5 className={`text-${textTheme(props.mode)}`}>Text Summery</h5>
                    <div className={`text-${textTheme(props.mode)}`} id="totalWords">Words : {text.split(' ').length}</div>
                    <div className={`text-${textTheme(props.mode)}`} id="totalCharacters">Characters : {text.length}</div>
                </div>
                <hr />
                <div className={`form-check-label text-${textTheme(props.mode)} container`} id="preview">
                    <h5>Text Pieview</h5>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}