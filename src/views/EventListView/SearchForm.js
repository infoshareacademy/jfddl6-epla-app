import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Slider from 'material-ui/Slider'


const PaperStyle = {
    margin: 15,
    padding: 10
}

const DropDownMenuStyle = {
    width: 300,
}

export const FontFamilyEpla = "'Capriola', sans-serif"


const SearchForm = (props) => (
    <Paper
        style={PaperStyle}
    >
        <div>
            <TextField
                type="text"
                fullWidth={true}
                value={props.filterText}
                floatingLabelText="Search for an event"
                onChange={props.onFilteredTextChangeHandler}
                style={{
                    display: 'block',
                    marginBottom: '5px',
                }}
            // underlineStyle={styles.underlineStyle}

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
                textAlign: "center"
            }}

        />
        <div 
        style  = {{
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
                value={props.filterCategory}
            >
                <MenuItem value={''} primaryText="All" />
                <MenuItem value={'Music'} primaryText="Music" />
                <MenuItem value={'Sport'} primaryText="Sport" />
                <MenuItem value={'Cultural'} primaryText="Cultural" />
                <MenuItem value={'Religious'} primaryText="Religious" />
            </DropDownMenu >
            <br />
        </div>
    </Paper>
)

export default SearchForm