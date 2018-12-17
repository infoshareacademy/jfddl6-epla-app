import React from 'react'
import { FontFamilyEpla } from './SearchForm'
import IconButton from 'material-ui/IconButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import './EventList.css'

const mapImageSourceToCategory = {
    music: "https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    sport: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    cultural: "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    religious: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}

const List = (props) => (
    <div className='list-container'>
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
                .filter(event => (
                    props.filterCategory === '' ? true : event.category === props.filterCategory
                ))
                .map(event => {
                    return (
                        <Paper
                            className='paper'
                            key={event.key}
                        >
                            <div className='images'>
                                <Link to={`/single-event/${event.key}`} className='link'>
                                    {
                                        <img src={mapImageSourceToCategory[event.category]} alt={event.category}
                                            className='image'
                                        />
                                    }
                                </Link>
                            </div>
                            <div
                                style={{
                                    fontFamily: FontFamilyEpla,
                                    fontSize: 20,
                                    textAlign: "center"
                                }}
                            >
                                <Link to={`/single-event/${event.key}`} className='link'>
                                    <p
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    > {event.eventName}</p>
                                </Link>
                                <p>{event.date}</p>
                                <p>{event.city}</p>
                                <p>{event.street}</p>
                                <IconButton
                                    onClick={() => props.isFavourite(event)}
                                >
                                    {Object.keys(props.favs || {}).includes(event.key) ?
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
    </div>
)
export default List