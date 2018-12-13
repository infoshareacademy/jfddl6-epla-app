import React from 'react'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import { Link } from 'react-router-dom'
import { FontFamilyEpla } from './SearchForm'

const mapImageSourceToCategory = {
    music: "https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    sport: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    cultural: "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    religious: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}

const imageStyle = {
    width: 500,
    borderRadius: 50,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
}


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
                    return props.filterCategory === '' ? true : event.category === props.filterCategory
                })
                .map(event => {
                    return (
                        <Paper
                            style={{
                                margin: "15px auto",
                                padding: 10,
                                width: 1500,
                                textAlign: 'center',
                                backgroundColor: 'white'
                            }}
                            key={event.key}
                        >

                            {
                                <img src={mapImageSourceToCategory[event.category]} alt={event.category}
                                    style={imageStyle}
                                />

                            }
                            <div
                                style={{
                                    fontFamily: FontFamilyEpla,
                                    fontSize: 20

                                }}
                            >
                                <Link to={`/single-event/${event.key}`}
                                    style={{
                                        textDecoration: 'none',
                                    }}>
                                    <p> {event.eventName}</p>
                                </Link>
                                <p>{event.date}</p>
                                <p>{event.city}</p>
                                <p>{event.street}</p>
                                <IconButton
                                    onClick={() => props.isFavourite(event)}
                                >
                                    {event.isFavourite ?
                                        <ActionFavorite />
                                        :
                                        <ActionFavoriteBorder />
                                    }
                                </IconButton>

                            </div>


                        </Paper>
                    )
                })

        }

    </ul>
)

export default List