import React from 'react'
import Icon from './Icon'
import Item from './Item'
export default function NavItem(props) {

    return (
        <Item className="btn">
            <Icon className={`${props.icon} fa-2x`} />
            <div>{props.title}</div>
        </Item>
    )
}