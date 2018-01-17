import React, { Component } from 'react';
import SelectLanguage from './selectLanguage';

class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  

  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang });
  };

  render() {
    return(
      <div>
        <SelectLanguage 
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

export default Popular;