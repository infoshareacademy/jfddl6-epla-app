import React from 'react'

const List = (props) => (
    <ul>
        {props.events.map(event =>
            <div>
                <li>
                    <p>{event.eventName}</p>
                    <p>{event.date}</p>
                </li>
            </div>)}
    </ul>
)

export default List