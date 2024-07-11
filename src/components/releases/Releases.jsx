import React, { useState, useEffect } from 'react';
import './releases.css';
// import member_pic from '../../assets/Member_Pic.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Releases = () => {

  const releases = [
    {
      index: 1,
      pic: "https://www.barrydale.org.za/events/have-an-upcoming-event/have-an-upcoming-event-1.jpg",
      release_title: 'Release 1',
      release_description: 'This is the sample description for the release 1 of Rotaract Club of Coimbatore Royals',
    },
    {
      index: 2,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4BJNnP2mMp_PebdRpWJoI1HO-jROHq66FYpgv3aQF6uVaJFmD6A9b4DiGHquhHGhMQ&usqp=CAU",
      release_title: 'Release 2',
      release_description: 'This is the sample description for the release 2 of Rotaract Club of Coimbatore Royals',
    },
    {
      index: 3,
      pic: "https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg",
      release_title: 'Release 3',
      release_description: 'This is the sample description for the release 3 of Rotaract Club of Coimbatore Royals',
    },
    {
      index: 4,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtt3TKQd7xscjszsZ11w-SHO_7L-hVIUUog&usqp=CAU",
      release_title: 'Release 4',
      release_description: 'This is the sample description for the release 4 of Rotaract Club of Coimbatore Royals',
    },
    // Add more members as required
  ];

  return (
    <section className="members section" id="releases">
        <h2 className="section__title">Club Releases</h2>
        <span className="section__subtitle">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit ametgkshj.</span>
        <div className="members__container container grid">
            {/* <img src={members_img} alt="" className="members__img" /> */}

            <div className="members__data">
              <Swiper className="members__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}

                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 48,
                  },
                }}
                modules={[Autoplay, Pagination]}
                >
                    {releases.map(({index, release_title, pic, release_description, whatsapp, linkedin}) => {
                        return (
                            <SwiperSlide className="member__card" key={index}>
                                  <div>
                                    <img src={pic} className='member__img' alt="Profile Picture" />
                                    <h2 className='member__name release_title'>{release_title}</h2>
                                    <h3 className='member__designation release_description'>{release_description}</h3>
                                  </div>
                            </SwiperSlide>
                        )
                    })}
              </Swiper>
            </div>
        </div>
    </section>
  );
};

export default Releases;


     