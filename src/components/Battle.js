import React, { Component } from 'react';
import InputPlayer from './InputPlayer';

class Battle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;
      return newState;
    })    
  }

  render() {
    const playerOne = this.state.playerOneName;
    const playerTwo = this.state.playerTwoName;
    return (
      <div className="battleBody">
        {!playerOne &&
          <InputPlayer 
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit}
          />}

        {!playerTwo &&
          <InputPlayer 
            id='playerTwo'
            label='Player Two'
            onSubmit={this.handleSubmit}
          />}
      </div>
    )
  }
}

export default Battle;