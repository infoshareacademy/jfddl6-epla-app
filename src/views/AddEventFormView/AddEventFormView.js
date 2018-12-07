import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import Paper from 'material-ui/Paper'


import { database } from '../../firebaseConfig'

const mapImageSourceToCategory = {
    music: "https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    sport: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    cultural: "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    religious: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}

const style = {
    margin: 5,
    width: '98%'
}

class AddEventForm extends React.Component {

    state = {
        eventName: '',
        category: '',
        date: '',
        city: '',
        street: '',
        isFavourite: false,
        photo: ''
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
            date: this.ourDateFormatter(this.state.date),
            participants: this.getRandomParticipantsNumber(),

        })
        this.setState({
            eventName: '',
            category: '',
            date: '',
            city: '',
            street: '',
            photo: ''
        })
    }

    ourDateFormatter = (date) => {
        return date.getDate() + ' -' + (date.getMonth() + 1) + ' -' + date.getFullYear()
    }

    handleDateChange = (event, date) => {
        this.setState({
            date: date
        })
    }

    handleCategorySelectChange = (event, index, newValue) => {
        this.setState({ category: newValue, photo: mapImageSourceToCategory[newValue]})
    }

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    margin: '12',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Paper
                    style={{
                        width: '90%'
                    }}
                >
                    <TextField
                        type="text"
                        floatingLabelText="Enter event name"
                        value={this.state.eventName}
                        onChange={(event, newVal) => this.setState({ eventName: newVal })}
                        style={style}
                    />
                    <SelectField
                        floatingLabelText="Enter event category"
                        value={this.state.category}
                        onChange={this.handleCategorySelectChange}
                        style={style}
                    >
                        <MenuItem value={''} primaryText="" />
                        <MenuItem value={'music'} primaryText="music" />
                        <MenuItem value={'sport'} primaryText="sport" />
                        <MenuItem value={'cultural'} primaryText="cultural" />
                        <MenuItem value={'religious'} primaryText="religious" />
                    </SelectField>
                    <DatePicker
                        hintText="Enter event date"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        textFieldStyle={{
                            width: '98%',
                            margin: 5
                        }}
                    />
                    <TextField
                        type="text"
                        floatingLabelText="Enter city"
                        value={this.state.city}
                        onChange={(event, newVal) => this.setState({ city: newVal })}
                        style={style}
                    />
                    <TextField
                        type="text"
                        floatingLabelText="Enter street name"
                        value={this.state.street}
                        onChange={(event, newVal) => this.setState({ street: newVal })}
                        style={style}
                    />
                    <RaisedButton
                        label="Add event"
                        primary={true}
                        style={style}
                        onClick={this.handleAddEventClick}
                    />
                </Paper>
            </div>
        )
    }
}


export default AddEventForm