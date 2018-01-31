import React, { Component, InputHTMLAttributes } from 'react';

class InputPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return(
      <form className="PlayerInputForm" onSubmit={this.handleSubmit} >
        <label className="label" htmlFor="username">
          {this.props.label}
        </label>
        <input
          type="text"
          placeholder="Github Username"
          id="username"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="button"
          disabled={!this.state.username}>
          Submit
        </button>
      </form>
    ) 
  }
}

export default InputPlayer;