import React from 'react'

function Total(props) {
    //using js reducer
    //must convert to react reducer
    
    let initialValue = 0
let sum = props.parts.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.exercises
}, initialValue)

    return (
        <p>Number of exercises {sum}</p>
    )
}

export default Total
