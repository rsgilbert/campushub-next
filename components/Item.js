import React from 'react'

export default function Item(props) {
    return (
        <span className={`${props.className}`}>
            {props.children}
        </span>
    )
}