import React, { useState, useEffect } from 'react';
import './members.css';
import member_pic from '../../assets/Member_Pic.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Members = () => {

  const members = [
    {
      index: 1,
      pic: member_pic,
      name: 'John Doe',
      title: 'Software Engineer',
      whatsapp: 'https://wa.me/1234567890',
      linkedin: 'https://www.linkedin.com/in/johndoe'
    },
    {
      index: 2,
      pic: member_pic,
      name: 'Jane Smith',
      title: 'Project Manager',
      whatsapp: 'https://wa.me/0987654321',
      linkedin: 'https://www.linkedin.com/in/janesmith'
    },
    {
      index: 3,
      pic: member_pic,
      name: 'Praveen',
      title: 'Project Manager',
      whatsapp: 'https://wa.me/0987654321',
      linkedin: 'https://www.linkedin.com/in/janesmith'
    },
    {
      index: 4,
      pic: member_pic,
      name: 'Sibi',
      title: 'Project Manager',
      whatsapp: 'https://wa.me/0987654321',
      linkedin: 'https://www.linkedin.com/in/janesmith'
    },
    // Add more members as needed
  ];

  return (
    <section className="members section" id="members">
        <h2 className="section__title">Our Team</h2>
        <span className="section__subtitle">Neque porro quisquam  dbsdsd fhfgfsgfgfsdgfgfsfgig fi hbd djhv jvhj  hkvhc a h h ch  asj h s jh est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit ametgkshj.</span>
            <div className="home__buttons">
              <button className="btn button--flex btn-primary">Board Members</button>
              <button className="btn button--flex btn-secondary">Club Members</button>
            </div>
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
                    {members.map(({index, name, pic, title, whatsapp, linkedin}) => {
                        return (
                            <SwiperSlide className="member__card" key={index}>
                               
                                  <div>
                                    <img src={pic} className='member__img' alt="Profile Picture" />
                                    <h2 className='member__name'>{name}</h2>
                                    <h3 className='member__designation'>{title}</h3>
                                    <div className="icons">
                                      <a href={whatsapp} className='whatsapp-icon'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.25301 16.494L5.97701 16.917C7.19795 17.6291 8.5866 18.0029 10 18C11.5823 18 13.129 17.5308 14.4446 16.6518C15.7602 15.7727 16.7855 14.5233 17.3911 13.0615C17.9966 11.5997 18.155 9.9911 17.8463 8.4393C17.5376 6.88743 16.7757 5.46197 15.6569 4.34315C14.538 3.22433 13.1126 2.4624 11.5607 2.15372C10.0089 1.84504 8.4004 2.00346 6.93855 2.60896C5.47674 3.21447 4.22731 4.23984 3.34826 5.55544C2.46921 6.87103 2.00001 8.4177 2.00001 10C2.00001 11.436 2.37701 12.813 3.08401 14.024L3.50601 14.748L2.85301 17.149L5.25301 16.494ZM0.00401334 20L1.35601 15.032C0.465153 13.5049 -0.00288661 11.768 1.33948e-05 10C1.33948e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.2328 20.0029 6.49667 19.5352 4.97001 18.645L0.00401334 20ZM6.39101 5.308C6.52501 5.298 6.66001 5.298 6.79401 5.304C6.84801 5.308 6.90201 5.314 6.95601 5.32C7.11501 5.338 7.29001 5.435 7.34901 5.569C7.64701 6.245 7.93701 6.926 8.217 7.609C8.279 7.761 8.242 7.956 8.124 8.146C8.0429 8.2745 7.95507 8.3986 7.86101 8.518C7.74801 8.663 7.50501 8.929 7.50501 8.929C7.50501 8.929 7.40601 9.047 7.44401 9.194C7.45801 9.25 7.50401 9.331 7.54601 9.399L7.60501 9.494C7.86101 9.921 8.205 10.354 8.625 10.762C8.745 10.878 8.862 10.997 8.988 11.108C9.456 11.521 9.986 11.858 10.558 12.108L10.563 12.11C10.648 12.147 10.691 12.167 10.815 12.22C10.877 12.246 10.941 12.269 11.006 12.286C11.0732 12.3031 11.1439 12.2999 11.2093 12.2767C11.2746 12.2536 11.3316 12.2116 11.373 12.156C12.097 11.279 12.163 11.222 12.169 11.222V11.224C12.2193 11.1771 12.2791 11.1415 12.3443 11.1196C12.4095 11.0977 12.4786 11.09 12.547 11.097C12.607 11.101 12.668 11.112 12.724 11.137C13.255 11.38 14.124 11.759 14.124 11.759L14.706 12.02C14.804 12.067 14.893 12.178 14.896 12.285C14.9 12.352 14.906 12.46 14.883 12.658C14.851 12.917 14.773 13.228 14.695 13.391C14.6416 13.5022 14.5707 13.6042 14.485 13.693C14.3841 13.7989 14.2736 13.8954 14.155 13.981C14.114 14.0119 14.0723 14.0419 14.03 14.071C13.9056 14.1499 13.7778 14.2233 13.647 14.291C13.3895 14.4278 13.1052 14.5063 12.814 14.521C12.629 14.531 12.444 14.545 12.258 14.535C12.25 14.535 11.69 14.448 11.69 14.448C10.2683 14.074 8.9534 13.3735 7.85001 12.402C7.62401 12.203 7.41501 11.989 7.20101 11.776C6.31101 10.891 5.63901 9.936 5.23101 9.034C5.02218 8.5913 4.90938 8.1094 4.90001 7.62C4.89589 7.01285 5.09436 6.42167 5.46401 5.94C5.53701 5.846 5.60601 5.748 5.72501 5.635C5.85201 5.515 5.93201 5.451 6.01901 5.407C6.13469 5.34903 6.26088 5.31502 6.39001 5.307L6.39101 5.308Z" fill="#00A944"/>
                                        </svg>
                                      </a>
                                      <a href={linkedin} className='linkedin-icon'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19.8 3L4.2 3C3.88174 3 3.57652 3.12643 3.35147 3.35147C3.12643 3.57652 3 3.88174 3 4.2L3 19.8C3 20.1183 3.12643 20.4235 3.35147 20.6485C3.57652 20.8736 3.88174 21 4.2 21L19.8 21C20.1183 21 20.4235 20.8736 20.6485 20.6485C20.8736 20.4235 21 20.1183 21 19.8L21 4.2C21 3.88174 20.8736 3.57652 20.6485 3.35147C20.4235 3.12643 20.1183 3 19.8 3ZM8.3322 18.3564H5.6244L5.6244 9.75H8.3322L8.3322 18.3564ZM6.978 8.5686C6.6667 8.56765 6.36266 8.47447 6.10429 8.30083C5.84591 8.1272 5.64479 7.88088 5.52632 7.59301C5.40784 7.30513 5.37734 6.9886 5.43865 6.6834C5.49996 6.3782 5.65035 6.09801 5.8708 5.87822C6.09126 5.65843 6.37191 5.5089 6.67729 5.44852C6.98268 5.38814 7.29912 5.41961 7.58663 5.53895C7.87414 5.6583 8.11984 5.86018 8.29269 6.11908C8.46555 6.37798 8.5578 6.6823 8.5578 6.9936C8.55788 7.20086 8.51704 7.40609 8.43761 7.59753C8.35819 7.78897 8.24175 7.96284 8.09497 8.10917C7.9482 8.2555 7.77397 8.37141 7.58229 8.45025C7.39062 8.52909 7.18526 8.56931 6.978 8.5686ZM18.3726 18.3564H15.72V14.1936C15.72 13.1814 15.72 11.9436 14.31 11.9436C12.9 11.9436 12.7302 13.0128 12.7302 14.1372V18.4128H10.08L10.08 9.75L12.5616 9.75V10.9314H12.618C12.8739 10.4889 13.2453 10.1243 13.6925 9.87657C14.1396 9.62885 14.6457 9.50732 15.1566 9.525C17.8644 9.525 18.372 11.325 18.372 13.6314L18.3726 18.3564Z" fill="#255ABB"/>
                                        </svg>
                                      </a>
                                    </div>
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

export default Members;


     