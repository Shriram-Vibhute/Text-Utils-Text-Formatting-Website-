import React from 'react'

export default function Alert(props) {
    const capatalize = (text) => {
        let letter = text.slice(0, 1).toUpperCase();
        let txt = text.slice(1, text.length);
        letter = letter.concat(txt);
        return letter;
    }
    return (
        props.sendAlert && (<div className={`alert alert-${props.sendAlert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatalize(props.sendAlert.type) + " : "}</strong>{props.sendAlert.message}
        </div>)
    )
}
