import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'

import {
    addToFirebaseAsyncAction,
    handleAddEventClick,
    eventNameChangeAction,
    dateChangeAction,
    categorySelectChange,
    cityChangeAction,
    streetChangeAction
} from '../../state/addEventFormView'

const style = {
    margin: 5,
    width: '98%'
}

const AddEventForm = props => (
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
                        value={props._eventName}
                        onChange={props._eventNameChangeAction}
                        style={style}
                    />
                    <SelectField
                        floatingLabelText="Enter event category"
                        value={props._category}
                        onChange={props._categorySelectChange}
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
                        value={props._date}
                        onChange={props._dateChangeAction}
                        textFieldStyle={{
                            width: '98%',
                            margin: 5
                        }}
                    />
                    <TextField
                        type="text"
                        floatingLabelText="Enter city"
                        value={props._city}
                        onChange={props._cityChangeAction}
                        style={style}
                    />
                    <TextField
                        type="text"
                        floatingLabelText="Enter street name"
                        value={props._street}
                        onChange={props._streetChangeAction}
                        style={style}
                    />
                    <RaisedButton
                        label="Add event"
                        primary={true}
                        style={style}
                        onClick={props._handleAddEventClick}
                    />
                </Paper>
            </div>
        )

const mapStateToProps = state => ({
    _eventName: state.addEventFormView.eventName,
    _category: state.addEventFormView.category,
    _date: state.addEventFormView.date,
    _city: state.addEventFormView.city,
    _street: state.addEventFormView.street,
    _isFavourite: state.addEventFormView.isFavourite,
    _photo: state.addEventFormView.photo,
})

const mapDispatchToProps = dispatch => ({
    _addToFirebaseAsyncAction: () => dispatch(addToFirebaseAsyncAction()),
    _handleAddEventClick: () => dispatch(handleAddEventClick()),
    _dateChangeAction: (event, date) => dispatch(dateChangeAction(event, date)),
    _categorySelectChange: (event, index, text) => dispatch(categorySelectChange(event, index, text)),
    _streetChangeAction: (event, text) => dispatch(streetChangeAction(event, text)),
    _cityChangeAction: (event, text) => dispatch(cityChangeAction(event, text)),
    _eventNameChangeAction: (event, text) => dispatch(eventNameChangeAction(event, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEventForm)