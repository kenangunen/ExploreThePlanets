import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className="about-section noselect">
      <div className="a-details">
        <div> <img className="a-img" src={require('../../designMaterials/about/planet.png')} alt="Planet" /></div>
        <div> <img className="a-stars" src={require('../../designMaterials/about/details.png')} alt="Details" /></div>


      </div>
      <div className="a-container">
        <div className="a-header"><h2 className="section-headers">about us</h2></div>
        <div className="p-content"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates quam accusamus labore non aliquid placeat nulla dolorum. Nihil assumenda voluptate, eaque sint nam saepe provident rerum quam numquam, quidem sapiente, alias iste minima voluptatum reprehenderit. Suscipit accusantium consequuntur magni possimus hic error deleniti exercitationem quis aliquam officia unde facere, laborum fugiat! Animi esse sint consequatur ullam magni voluptatum fugit atque quas, voluptates incidunt voluptatem eveniet harum impedit maxime veniam ratione magnam reiciendis ex? Quos voluptate suscipit, ab rem tempora nam quas sapiente inventore at facere. Sapiente corrupti deserunt architecto, quas fugit voluptates vitae nam distinctio autem illo hic laboriosam.</p></div>
      </div>
    </div>
  )
}

export default About
