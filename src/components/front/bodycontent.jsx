import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Image2 from "../../images/floating_fries_02-removebg-preview.png";
import Image3 from "../../images/floating_fries_01.png";

const BodyContent = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    AOS.init();
    axios
      .get("http://127.0.0.1:8000/api/banners")
      .then((res) => setBanners(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bgcolor1">
      <div className="bannertext">
        <p
          className="backgroundtext"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Delicious
        </p>
        <p
          className="backgroundtext1"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Burgers
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        {banners.map((banner) => (
          <img
            key={banner.id}
            className="banner-image"
            src={banner.image}
            alt="banner"
            width="1200"
            height="500"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        ))}
      </div>
      <div>
        <img
          className="banner-image2"
          src={Image3}
          alt="fries"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <img
          className="banner-image3"
          src={Image2}
          alt="fries"
          width="300px"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </div>
      <div>
        <h1
          className="banner-text2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Bestsellers
        </h1>
      </div>
    </div>
  );
};

export default BodyContent;
  