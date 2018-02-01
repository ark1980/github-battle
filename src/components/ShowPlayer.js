import React from 'react';

const ShowPlayer = (props) => {
  return(
    <div>
      <div className="column">
        <img className='avatar' src={props.avatar} alt={`image of ${props.username}`}/>
        <h2>@{props.username}</h2>
      </div>
      <button 
        className="reset"
        onClick={props.onReset.bind(null, props.id)}>
          RESET
      </button>
    </div>
  )
}

export default ShowPlayer;