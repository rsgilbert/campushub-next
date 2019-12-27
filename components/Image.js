import React from 'react'

export default function Image(props) {
    if(!props.src) {
        return null
    }
    return (
        <div class="text-center">
            <img 
                src={props.src} 
                class="img-fluid"/>
        </div>
    )
}