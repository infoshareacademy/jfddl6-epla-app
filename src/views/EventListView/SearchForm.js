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
            placeholder="Filter tasks"
            fullWidth={true}
            value={props.filterText}
            onChange={props.onFilteredTextChangeHandler}
        />
        <br />
        <Slider defaultValue={1} />
        <br />
        <DropDownMenu
            style={DropDownMenuStyle}
            autoWidth={false}
        >
            <MenuItem value={1} primaryText="Select category" />
            <MenuItem value={2} primaryText="Music" />
            <MenuItem value={3} primaryText="Sport" />
            <MenuItem value={4} primaryText="Cultural" />
            <MenuItem value={5} primaryText="Religious" />
        </DropDownMenu >
    </Paper >
)

export default SearchForm