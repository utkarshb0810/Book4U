import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book4U</h2>
            <p className='fs-17'>My journey with this project mirrored that of an author crafting a narrative. From the first line of code to the final brushstrokes of styling, I sculpted an experience that blended the digital and literary worlds. The Book Search App is my testament to the power of technology to illuminate the written word, inviting all who use it to explore, learn, and dream.</p>
            <p className='fs-17'>Within its virtual pages, users can embark on literary quests, exploring titles that pique their curiosity. The app's canvas was meticulously crafted, adorned with React components that seamlessly weave input fields and buttons into a tapestry of exploration. As users type queries, the app journeys into the depths of the Open Library, unraveling information about books with each keystroke.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About