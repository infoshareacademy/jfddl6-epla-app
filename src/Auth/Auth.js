import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'


import LoginView from '../views/LoginView/LoginView'

import {
  initAuthChangeListeningAction,
  onLogOutAsyncAction,
  onLogInByGoogleClickAsyncAction,
  logInAsyncAction,
  emailChangeAction,
  passwordChangeAction,
  resetPasswordHandler
} from '../state/auth'

import { connect } from 'react-redux'

class Auth extends React.Component {

  componentDidMount() {
    this.props._initAuthChangeListeningAction()
  }

  render() {
    return (
      this.props._isUserLoggedIn ?
        <div>
          <FloatingActionButton
            style={{
              position: 'fixed',
              top: 10,
              right: 10,
              zIndex: 9999,
              color: 'white'
            }}
            secondary={true}
            onClick={this.props._onLogOutAsyncAction}
          >
            X
          </FloatingActionButton>
          {this.props.children}
        </div>
        :
        <LoginView
          email={this.props._email}
          onEmailChangeHandler={this.props._emailChangeAction}
          password={this.props._password}
          onPasswordChangeHandler={this.props._passwordChangeAction}
          onLogInClick={this.props._logInAsyncAction}
          onLogInByGoogleClick={this.props._onLogInByGoogleClickAsyncAction}
          resetPasswordHandler = {this.props._resetPasswordHandler}
        />
    )
  }
}

const mapStateToProps = state => ({
  _isUserLoggedIn: state.auth.isUserLoggedIn,
  _email: state.auth.email,
  _password: state.auth.password
})

const mapDispatchToProps = dispatch => ({
  _initAuthChangeListeningAction: () => dispatch(initAuthChangeListeningAction()),
  _onLogOutAsyncAction: () => dispatch(onLogOutAsyncAction()),
  _onLogInByGoogleClickAsyncAction: () => dispatch(onLogInByGoogleClickAsyncAction()),
  _logInAsyncAction: () => dispatch(logInAsyncAction()),
  _emailChangeAction: (event)=> dispatch(emailChangeAction(event.target.value)),
  _passwordChangeAction: (event) => dispatch(passwordChangeAction(event.target.value)),
  _resetPasswordHandler: () => dispatch(resetPasswordHandler())
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)