///<reference types="cypress"/>


import StoryCard from '../component/storyCard'

describe('<StoryCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StoryCard storyData={[]} adminActions={true} />)
  })
})