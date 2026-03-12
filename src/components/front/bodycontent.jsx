import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "../../images/floating_burger_01.png";
import Image2 from "../../images/floating_fries_02-removebg-preview.png";
import Image3 from "../../images/floating_fries_01.png";

const BodyContent = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    AOS.init({ duration: 1000 });

    axios.get("http://127.0.0.1:8000/api/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));

  }, []);

  return (
    <div className="bgcolor1">

      {/* Banner Section */}

      <div className="bannertext">
        <p className="backgroundtext" data-aos="zoom-in">
          Deliciousss
        </p>

        <p className="backgroundtext1" data-aos="zoom-in">
          Burgers
        </p>
      </div>

      <div>
        <center>
          <img
            className="banner-image"
            src={Image}
            alt="burger"
            width="1200"
            height="500"
            data-aos="zoom-in"
          />
        </center>
      </div>

      <div>
        <img className="banner-image2" src={Image3} alt="fries" data-aos="fade-right" />
        <img className="banner-image3" src={Image2} alt="fries" width="300" data-aos="fade-left" />
      </div>

      {/* Bestsellers Title */}

      <div>
        <h1 className="banner-text2" data-aos="fade-up">
          Bestsellers
        </h1>
      </div>

      {/* Dynamic Products */}

      <div className="product-grid">

        {products.map(product => (

          <div key={product.id} className="product-card" data-aos="zoom-in">

            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

            <span>{product.category}</span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default BodyContent;