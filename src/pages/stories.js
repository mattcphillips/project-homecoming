import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import StoryTile from '../components/story-tile'

import StoryOne from '../components/images/story-one'
import StoryTwo from '../components/images/story-two'
import StoryThree from '../components/images/story-three'
import StoryFour from '../components/images/story-four'
import StoryFive from '../components/images/story-five'

import './stories.css'

const MIA_STORIES = [
  {
    conflict: 'World War II',
    imageComponent: <StoryOne />,
    location: 'Delia, Sicily, Italy',
    name: 'Theodore J. Thompson',
    path: '/stories/theodore-thompson',
    status: 'Located 2001, Not Yet Recovered',
  },
  {
    conflict: 'World War II',
    imageComponent: <StoryTwo />,
    location: 'Anami Oshima, Japan',
    name: 'Norman F. Whittredge',
    path: '/stories/norman-whittredge',
    status: 'Located 2003, Not Yet Recovered',
  },
  {
    conflict: 'World War II',
    imageComponent: <StoryThree />,
    location: 'Cape Ward Hunt, Papua New Guinea',
    name: 'Joseph Thompson',
    path: '/stories/joseph-thompson',
    status: 'Recovered 2004, Interred in Arlington August, 2008',
  },
  {
    conflict: 'World War II',
    imageComponent: <StoryFour />,
    location: 'Papua New Guinea',
    name: 'Harold F. Wurtz/Harriet E. Gowen',
    path: '/stories/harry-and-harriet',
    status: 'Returned to family 1999',
  },
  {
    conflict: 'Korean War',
    imageComponent: <StoryFive />,
    location: 'Korea',
    name: 'Charles Garrison',
    path: '/stories/charles-garrison',
    status: 'Not Yet Recovered',
  }
];

const StoriesPage = () => (
  <Layout>
    <SEO title="Their Stories" />
    <h2>Their Stories</h2>
    <p>Read these stories about some of our heroes...</p>
    <ul className="stories-grid">
    {MIA_STORIES.map(story => 
      <StoryTile conflict={story.conflict} key={story.name} location={story.location} name={story.name} path={story.path} status={story.status}>
        {story.imageComponent}
      </StoryTile>
    )}
    </ul>
  </Layout>
)

export default StoriesPage
