import React from 'react';
import './home.css';
import home_img from '../../assets/Home_Image.png'

function Home() {
  return (
    <section id="home" className="home-section section">
      <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__info">
                    <h1>ROTARACT CLUB OF COIMBATORE ROYALS</h1>
                    <p>has a legacy from R.I District 3200 to 3201 was started in the year 2007 with the motto of "self-development and fellowship through service" still gleams with the same aim and goal. The club was chartered on 29th October 2008, sponsored by the Rotary Club of Coimbatore Texcity, Adding a feather to its crown. PDRR.Rtr.C.V.Karthikeyan from Rotaract club of Coimbatore Texcity served as the Second DDR of RI District 3201. Currently, it is under the leadership of Rtr.P. Malchielraj as the President.</p>
                    <div className="home__buttons">
                      <button className="btn button--flex btn-primary">Join us now</button>
                      <button className="btn button--flex btn-secondary">Learn more</button>
                    </div>
                </div>
                <div className="home__img">
                  <img src={home_img} alt="Home Img" />
                </div>
            </div>

        </div>

    </section>
  )
}

export default Home