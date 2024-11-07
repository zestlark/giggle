///<reference types="cypress"/>
import React from 'react'
import Header from '../component/header'
import Banner from '../component/banner'

describe('<Header />', () => {
  it('renders', () => {

    const bannerData = {
      bannerImageUrl: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      title: 'hello',
      description: 'test',
      url: '/stories/'
  }

    cy.mount(<Banner bannerData={bannerData} align='center' fullstory={true} />)
    cy.task('myLog', 'hello')
    cy.task('getData', 'https://jsonplaceholder.typicode.com/posts').then((data:any) => cy.log(data));
  })
})