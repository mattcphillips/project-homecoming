import React from 'react'
import PropTypes from 'prop-types';

const StoryTile = ({conflict, imageName, location, name, path, status}) => (
  <div style={{backgroundColor: 'beige', borderRadius: '4px'}}>
    <h2>{name}</h2>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{backgroundImage: `url("../images/${imageName}")`, height: '100px', width: '100px'}}/>
      <div>
        <h4>{conflict}</h4>
        <h4>MIA:</h4>
        <p>{location}</p>
        <h4>Status:</h4>
        <p>{status}</p>
      </div>
    </div>
  </div>
)

StoryTile.propTypes = {
  conflict: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default StoryTile
