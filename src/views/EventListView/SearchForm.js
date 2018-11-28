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
            placeholder="Szukaj eventów"
            fullWidth={true}
            value={props.filterText}
            onChange={props.onFilteredTextChangeHandler}
        />
        <br />
        <Slider defaultValue={150}
            onChange={props.handleUsersChange}
            sliderStyle={{ marginBottom: 0 }}
            min={0}
            max={150} />
        <br />
        <DropDownMenu
            style={DropDownMenuStyle}
            autoWidth={false}
        >
            <MenuItem value={''} primaryText="Wybierz Event" />
            <MenuItem value={2} primaryText="Music" />
            <MenuItem value={3} primaryText="Sport" />
            <MenuItem value={4} primaryText="Cultural" />
            <MenuItem value={5} primaryText="Religious" />
        </DropDownMenu >
    </Paper >
)

export default SearchForm