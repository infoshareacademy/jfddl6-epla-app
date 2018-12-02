import React from 'react';
import Checkbox from 'material-ui/Checkbox';
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

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
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
                    defaultChecked={false}
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
                    label="Add to favourite: "
                    labelPosition="left"
                    labelStyle={{
                        fontSize: "18px",
                        fontWeight: "bold"
                    }}
                    style={styles.checkbox}
                    onChange={() => this.handleChange}
                />
            </div>
        );
    }
}

export default CheckboxFavourite