import React from 'react'

export default function Button(props) {
  return (
    <div>
           <button className="btn btn-primary mx-1" onClick={props.onUPClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={props.onLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={props.onClear}>Clear</button>
    
    </div>
  )
}
