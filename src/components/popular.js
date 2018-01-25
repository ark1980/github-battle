import React, { Component } from 'react';
import SelectLanguage from './selectLanguage';
import ShowRepos from './showRepos';
import api from '../utils/api';

class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  

  updateLanguage(lang) {
    this.setState({ 
      selectedLanguage: lang,
      repos: null 
    });

    api.fetchPopularRepos(lang)
    .then((repos) => {
      this.setState({
        repos: repos
      })
    })
  };

  render() {
    return(
      <div>
        <SelectLanguage 
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          !this.state.repos ? 'LOADING' : <ShowRepos repos={this.state.repos}/>
        }     
      </div>
    )
  }
}

export default Popular;