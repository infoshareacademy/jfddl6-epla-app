import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { database } from '../../firebase'

const style = {
    margin: 12,
}

class AddEventForm extends React.Component {

    state = {
        eventName: '',
        category: '',
        date: '',
        city: '',
        street: ''
    }

    getRandomParticipantsNumber = () =>
        Math.round(Math.random() * 100) + 50

    addToFirebase = () =>
        database.ref('/events').push({
            ...this.state,
            participants: this.getRandomParticipantsNumber()
        })


    render() {
        return (
            <div>
                <TextField
                    type="text"
                    floatingLabelText="Enter event name"
                    onChange={(event, newVal) => this.setState({ eventName: newVal })}
                />
                <TextField
                    type="text"
                    floatingLabelText="Enter event category"
                    onChange={(event, newVal) => this.setState({ category: newVal })}
                />
                <TextField
                    type="text"
                    floatingLabelText="Enter event date"
                    onChange={(event, newVal) => this.setState({ date: newVal })}
                />
                <TextField
                    type="text"
                    floatingLabelText="Enter city"
                    onChange={(event, newVal) => this.setState({ city: newVal })}
                />
                <TextField
                    type="text"
                    floatingLabelText="Enter street name"
                    onChange={(event, newVal) => this.setState({ street: newVal })}
                />
                <RaisedButton
                    label="Add event"
                    primary={true}
                    style={style}
                    onClick={this.addToFirebase}
                />
            </div>
        )
    }
}


export default AddEventForm