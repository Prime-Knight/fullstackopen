import React from 'react'

function Content(props) {
    console.log(props.parts)
    return (
        <>
            {props.parts.map(e => { 
               return <p>
                {e.name} {e.exercises}
              </p>
                })}
       
        
        </>
    )
}

export default Content
