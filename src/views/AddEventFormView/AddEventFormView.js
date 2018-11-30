import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


import { database } from '../../firebase'

const style = {
    margin: 12,
}

class AddEventForm extends React.Component {

    state = {
        eventName: '',
        category: '',
        date: '', //add datepicker
        city: '',
        street: '',
        isFavourite: false
    }

    getRandomParticipantsNumber = () =>
        Math.round(Math.random() * 100) + 50

    handleAddEventClick = () => {
        if (this.state.eventName !== '' && this.state.category !== '' && this.state.date !== '') {
            this.props.toggleNotification('Event added')
            this.addToFirebase()
        }
        else {
            this.props.toggleNotification('Enter event name, category and date.')
        }
    }

    addToFirebase = () => {
        database.ref('/events').push({
            ...this.state,
            participants: this.getRandomParticipantsNumber()
        })
        this.setState({
            eventName: '',
            category: '',
            date: '',
            city: '',
            street: ''
        })
    }


    render() {
        return (
            <div>
                <TextField
                    type="text"
                    floatingLabelText="Enter event name"
                    value={this.state.eventName}
                    onChange={(event, newVal) => this.setState({ eventName: newVal })}
                />
                <SelectField
                    floatingLabelText="Enter event category"
                    value={this.state.category}
                    onChange={(event, index, newValue) => this.setState({category: newValue})}
                >
                    <MenuItem value={''} primaryText="" />
                    <MenuItem value={'Music'} primaryText="Music" />
                    <MenuItem value={'Sport'} primaryText="Sport" />
                    <MenuItem value={'Cultural'} primaryText="Cultural" />
                    <MenuItem value={'Religious'} primaryText="Religious" />
                </SelectField>

                <TextField
                    type="text"
                    floatingLabelText="Enter event date" // change to datepicker
                    value={this.state.date}
                    onChange={(event, newVal) => this.setState({ date: newVal })}
                />
                <TextField
                    type="text"
                    floatingLabelText="Enter city"
                    value={this.state.city}
                    onChange={(event, newVal) => this.setState({ city: newVal })}
                />
                <TextField
                    type="text"
                    floatingLabelText="Enter street name"
                    value={this.state.street}
                    onChange={(event, newVal) => this.setState({ street: newVal })}
                />
                <RaisedButton
                    label="Add event"
                    primary={true}
                    style={style}
                    onClick={this.handleAddEventClick}
                />
            </div>
        )
    }
}


export default AddEventForm