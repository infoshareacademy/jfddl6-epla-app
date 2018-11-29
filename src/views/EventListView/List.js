import React from 'react'

const List = (props) => (
    <ul>
        {
            props.events
                .filter(event => event.participants <= props.numberOfUsers)
                .filter(event => (
                    event.eventName
                        .toLowerCase()
                        .replace(/\s/g, '')
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, "")
                        .includes(
                            props.filterText
                                .toLowerCase()
                                .replace(/\s/g, '')
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, "")
                        )
                ))
                .filter(event => event.category === props.filterCategory)
                .map(event =>
                    <div>
                        <li>
                            <p>{event.eventName}</p>
                            <p>{event.date}</p>
                            <p>{event.city}</p>
                            <p>{event.street}</p>
                        </li>
                    </div>)
        }
    </ul>
)

export default List