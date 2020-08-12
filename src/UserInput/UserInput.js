import React from "react"

const userInput = (props) =>{

    return (
        <div>
    <input type = "text" onChange = {props.click} />
    {
        props.inputLength > 5 ? <p>Text is long enough</p>
        :
        <p>Text is too short</p>
    }
    </div>
    )
}

export default userInput;