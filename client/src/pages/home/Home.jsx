import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import { cards, projects } from "../../data";

import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard.jsx";



const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide item={5}>
        {cards.map(card => {
          return <CatCard item={card} key={card.id} />
        })}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/Workora.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Workora business</h1>
            <h1>A business solution designed for <i>teams</i></h1>
            <p>
              Workora business is a business solution designed for teams. It
              helps teams to collaborate, communicate, and work together on
              projects.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Collaborative workspace
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Workora Business</button>
          </div>
          <div className="item">
            <img src="./img/work.png" alt="" />
          </div>
        </div>
      </div>
      <Slide item = {4}>
        {projects.map(project => {
          return <ProjectCard item={project} key={project.id} />
        })}
      </Slide>
    </div>
  )
}

export default Home

