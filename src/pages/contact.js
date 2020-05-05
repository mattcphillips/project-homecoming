import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <section>
      <h4>Contact us via email at:</h4>
      <p>
        <a href='mailto:projecthomecominginfo@gmail.com'>projecthomecominginfo@gmail.com</a>
      </p>
      <h4>or via mail at:</h4>
      <address>
        Project Homecoming<br/>
        273 Cleveland Avenue<br/>
        Mill Valley CA 94941-3555
      </address>
    </section>
  </Layout>
)

export default ContactPage
