import React from 'react'
import TextField from 'material-ui/TextField'

class AddEventForm extends React.Component {

    state = {
        eventName: '',
        category: '',
        date: '',
        city: '',
        street: ''
    }

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
            </div>
        )
    }
}


export default AddEventForm