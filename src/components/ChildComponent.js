import React from 'react'

export default function ChildComponent(props) {

    function changeShift() {
        props.getName(props.getVal)
    }
    return (
        <div>
            <button onClick={props.greetHandler} style={{ color: 'green' }}>Change your schedule </button>

            <button onClick={changeShift} id={props} style={{ color: 'red' }}>change</button>

        </div>
    )
}
