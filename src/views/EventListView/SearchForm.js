import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Slider from 'material-ui/Slider'

const PaperStyle = {
    margin: 10,
    padding: 5
}

const DropDownMenuStyle = {
    width: 300,
}

const SearchForm = (props) => (
    <Paper
        style={PaperStyle}
    >
        <br />
        <TextField
            type="text"
            fullWidth={true}
            value={props.filterText}
            floatingLabelText="Szukaj eventów"
            onChange={props.onFilteredTextChangeHandler}

        />
        <br />
        <Slider
            defaultValue={150}
            value={props.numberOfUsers}
            onChange={props.handleUsersChange}
            sliderStyle={{ marginBottom: 0 }}
            min={0}
            max={150} />
        <br />
        <DropDownMenu
            onChange={props.handleEventsFilterCategoryChange}
            style={DropDownMenuStyle}
            autoWidth={false}
            value={props.filterCategory}
        >
            <MenuItem value={''} primaryText="Wszystkie" />
            <MenuItem value={'Music'} primaryText="Music" />
            <MenuItem value={'Sport'} primaryText="Sport" />
            <MenuItem value={'Cultural'} primaryText="Cultural" />
            <MenuItem value={'Religious'} primaryText="Religious" />
        </DropDownMenu >
    </Paper >
)

export default SearchForm