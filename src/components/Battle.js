import React, { Component } from 'react';
import InputPlayer from './InputPlayer';
import ShowPlayer from './ShowPlayer';
import { Link } from 'react-router-dom';

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
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;
      return newState;
    })
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }

  render() {
    const playerOne = this.state.playerOneName;
    const playerTwo = this.state.playerTwoName;
    const playerOneImage = this.state.playerOneImage;
    const playerTwoImage = this.state.playerTwoImage;
    const match = this.props.match;

    return (
      <div>
        <div className="battleBody">
          {!playerOne &&
            <InputPlayer 
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage !== null &&          
            <ShowPlayer
              avatar={playerOneImage}
              username={playerOne}
              id='playerOne'
              onReset={this.handleReset} 
            />}

          {!playerTwo &&
            <InputPlayer 
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}

          {playerTwoImage !== null &&          
            <ShowPlayer
              avatar={playerTwoImage}
              username={playerTwo}
              id='playerTwo'
              onReset={this.handleReset} 
            />}
        </div>
        
        {playerOneImage && playerTwoImage &&
          <Link className="button" 
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${playerOne}&playerTwoName=${playerTwo}`
            }}>
              Battle
          </Link>
        }
        
      </div>
    )
  }
}

export default Battle;