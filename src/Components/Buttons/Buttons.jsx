import React from 'react'
function Buttons(props){
    return (
        <button id={props.id} className={props.style_but}> {props.text}</button>
    )
}

export default Buttons