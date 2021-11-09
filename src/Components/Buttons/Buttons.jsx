
function Buttons(props){
    return (
        <button id={props.id} className={props.style_but} href={props.link}> {props.text}</button>
    )
}

export default Buttons