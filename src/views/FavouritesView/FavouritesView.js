import React from 'react'

import { database } from '../../firebase'


const dbRef = database.ref('/events')

class FavouritesView extends React.Component {

    state = {
        data: []
    }



    componentDidMount() {
        dbRef.on(
            'value',
            snapshot => {
                const events = Object.entries(
                    snapshot.val()
                ).map(entry => ({
                    ...entry[1],
                    key: entry[0]
                }))

                this.setState({ data: events })
                
            }
        )
    }


    render() {
        return (
            <div>
                {
                this.state.data.filter(event => event.isFavourite === true)
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
        </div>
        )
    }
}

export default FavouritesView