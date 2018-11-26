import React from 'react'


class EventListView extends React.Component {

  state = {
    category: '',
    date: '',
    city: '',
    street: '',
    eventName: ''
  }

  handleCategoryChange = (e, index, value) => this.setState({ category: value });
  handleDateChange = (e, value) => this.setState({ date: value });
  handleCityChange = (e, value) => this.setState({ city: value });
  handleStreetChange = (e, value) => this.setState({ street: value });
  handleEventNameChange = (e, value) => this.setState({ eventName: value })

  render() {
    return (
      <div>
<List
handleCategoryChange={this.handleCategoryChange}
handleDateChangeChange={this.handleDateChange}
handleCityChange={this.handleCityChange}
handleStreetChange={this.handleStreetChange}
handleEventNameChange={this.handleEventNameChange}
/>


      </div>
    )
  }
}
export default EventListView