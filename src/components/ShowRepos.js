import React from 'react';
import PropTypes from 'prop-types';

const ShowRepos = (props) => {
  return (
    <div>
      <ul className="popular-list" >
        {
          props.repos.map((repo, index) => {
            return (
              <li key={repo.id} className="popular-item" >
                <ul>
                  <li><h4>#{index+1}</h4></li>
                  <li>
                    <img
                      className="avatar"
                      src={repo.owner.avatar_url}
                      alt={`Avatar for ${repo.owner.login}`} />
                  </li>
                  <li>
                    <a 
                      href={repo.html_url}
                      target="_blank"
                      >
                      {repo.name}
                    </a>
                  </li>
                  <li>@{repo.owner.login}</li>
                  <li>{`${repo.stargazers_count} stars`}</li>
                </ul>
                
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

ShowRepos.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default ShowRepos;