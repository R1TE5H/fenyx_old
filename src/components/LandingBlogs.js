import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/componentStyles/swiperLanding.css";
import { Link } from "react-router-dom";

export default function LandingBlogs() {
  const posts = [
    {
      id: 1,
      header: "How Inflation Works",
      text: "Learn how inflation works and what it means for your future.",
    },
    {
      id: 2,
      header: "Tricks of the Trade",
      text: "What goes into a great renovation? Learn some quick tips and recommendations to boost your DIY projects. ",
    },
    {
      id: 3,
      header: "Why the Rich Invest in Real Estate",
      text: "What do the rich know that you don't? Learn why the wealth invest in Real Estate instead of traditional investments.",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "70%",
          minWidth: "300px",
          height: "20vw",
          minHeight: "375px",
          marginBottom: "10%",
          borderRadius: "10px",
          filter: `drop-shadow(0px 0px 10px rgba(0,0,0,0.3))`,
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className="swiper-background">
            <div className="swiper-text-container">
              <p className="swiper-text">
                <span className="subHeader">{post.header}</span>
                <>
                  <br />
                  <br />
                  <span>{post.text}</span>
                </>
              </p>
              <Link to="/blogs" className="link swiper-link">
                Read More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
