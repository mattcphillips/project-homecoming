import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import BannerImage from '../../images/banner'

import './header.css'

const Header = ({ menuLinks }) => (
  <>
    <div
      style={{
        background: `#3b3b3b`,
        height: 81,
      }}
    >
      <BannerImage/>
    </div>
      <nav className="nav">
      {
        menuLinks.map(link =>
          <li key={link.name} className="link-item">
            <Link to={link.link} className="link">{link.name}</Link>
          </li>)
      }
    </nav>
  </>
)

Header.propTypes = {
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  menuLinks: [],
}

export default Header
