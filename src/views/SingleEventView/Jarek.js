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
                .filter(event => {
                    console.log(props)
                    console.log(event)
                    return props.filterCategory === '' ? true : event.category === props.filterCategory
                })
                .map(event => {
                    return (
                        <div>
                            <li>
                                {const category = ''}
                                {category === "Music"} ?
                                    <img src="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                :
                                    {category === "Sport"} ?
                                        <img src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                :
                                        {category === "Cultural"} ?
                                            <img src="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                :
                                           {category} === "Religious"} ?
                                                <img src="https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />



                                <p> {event.eventName}</p>
                                <p>{event.date}</p>
                                <p>{event.city}</p>
                                <p>{event.street}</p>
                                <button>Dodaj do ulubionych</button>



                            </li>
                        </div>
                    )
                })

        }
    </ul>
)

export default List