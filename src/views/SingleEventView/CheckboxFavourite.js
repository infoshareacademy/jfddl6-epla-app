import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

class CheckboxFavourite extends React.Component {
    state = {
        checked: false,
    }

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    render() {
        return (
            <div
                style={styles.block}
            >
                <Checkbox
                    checkedIcon={<ActionFavoriteBorder 
                    style={{
                        backgroundColor: '#eb2f06'
                    }}
                    />}
                    uncheckedIcon={<ActionFavoriteBorder
                        style={{
                            backgroundColor: '#3c6382'
                        }}
                    />}
                    label="Custom icon"
                    labelPosition="left"
                    style={styles.checkbox}
                    // iconStyle={{
                    //     backgroundColor: '#0a3d62'
                    // }}
                />
            </div>
        );
    }
}

export default CheckboxFavourite