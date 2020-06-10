import React, { useState } from 'react'
import "./planets.scss"
import planetList from "../../datas/planets"

const Planets = () => {
  const [p1, setP1] = useState(0)
  const [p2, setP2] = useState(1)
  const [p3, setP3] = useState(2)


  const upIndex = () => {
    if (p1 < planetList.length - 1) {
      setP1(p1 + 1)
    } else {
      setP1(0)
    }
    if (p2 < planetList.length - 1) {
      setP2(p2 + 1)
    } else {
      setP2(0)
    }
    if (p3 < planetList.length - 1) {
      setP3(p3 + 1)
    } else {
      setP3(0)
    }
  }
  const downIndex = () => {
    if (p1 > 0) {
      setP1(p1 - 1)
    } else {
      setP1(planetList.length - 1)
    }
    if (p2 > 0) {
      setP2(p2 - 1)
    } else {
      setP2(planetList.length - 1)
    }
    if (p3 > 0) {
      setP3(p3 + - 1)
    } else {
      setP3(planetList.length - 1)
    }
  }
  return (
    <div className="planets-section noselect">
      <div className="p-details">
        <div className="star-team">
          <img className="elipse" src={require('../../designMaterials/planets/elipse.png')} alt="" />
          <img className="line" src={require('../../designMaterials/planets/line.png')} alt="" />
        </div>
        <img className="sun" src={require('../../designMaterials/planets/sun.png')} alt="" />
        <img className="stars" src={require('../../designMaterials/planets/stars.png')} alt="stars" />
      </div>
      <div className="p-container">
        <div className="p-header"><h2 className="section-headers">planets</h2></div>
        <div className="p-content">
          <div className="slide"><button className="prev" onClick={() => upIndex()}></button></div>
          <div className={planetList[p1].class}>
            <div className="p-info">
              <p>{planetList[p1].info}</p>
            </div>
            <div className="btn-details">
              <button> <span>details</span></button>
            </div>
          </div>
          <div className={planetList[p2].class}>
            <div className="p-info">
              <p>{planetList[p2].info}</p>
            </div>
            <div className="btn-details">
              <button> <span>details</span></button>
            </div>
          </div>
          <div className={planetList[p3].class}>
            <div className="p-info">
              <p>{planetList[p3].info}</p>
            </div>
            <div className="btn-details">
              <button> <span>details</span></button>
            </div>
          </div>
          <div className="slide"><button className="next" onClick={() => downIndex()}></button></div>
        </div>
      </div>
    </div>
  )
}
export default Planets
