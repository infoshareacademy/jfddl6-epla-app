import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { FlatButton } from 'material-ui'
import { onLogOutAsyncAction } from '../state/auth'
import { store } from '../store'

class Navigation extends React.Component {
    state = {
        isDrawerOpen: false
    }

    toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

    render() {
        return (
            <div>
                <AppBar
                    title={this.props.title}
                    onLeftIconButtonClick={this.toggleDrawer}
                    iconElementRight={
                        <FlatButton
                            label="Log Out"
                            onClick={() => store.dispatch(onLogOutAsyncAction())}
                        />
                    }
                />

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.isDrawerOpen}
                    onRequestChange={this.toggleDrawer}
                >
                    {this.props.children ?
                        this.props.children.map ?
                            this.props.children.map(child => (
                                React.cloneElement(
                                    child,
                                    {
                                        onClick: this.toggleDrawer,
                                        key: child.props[this.props.keyChildProp || 'key']
                                    }
                                )
                            ))
                            : React.cloneElement(
                                this.props.children,
                                {
                                    onClick: this.toggleDrawer,
                                }
                            )
                        : null
                    }
                </Drawer>
            </div>
        )
    }
}

export default Navigation