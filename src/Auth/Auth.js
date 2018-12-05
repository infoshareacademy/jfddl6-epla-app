import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import { auth, googleProvider } from '../firebase'

import LoginView from '../views/LoginView/LoginView'

class Auth extends React.Component {
    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    onEmailChangeHandler = event => {
        this.setState({ email: event.target.value })
    }
    onPasswordChangeHandler = event => {
        this.setState({ password: event.target.value })
    }

    onLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                alert('Something is wrong! Check console for error details!')
                console.log(error)
            })
    }

    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }

    onLogOutClickHandler = () => {
        auth.signOut()
    }

    render() {
        return (
            this.state.isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        secondary={true}
                        style={{
                            position: 'absolute',
                            top: 5,
                            right: 10,
                            zIndex: 9999,
                            color: 'white'
                        }}

                        onClick={this.onLogOutClickHandler}
                    >
                        X
          </FloatingActionButton>
                    {this.props.children}
                </div>
                :
                <LoginView
                    email={this.state.email}
                    onEmailChangeHandler={this.onEmailChangeHandler}
                    password={this.state.password}
                    onPasswordChangeHandler={this.onPasswordChangeHandler}
                    onLogInClick={this.onLogInClick}
                    onLogInByGoogleClick={this.onLogInByGoogleClick}
                />
        )
    }
}
export default Auth