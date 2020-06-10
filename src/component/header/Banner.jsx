import React, { Fragment } from 'react'

const Banner = () => {
  return (
    <Fragment>
      <div className="b-details">
        <div className="main-logo"><img src={require('../../designMaterials/header/logo.png')} alt="logo" /></div>
        <div className="b-icons"><img src={require('../../designMaterials/header/banner_details.png')} alt="banner details" /></div>
        <div className="banner-img"> <img src={require('../../designMaterials/header/banner_img.png')} alt="banner img" /></div>
      </div>
      <div className="b-content">
        <h1 className="logo-header">explore the planets</h1>
        <div className="slogan">
          <h2>astronomical information about the universe</h2>
        </div>
        <div className="defination">
          <p>We are a group of amateur astronomers working together to improve astronomical knowledge and observational skills. We make ourselves and our instruments available to promote public interest in astronomy. Cosmos members are a varied group of colleagues who share a curiosity about the sky. Some members are scientists or engineers, while others are artists or craftspeople, building contractors or college students. Ability levels span the range from novice to expert.</p>
        </div>
      </div>
    </Fragment >
  )
}

export default Banner