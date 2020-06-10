import React from 'react'
import './ourTeam.scss'

const OurTeam = () => {
  return (
    <div className="team-section noselect">
      <div className="t-details">
        <img className="t-info-img" src={require('../../designMaterials/ourTeams/info.png')} alt="Info" />
        <div className="info">
          <p><span className="count">87</span> <span>space</span> <span>explores</span></p>
          <p><span className="count">563</span> <span>company</span> <span>members</span></p>
        </div>
      </div>
      <div className="t-container">
        <div className="t-header"><h2 className="section-headers">our team</h2></div>
        <div className="t-content">
          <div className="t-box">
            <div className="first"></div>
            <div className="person-info">
              <span className="p-name">alan</span>
              <span className="p-sname">smith</span>
              <span className="p-job">chief operating officer</span>
            </div>
          </div>
          <div className="t-box">
            <div className="second"></div>
            <div className="person-info">
              <span className="p-name">laura</span>
              <span className="p-sname">stegner</span>
              <span className="p-job">office manager</span>
            </div>
          </div>
          <div className="t-box">
            <div className="third"></div>
            <div className="person-info">
              <span className="p-name">gloria</span>
              <span className="p-sname">mann</span>
              <span className="p-job">copmany founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OurTeam