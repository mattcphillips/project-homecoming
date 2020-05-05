import React from 'react'

import Layout from '../components/layout/layout'
import HomeImage from '../components/images/home'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout style={{ background: 'ghostwhite' }}>
    <SEO title="Home" keywords={[`mia`, `ww2`, `application`, `react`]} />
    <h3>Our Mission:</h3>
    <section>
    <p>Project Homecoming is committed to speeding the recovery of the 80,000 American soldiers still missing from World War II, Korea the Cold War and Vietnam.</p>
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <HomeImage maxWidth={900}/>
    </div>

    <p>
      <strong>Leave no one behind</strong> - America is a compassionate country. One that promises its military, and their families, that we’ll leave no stone unturned to bring the missing home. All Americans stand behind this promise, but in practice, there is much more we must do. Project Homecoming exists to close that gap. We believe progress must be made in three major areas:
      <ol>
        <li>Assisting efforts to locate the missing</li>
        <li>Educating the public to bring awareness to the issue, which in turn increases funding and helps the Government's own efforts</li>
        <li>Advocating for individual famiiies whose loved one's remains are located but not yet returned</li>
      </ol>
    </p>
    <p>
      <strong>Over 80,000 American soldiers remain missing from World War II, Korea, the Cold War and Vietnam.</strong> To the families, these missing are not ancient history, their loss is real and current. Despite the Government's best efforts, only approximately 200 are returned per year. Given the aging of the children and siblings of these soldiers and the imminent passing of the witnesses to the battles in which these men were lost, the task of recovery grows more urgent.
    </p>
    <p>
      <strong>Explore our site to learn the stories of these families.</strong> Learn of these soldiers, sailors and airmen and women’s sacrifices, and see how friends around the world co-operate to get them home. Then commit yourself to honoring these missing by helping us bring them home.
    </p>
    </section>
  </Layout>
)

export default IndexPage
