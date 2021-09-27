import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <p>
          <input
            type="text"
            onChange={(e) => this.handleOnChange(e)}
            name="name"
            value={this.state.text}
            placeholder="restaurant name" />
        </p>
        <input type="submit" value="add" />
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
