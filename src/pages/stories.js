import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const StoriesPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Their Stories</h2>
    <p>Read these stories about some of our heroes...</p>
    <ul>
      <li>Theodore J. Thompson</li>
      <li>Norman F. Whittredge</li>
      <li>Joseph Thompson</li>
      <li>Harold F Wurtz/Harriet E Gowen</li>
      <li>Charles Garrison</li>
    </ul>
  </Layout>
)

export default StoriesPage
