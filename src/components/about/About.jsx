import React from 'react';
import './about.css';
import about_img from '../../assets/About_Img.png';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Us</h2>
        <div className="about__container container grid">
        <span className="section__subtitle">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit ametgkshj.</span>
            <img src={about_img} alt="" className="about__img" />
        </div>
    </section>
  );
};

export default About;
