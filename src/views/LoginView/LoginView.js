import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class LoginView extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onEmailChangeHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    onLogInClick = () => {

    }

    render() {
        return (
            <Paper
                style={{
                    margin: 20,
                    padding: 20
                }}
            >
                <h2>Log in!</h2>
                <TextField
                    name="email"
                    type="email"
                    floatingLabelText="E-mail"
                    value={this.state.email}
                    onChange={this.onEmailChangeHandler}
                    fullWidth={true}
                />
                <TextField
                    name="password"
                    type="password"
                    floatingLabelText="Password"
                    value={this.state.password}
                    onChange={this.onPasswordChangeHandler}
                    fullWidth={true}
                />
                <RaisedButton
                    style={{ margin: '5px 0' }}
                    label={'Log in'}
                    primary={true}
                    onClick={this.onLogInClick}
                    fullWidth={true}
                />
                <RaisedButton

                />
            </Paper>
        )
    }
}

export default LoginView