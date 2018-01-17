import React from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = (props) => {
  const languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python', 'CSS']

  return (
    <div>
       <ul className="langueges" >
          {
            languages.map(lang => {
              return (
                <li
                  onClick={props.onSelect.bind(null, lang)}
                  style={lang === props.selectedLanguage ? {color: 'red', fontWeight: 'bold'} : null}
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

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectLanguage;