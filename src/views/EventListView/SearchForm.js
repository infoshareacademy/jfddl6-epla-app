import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Slider from 'material-ui/Slider'
import { white } from 'material-ui/styles/colors';


const PaperStyle = {
    margin: 15,
    padding: 10,
    backgroundColor: white
}

const DropDownMenuStyle = {
    width: 300,
}

export const FontFamilyEpla = "'Capriola', sans-serif"
export const red800 = '#c62828';


const SearchForm = (props) => (
    <Paper
        style={PaperStyle}
    >
        <div
            style={{
                padding: 30
            }}
        >
            <TextField
                type="text"
                fullWidth={true}
                value={props.filterText}
                floatingLabelText="Search for an event"
                onChange={props.onFilteredTextChangeHandler}
                style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontFamily: FontFamilyEpla,
                    fontSize: 20,
                    margin: 15
                }}
            />
        </div>
        <Slider
            defaultValue={150}
            value={props.numberOfUsers}
            onChange={props.handleUsersChange}
            sliderStyle={{ marginBottom: 0 }}
            step={1}
            min={0}
            max={150}
            style={{
                fontSize: 20,
                textAlign: "center",
                width: '94%',
                margin: '0 auto'
            }}

        />
        <div
            style={{
                fontFamily: FontFamilyEpla,
                fontSize: 20,
                textAlign: 'center',
                margin: 15
            }}
        >
            Number of participants: {props.numberOfUsers}
        </div>
        <div>
            <DropDownMenu
                onChange={props.handleEventsFilterCategoryChange}
                autoWidth={false}
                style={{
                    DropDownMenuStyle,
                    width: '100%',
                    fontSize: 25,
                    fontFamily: FontFamilyEpla,
                    textAlign: 'center',
                }}
                menuStyle={{
                    textAlign: "center",
                }}
                menuItemStyle={{ fontFamily: FontFamilyEpla }}
                selectedMenuItemStyle={{ color: red800 }}
                value={props.filterCategory}
            >
                <MenuItem value={''} primaryText="All" />
                <MenuItem value={'music'} primaryText="Music" />
                <MenuItem value={'sport'} primaryText="Sport" />
                <MenuItem value={'cultural'} primaryText="Cultural" />
                <MenuItem value={'religious'} primaryText="Religious" />
            </DropDownMenu >
            <br />
        </div>
    </Paper>
)

export default SearchForm