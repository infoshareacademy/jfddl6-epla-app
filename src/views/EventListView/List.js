import React from 'react'

const List = (props) => (
    <ul>
        {props.events.map(event => <li>{event.eventName}</li>)}
    </ul>
)

export default List