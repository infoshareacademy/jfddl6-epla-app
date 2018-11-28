import React from 'react'

const List = (props) => (
    <ul>
        {props.events.map(event =>
            <div>
                <li>
                    <p>{event.eventName}</p>
                    <p>{event.date}</p>
                    <p>{event.city}</p>
                    <p>{event.street}</p>
                </li>
            </div>)}
    </ul>
)

export default List