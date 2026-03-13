// src/pages/Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../assets/css/home.css'
import Carousel from "react-bootstrap/Carousel";

// Static decoration images
import FriesLeft from "../assets/images/floating_fries_01.png";
import FriesRight from "../assets/images/floating_fries_02-removebg-preview.png";
import LogoImg from "../assets/images/image_logo_02.png";
import WaveTop from "../assets/images/red_top_wave_01.png";
import WaveBottom from "../assets/images/cream_bottom_wave_01.png";
import DeliveryImg from "../assets/images/home_01_delivery.png";
import StayHome from "../assets/images/stay_home.png";
import ChooseIcon from "../assets/images/PngItem_1746259.png";
import BikeIcon from "../assets/images/bike.png";
import DeliveryMan from "../assets/images/delivery-man_888472.png";
import CreamWave from "../assets/images/cream_top_wave_01.png";
import FloatingBurger from "../assets/images/floating_burger_02.png";
import Review1 from "../assets/images/reviews_01.png";
import Review2 from "../assets/images/reviews_02.png";
import Review3 from "../assets/images/reviews_03.png";
import Review4 from "../assets/images/reviews_04.png";

// Services
import useFetch from "../service/useFetch";
import { getBanners } from "../service/bannerService";
import { getReviews } from "../service/reviewService";
import { getSettings } from "../service/settingService";
import {
  getFeaturedProducts,
  getCarouselProducts,
} from "../service/productService";

