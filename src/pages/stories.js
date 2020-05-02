import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import StoryTile from '../components/story-tile'

const MIA_STORIES = [
  {
    conflict: 'World War II',
    imageName: 'TheodoreJThompson.jpg',
    location: 'Delia, Sicily, Italy',
    name: 'Theodore J. Thompson',
    path: '',
    status: 'Located 2001, Not Yet Recovered',
  },
  {
    conflict: 'World War II',
    imageName: 'NormanFWhittredge.jpg',
    location: 'Anami Oshima, Japan',
    name: 'Norman F. Whittredge',
    path: '',
    status: 'Located 2003, Not Yet Recovered',
  },
  {
    conflict: 'World War II',
    imageName: 'plane_repatriation.jpg',
    location: 'Cape Ward Hunt, Papua New Guinea',
    name: 'Joseph Thompson',
    path: '',
    status: 'Recovered 2004, Interred in Arlington August, 2008',
  },
  {
    conflict: 'World War II',
    imageName: 'Wurtz_Gowen_flag.jpg',
    location: 'Papua New Guinea',
    name: 'Harold F. Wurtz/Harriet E. Gowen',
    path: '',
    status: 'Returned to family 1999',
  },
  {
    conflict: 'Korean War',
    imageName: 'Charles_Garrison.gif',
    location: 'Korea',
    name: 'Charles Garrison',
    path: '',
    status: 'Not Yet Recovered',
  }
];

const StoriesPage = () => (
  <Layout>
    <SEO title="Their Stories" />
    <h2>Their Stories</h2>
    <p>Read these stories about some of our heroes...</p>
    <ul>
      {MIA_STORIES.map(story => <StoryTile conflict={story.conflict} imageName={story.imageName} location={story.location} name={story.name} status={story.status} />)}
    </ul>
  </Layout>
)

export default StoriesPage
