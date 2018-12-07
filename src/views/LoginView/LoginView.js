import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const LoginView = (props) => (
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
      value={props.email}
      onChange={props.onEmailChangeHandler}
      fullWidth={true}
    />
    <TextField
      name="password"
      type="password"
      floatingLabelText="Password"
      value={props.password}
      onChange={props.onPasswordChangeHandler}
      fullWidth={true}
    />
    <RaisedButton
      style={{ margin: '5px 0' }}
      label={'Log in'}
      primary={true}
      onClick={props.onLogInClick}
      fullWidth={true}
    />
     <RaisedButton
      style={{ margin: '5px 0' }}
      label={'Reset your password'}
      primary={true}
      onClick={props.resetPasswordHandler}
      fullWidth={true}
    />
    <RaisedButton
      style={{ margin: '5px 0' }}
      label={'Log in with Google'}
      secondary={true}
      onClick={props.onLogInByGoogleClick}
      fullWidth={true}
    />
  </Paper>
)

export default LoginView