const Home = ({ handleAddProduct }) => {
  // Fetch everything from database
  const { data: banners, loading: loadingBanners } = useFetch(getBanners);
  const { data: featured, loading: loadingFeatured } = useFetch(getFeaturedProducts);
  const { data: carousel, loading: loadingCarousel } = useFetch(getCarouselProducts);
  const { data: reviews, loading: loadingReviews } = useFetch(getReviews);
  const { data: settings, loading: loadingSettings } = useFetch(getSettings);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* ============ SECTION 1 — BANNER ============ */}
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

        {/* Banner images from DB */}
        <div style={{ textAlign: "center" }}>
          {loadingBanners ? (
            <p>Loading...</p>
          ) : (
            banners.map((banner) => (
              <img
                key={banner.id}
                className="banner-image"
                src={banner.image_url}
                alt={banner.title}
                width="1200"
                height="500"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            ))
          )}
        </div>

        {/* Static decoration fries */}
        <div>
          <img
            className="banner-image2"
            src={FriesLeft}
            alt="fries"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <img
            className="banner-image3"
            src={FriesRight}
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

      {/* ============ SECTION 2 — FEATURED PRODUCTS (3 cards) ============ */}
      <div>
        <div className="cardcontainer">
          {loadingFeatured ? (
            <p>Loading products...</p>
          ) : (
            featured.slice(0, 3).map((product, index) => (
              <div
                key={product.id}
                className={index === 2 ? "card3" : "card1"}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration={`${(index + 1) * 1000}`}
              >
                <div className={index === 2 ? "card2text" : "card1text"}>
                  {product.category_name}
                </div>
                <div className={index === 2 ? "card2text2" : "card1text2"}>
                  {product.name}
                </div>
                <div className={index === 2 ? "card2text3" : "card1text3"}>
                  {product.subtitle}
                </div>
                <div>
                  <img
                    className={index === 2 ? "card2img" : "card1img"}
                    src={product.image_url}
                    alt={product.name}
                  />
                </div>
                <div className={index === 2 ? "card2text4" : "card1text4"}>
                  ${product.price}.00
                </div>
                <div className={index === 2 ? "card2text5" : "card1text5"}>
                  {product.weight}
                </div>
                <button
                  className={index === 2 ? "card1button1" : "card1button"}
                  onClick={() => handleAddProduct(product)}
                >
                  +
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ============ SECTION 3 — 2 MORE PRODUCTS ============ */}
      <div>
        <div className="container-1">
          {loadingFeatured ? (
            <p>Loading...</p>
          ) : (
            featured.slice(3, 5).map((product, index) =>
              index === 0 ? (
                // Left large image
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="7000"
                >
                  <img
                    className="container-img"
                    src={product.image_url}
                    alt={product.name}
                  />
                  <div className="container-1text4">${product.price}.00</div>
                  <div className="card1text5">{product.weight}</div>
                  <button
                    className="card3button"
                    onClick={() => handleAddProduct(product)}
                  >
                    +
                  </button>
                </div>
              ) : (
                // Right card
                <div
                  key={product.id}
                  className="card-conatiner-1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <div className="card1text">{product.category_name}</div>
                  <div className="card1text2">{product.name}</div>
                  <div className="card1text3">{product.subtitle}</div>
                  <div>
                    <img
                      className="card1img"
                      src={product.image_url}
                      alt={product.name}
                    />
                  </div>
                  <div className="card1text4">${product.price}.00</div>
                  <div className="card1text5">{product.weight}</div>
                  <button
                    className="card1button"
                    onClick={() => handleAddProduct(product)}
                  >
                    +
                  </button>
                </div>
              ),
            )
          )}
        </div>
      </div>

      {/* ============ SECTION 4 — 2 MORE PRODUCTS ============ */}
      <div className="containercontent-4">
        {loadingFeatured ? (
          <p>Loading...</p>
        ) : (
          featured.slice(5, 7).map((product, index) =>
            index === 0 ? (
              // Left card
              <div
                key={product.id}
                className="content4card1"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="card1text">{product.name}</div>
                <div className="card4text2">{product.subtitle}</div>
                <div className="card1text3">{product.category_name}</div>
                <div>
                  <img
                    className="cardimg1"
                    src={product.image_url}
                    alt={product.name}
                    width="250px"
                    height="250px"
                  />
                </div>
                <div className="cardtext4">${product.price}.00</div>
                <div className="card1text5">{product.weight}</div>
                <button
                  className="cardbutton1"
                  onClick={() => handleAddProduct(product)}
                >
                  +
                </button>
              </div>
            ) : (
              // Right large image
              <div
                key={product.id}
                className="content4img1"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <img
                  className="container-img"
                  src={product.image_url}
                  alt={product.name}
                />
                <div className="container-1text4">${product.price}.00</div>
                <div className="card1text5">{product.weight}</div>
                <button
                  className="card3button3"
                  onClick={() => handleAddProduct(product)}
                >
                  +
                </button>
              </div>
            ),
          )
        )}
      </div>

      {/* ============ SECTION 5 — CAROUSEL ============ */}
      <img className="topimg" src={WaveTop} alt="top" />

      <Carousel fade>
        {loadingCarousel ? (
          <Carousel.Item>
            <p>Loading...</p>
          </Carousel.Item>
        ) : (
          carousel.map((product) => (
            <Carousel.Item key={product.id}>
              <img
                src={product.image_url}
                className="dark"
                alt={product.name}
              />
              <Carousel.Caption className="caption">
                <p className="cartxt1">{product.name}</p>
                <p className="cartxt2">{product.subtitle}</p>
                <img className="logo1" src={LogoImg} alt="logo" />
                <p className="logotxt">
                  {loadingSettings
                    ? "100% Grass-fed beef patty..."
                    : settings.logo_description}
                </p>
                <div className="btntxt">
                  <p className="imgtxt2">${product.price}.00</p>
                  {product.weight}
                  <button
                    className="carouselbtn"
                    onClick={() => handleAddProduct(product)}
                  >
                    +
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        )}
      </Carousel>

      <img className="bottomimg" src={WaveBottom} alt="bottom" />

      {/* ============ SECTION 6 — DELIVERY ============ */}
      <div className="bgcolor">
        <img
          className="content6img"
          src={DeliveryImg}
          alt="delivery"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <img className="content6img2" src={StayHome} alt="stay home" />

        <div className="content6base">
          <p className="content6txt1">
            {loadingSettings
              ? "Free delivery 7 day a week"
              : settings.delivery_title}
          </p>

          {/* Step 1 */}
          <div className="content6row">
            <div
              className="row1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="imgborder">
                <img className="rowimg1" src={ChooseIcon} alt="choose" />
              </span>
              <p className="rowtext1">
                {loadingSettings ? "Choose Burger" : settings.delivery_step1}
              </p>
              <p className="rowtext2">
                {loadingSettings ? "" : settings.delivery_text1}
              </p>
            </div>
            <div className="bt_bb_inner_step_line" />
          </div>

          {/* Step 2 */}
          <div className="content6row">
            <div
              className="row1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="imgborder">
                <img className="rowimg2" src={BikeIcon} alt="bike" />
              </span>
              <p className="rowtext1">
                {loadingSettings
                  ? "Delivery or Takeaway"
                  : settings.delivery_step2}
              </p>
              <p className="rowtext3">
                {loadingSettings ? "" : settings.delivery_text2}
              </p>
            </div>
            <div className="bt_bb_inner_step_line" />
          </div>

          {/* Step 3 */}
          <div
            className="content6row"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="row1">
              <span className="imgborder">
                <img className="rowimg3" src={DeliveryMan} alt="delivery man" />
              </span>
              <p className="rowtext1">
                {loadingSettings ? "Enjoy Burger" : settings.delivery_step3}
              </p>
              <p className="rowtext2">
                {loadingSettings ? "" : settings.delivery_text3}
              </p>
            </div>
            <img className="imgtop1" src={CreamWave} alt="wave" />
          </div>
        </div>
      </div>

      {/* ============ SECTION 7 — REVIEWS ============ */}
      <div className="content7bg">
        <div className="content7banner">
          <p className="content7txt">Reviews</p>
          <img className="content7img" src={FloatingBurger} alt="burger" />
        </div>

        {loadingReviews ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          // Reviews from database
          reviews.map((review, index) => {
            const reviewImages = [Review1, Review2, Review3, Review4];
            const textClasses = [
              "content7txt1",
              "content7txt2",
              "content7txt3",
              "content7txt4",
            ];
            const isEven = index % 2 === 0;

            return (
              <div key={review.id} className="content7row1">
                {isEven ? (
                  <>
                    <img
                      className={`review${index + 1}`}
                      src={review.image_url || reviewImages[index]}
                      alt={`review ${index + 1}`}
                      width="500px"
                    />
                    <span className={textClasses[index]}>
                      "{review.review_text}"
                    </span>
                  </>
                ) : (
                  <>
                    <span className={textClasses[index]}>
                      "{review.review_text}"
                    </span>
                    <img
                      className={`review${index + 1}`}
                      src={review.image_url || reviewImages[index]}
                      alt={`review ${index + 1}`}
                      width="500px"
                    />
                  </>
                )}
              </div>
            );
          })
        ) : (
          // Fallback static reviews if DB empty
          <>
            <div className="content7row1">
              <img
                className="review1"
                src={Review1}
                alt="review1"
                width="500px"
              />
              <span className="content7txt1">
                "I don't remember a single mouthful I didn't enjoy!"
              </span>
            </div>
            <div className="content7row1">
              <div className="content7txt2">
                "Pretty impressive! Legit taste of burgers!!!"
              </div>
              <img
                className="review2"
                src={Review2}
                width="500px"
                alt="review2"
              />
            </div>
            <div className="content7row1">
              <img
                className="review3"
                src={Review3}
                width="500px"
                alt="review3"
              />
              <span className="content7txt3">
                "Eatsy burgers are some of the most tastiest burgers I've had!"
              </span>
            </div>
            <div className="content7row1">
              <span className="content7txt4">
                "Awesome service and even better burgers!"
              </span>
              <img
                className="review4"
                src={Review4}
                width="500px"
                alt="review4"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
