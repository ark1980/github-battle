import React, { Component } from 'react';

class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  

  updateLanguage(lang) {
    this.setState(() => { 
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    const languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python']

    return(
      <div>
        <ul className="langueges" >
          {
            languages.map(lang => {
              return (
                <li
                  onClick={this.updateLanguage.bind(null, lang)}
                  style={lang === this.state.selectedLanguage ? {color: 'red', fontWeight: 'bold'} : null}
                  key={lang}
                >
                  {lang}
                </li>
              )
            })
          }
        </ul>    
      </div>
    )
  }
}

export default Popular;