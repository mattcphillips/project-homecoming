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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <BannerImage/>
      <form style={{marginTop: 16}} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="N4KGP7JPWMSCE" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>

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
