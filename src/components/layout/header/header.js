import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import BannerImage from './bannerImage'

const Header = ({ siteTitle, menuLinks }) => (
  <>
  <div
    style={{
      background: `#3b3b3b`,
      height: '81px',
    }}
  >
    <BannerImage/>
  </div>
    <nav style={{ color: 'white', display: 'flex', flex: 1, background: `#224E7A`, }}>
    {
      menuLinks.map(link =>
        <li key={link.name} style={{
            color: 'white',
            listStyleType: 'none',
            marginTop: '8px'
          }}
          onMouseOver={"this.style.color='red'"}
          onMouseOut={"this.style.color='blue'"}>
          <Link to={link.link} style={{ color: 'white', margin: '0 8px 0 8px' }}>{link.name}</Link>
        </li>)
    }
  </nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Header
