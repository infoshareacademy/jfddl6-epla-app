import React from 'react'
import Paper from 'material-ui/Paper'

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
                        <Paper
                            style={{
                                margin: 15,
                                padding: 10,
                                width: 1500,
                                textAlign: 'center',
                            }}
                        >

                            {
                                event.category === "Music" ?
                                    <img src="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Music"
                                        style={{
                                            width: 500,
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-around',
                                        }}
                                    />
                                    :
                                    event.category === "Sport" ?
                                        <img src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Sport"
                                            style={{ width: 500 }}
                                        />
                                        :
                                        event.category === "Cultural" ?
                                            <img src="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Cultural"
                                                style={{ width: 500 }}
                                            />
                                            :
                                            event.category === "Religious" ?
                                                <img src="https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Religious"
                                                    style={{ width: 500 }}
                                                />
                                                : false
                            }


                            <p> {event.eventName}</p>
                            <p>{event.date}</p>
                            <p>{event.city}</p>
                            <p>{event.street}</p>
                            <button>Dodaj do ulubionych</button>




                        </Paper>
                    )
                })

        }
    </ul>
)

export default List