import React  from 'react'

export default function Park(props) {

    return (
        <div className="list-group-item list-group-item-action">
            <div>
                <b>{props.park.name}</b>
            </div>
            <div>
                { props.park.location.place }
            </div>
        </div>
    )
}