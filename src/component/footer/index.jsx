import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer-section noselect">
      <span className="created">"created by kenan"</span>
      <div className="f-content">
        <div className="f-contact">
          <p className="f-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, architecto a corrupti dolor vel explicabo, sapiente in impedit harum recusandae alias esse, voluptate dignissimos aut ex quidem perspiciatis numquam. Tempore nostrum sunt ab obcaecati aliquam alias eaque maxime.</p>
          <p className="adress">
            <span>adres:</span>
          new york, 28 jackson B-blvd ste 1020
chicago, IL 60604-2340</p>
          <p>tel:800-2345-6789</p>
        </div>
        <div className="social-media">
          <ul>
            <li><img className="fb" src={require('../../designMaterials/footer/facebook.png')} alt="facebook" /></li>
            <li><img className="tw" src={require('../../designMaterials/footer/twitter.png')} alt="twitter" /></li>
            <li><img className="yt" src={require('../../designMaterials/footer/youtube.png')} alt="youtube" /></li>
          </ul>
          <span>/exploretheplanets</span>
        </div>
        <div className="footer-logo">
          <div className="f-lg">
            <img src={require('../../designMaterials/footer/logo.png')} alt="logo" />
          </div>
          <div className="f-slogan"><h4>explore the planets</h4></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
