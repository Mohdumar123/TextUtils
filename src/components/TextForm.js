import React,{useState} from 'react'
import Button from './Button';

export default function TextForm(props) {
    const [text,setText] = useState("");
    const onUPClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Conveted to Uppercase","success")
    }

    const onChangeHandle = (e)=>{
      setText(e.target.value);
    }

    const onLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Conveted to Lowercase","success")
    }

    const onClear=()=>{
        let newText = '';
        setText(newText);
        props.alert("Cleared","success")
    }


    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onChangeHandle} rows="8" style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
       
        <Button onUPClick={onUPClick} onLowClick={onLowClick} onClear={onClear} />

            <div className="container my-3">
                <h2>Your text summay</h2>
                <p>{text.split(" ").length} Word</p>
                <p>{text.length} Charachters</p>
                <h2>preview</h2>
                <p>{text.length<=0?"Enter text in textbox for preview":text}</p>
            </div>
        </>
    )
}
