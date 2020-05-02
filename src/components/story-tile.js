import React from 'react'
import PropTypes from 'prop-types'

import './story-tile.css'

const StoryTile = ({conflict, location, name, status, children}) => (
  <section className="story-tile">
    <h2>{name}</h2>
    <div className="content-wrapper">
      <div className="image-wrapper">
        {children} 
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <h4>{conflict}</h4>
          <h4>MIA:</h4>
          <p>{location}</p>
          <h4>Status:</h4>
          <p style={{marginBottom: 0}}>{status}</p>
        </div>
      </div>
    </div>
    
  </section>
)

StoryTile.propTypes = {
  conflict: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default StoryTile
