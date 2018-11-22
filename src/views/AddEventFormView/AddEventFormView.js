import React from 'react'
import TextField from 'material-ui/TextField'

class AddEventForm extends React.Component {

    state = {
        eventName: ''
    }

    render() {
        return (
            <TextField
                type="text"
                value={this.state.eventName}
                floatingLabelText="Enter event name"
                onChange={(event, newVal) => this.setState({ eventName: newVal })}
            />
        )
    }
}


export default AddEventForm