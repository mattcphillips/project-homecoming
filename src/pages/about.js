import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import AboutUsImage from '../components/images/about-us'

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h2>About Project Homecoming</h2>
    <section>
      <p>
        <strong>Founder: Keith Phillips</strong>
      </p>
      <AboutUsImage />
      <p>Project Homecoming was founded by me, Keith Phillips, of San Francisco. In retrospect, my getting involved in this field was inevitable, although at the time it was completely unplanned.</p>
      <p>A family tradition of service has given me an interest in Military History that has taken me throughout the world. My interest in village cultures often brings me to remote locations. Some years ago those interests merged and brought me to Pelelieu Island in Palau. That controversial, hard fought World War II battle by US Marines and Army forces took place on an island that is in many respects untouched since the war. As my local guide showed me the battle sites he pointed out a cliff side that had been honeycombed with Japanese occupied caves during the invasion. Brush fires burned in largely empty fields and an occasional muffled pop signaled old munitions cooking off. Many of these caves were sealed by American forces during the war, and subsequent erosion was re-opening some. We found one such cave, and the remains of its Japanese occupants. The sacred nature of finding a lost soldier, regardless of nationality, touched me and brought the reality of the war home to me.</p>
      <p>A later visit to the Solomon Islands led me to wrecked American planes, whose occupants I assumed had been recovered after the war, an activity that I knew was still undertaken by the US in South East Asia and that I assumed took place elsewhere as well. My growing interest in the Missing led me to begin reading more extensively about them. A reference in David P Colley’s Safely Rest to an elderly friend from church whose family was related to a protagonist was all I needed to immerse myself in the question of “Are the missing still recovered, and if so how?”. These inquiries led me to Bryan Moon, an American born in the UK whose affection for the American airmen he met in England as a child led him to dedicate his retirement years to helping American families discover what became of their missing loved ones. Bryan invited me to join him and a small group that was going to Papua New Guinea to look into some reported American remains.</p>
      <p>I went to New Guinea expecting to find nothing. At 50 years old, I was one of the youngest people on the team and I presumed that anywhere I could visit, let alone my nearly 80 year old host, was accessible enough that the US government would have been there decades ago. Instead I found villagers that had quietly taken care of the wrecks and remains of our war dead for 60 years. Subsequent conversations with others in Europe and elsewhere confirmed my conviction that in this topic, the returning of the dead, goodwill and a spirit of cooperation was everywhere among the people. So the question was, if the local population knows of remains, why aren’t they home yet?</p>
      <p>
        <strong>Mailing Address:</strong>
      </p>
      <address>
        Project Homecoming<br/>
        273 Cleveland Avenue<br/>
        Mill Valley CA 94941-3555
      </address>
    </section>
    
  </Layout>
)

export default AboutPage
