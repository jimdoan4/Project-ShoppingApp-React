import React, { Component } from "react";
import { HomeContainer } from "./styled-components/HomeStyles";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="container-fluid p-0">
          <div className="site-slider">
            <div className="slider-one">
              <div>
                <img
                  src="https://www.sportsbusinessdaily.com/-/media/Images/SBJ-Photos/2016/04/18/pg-8-Company-Watch-Main-Rhone-Spring2016-Camo-28.ashx?la=en&hash=AAA79F14A8B7A306A6A10474AC6E2B56181E84E6"
                  className="img-fluid main-front-img"
                  width="100%"
                  alt="Banner 1"
                />
              </div>
              <div>
                <img
                  src="https://cmzone-vzbqbxhynotw9ion96xv.netdna-ssl.com/wp-content/uploads/2017/06/rhone-esp-Sequoia_Air_CM.jpg"
                  className="img-fluid main-front-img"
                  width="100%"
                  alt="Banner 2"
                />
              </div>
              <div>
                <img
                  src="https://www.mensjournal.com/wp-content/uploads/m0916_nb_lululemon_a-e9c62f24-1958-4162-927d-79c71fceb8c5.jpg?crop=0px%2C847px%2C2183px%2C1226px&resize=1200%2C675"
                  className="img-fluid main-front-img"
                  width="100%"
                  alt="Banner 3"
                />
              </div>
            </div>
            <div className="slider-btn">
              <span className="prev position-top">
                <i className="fas fa-chevron-left"></i>
              </span>
              <span className="next position-top right-0">
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="site-slider-two px-md-4">
            <div className="row slider-two text-center">
              <div className="col-md-2 product pt-md-5 pt-4">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LM3BF7S_038068_1?$image_carousel-lg$"
                  alt="Product 1"
                />
                <span className="border site-btn btn-span">HOODIES</span>
              </div>
              <div className="col-md-2 product pt-md-5 pt-4">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LM3AUTS_037049_1?$image_carousel-lg$"
                  alt="Product 2"
                />
                <span className="border site-btn btn-span">TANK TOPS</span>
              </div>
              <div className="col-md-2 product pt-md-5 pt-4">
                <img
                  src="https://somuchyoga.com/wp-content/uploads/2015/11/lululemon-off-the-mat-pants-men.jpg"
                  alt="Product 3"
                />
                <span className="border site-btn btn-span">PANTS</span>
              </div>
              <div className="col-md-2 product pt-md-5 pt-4">
                <img
                  src="https://cdn.sportlaunches.com/wp-content/uploads/2017/04/Pace-Breaker-Short-For-Men-By-Lululemon.jpg"
                  alt="Product 4"
                />
                <span className="border site-btn btn-span">
                  LONG SLEEVE SHIRTS
                </span>
              </div>
              <div className="col-md-2 product pt-md-5 pt-4">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LM3BQTS_040453_2"
                  alt="Product 5"
                />
                <span className="border site-btn btn-span">SHIRTS</span>
              </div>
              <div className="col-md-2 product pt-md-5 pt-4">
                <img
                  src="https://i.ebayimg.com/images/g/kqIAAOSw95lbGWsi/s-l300.jpg"
                  alt="Product 3"
                />
                <span className="border site-btn btn-span">SHORTS</span>
              </div>
            </div>
            <div className="slider-btn">
              <span className="prev position-top">
                <i className="fas fa-chevron-left fa-2x text-secondary"></i>
              </span>
              <span className="next position-top right-0">
                <i className="fas fa-chevron-right fa-2x text-secondary"></i>
              </span>
            </div>
          </div>
        </div>

        <hr className="hr" />

        <div className="container text-center">
          <div className="features">
            <button className="btn btn-custom" type="submit" value="Send">
              SHOP WHAT'S NEW
            </button>
          </div>
        </div>

        <div className="container mid-section bg-light">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="row box">
                <div className="col-md-12 p-0 bg-white">
                  <div className="text-center">
                    <img
                      src="https://i.kinja-img.com/gawker-media/image/upload/s--RrDvM4Te--/c_scale,f_auto,fl_progressive,q_80,w_800/bovcbm5qopcsyntcum04.jpg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-5 text-center text-black">
              <h4 className="text-center">Free Shipping. Free Returns.</h4>
              <p className="text-center pt-3">
                <medium>Less stress, more sweat.</medium>
              </p>
              <p className="text-center pt-3">
                <medium>
                  ABC Technology. Sounds simple, yet it took years of research
                  and development to perfect—to construct just the right amount
                  of room where it matters, without compromising the classic
                  look. Feel it to feel it.
                </medium>
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="site-slider-four px-md-4">
            <div className="slider-four row text-center">
              <div className="col-md-2 product pt-md-5">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LU9A73S_037040_1?$image_carousel-lg_2x$"
                  className="border img-fluid"
                  alt="Product 1"
                />
              </div>
              <div className="col-md-2 product pt-md-5">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LM9767S_036763_2?$product_tile-lg_2x$"
                  className="border img-fluid"
                  alt="Product 2"
                />
              </div>
              <div className="col-md-2 product pt-md-5">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LU9AF5S_0001_2?$product_tile-lg_2x$"
                  className="border img-fluid"
                  alt="Product 3"
                />
              </div>
              <div className="col-md-2 product pt-md-5">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LM5609S_1971_1?$image_carousel-lg_2x$"
                  className="border img-fluid"
                  alt="Product 4"
                />
              </div>
              <div className="col-md-2 product pt-md-5">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LM9474S_037617_2?$product_tile-lg_2x$"
                  className="border img-fluid"
                  alt="Product 5"
                />
              </div>
              <div className="col-md-2 product pt-md-5">
                <img
                  src="https://images.lululemon.com/is/image/lululemon/LM9641S_031382_2?$product_tile-lg_2x$"
                  className="border img-fluid"
                  alt="Product 6"
                />
              </div>
            </div>
            <div className="slider-btn">
              <span className="prev position-top">
                <i className="fas fa-chevron-left fa-2x text-secondary"></i>
              </span>
              <span className="next position-top right-0">
                <i className="fas fa-chevron-right fa-2x text-secondary"></i>
              </span>
            </div>
          </div>
        </div>

        <hr className="hr" />

        <div className="container text-center">
          <div className="features">
            <button className="btn btn-custom" type="submit" value="Send">
              SHOP OUR COLLECTIONS
            </button>
          </div>
        </div>

        <div className="container mid-section bg-light">
          <div className="row justify-content-center">
            <div className="col-md-5 col-12 mr-4">
              <div className="row box">
                <div className="col-md-12 p-0 bg-white">
                  <div className="text-left">
                    <img
                      src="https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/4/2c/42c55441-d347-5ccf-9fb4-dcb5897289bf/59721b025eb8c.image.jpg"
                      className="img-fluid"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-12">
              <div className="row box">
                <div className="col-md-12 p-0 bg-white">
                  <div className="text-left">
                    <img
                      src="https://cms.qz.com/wp-content/uploads/2019/01/lululemon-OTC2.jpg?quality=75&strip=all&w=450&h=571&crop=1"
                      className="img-fluid"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeContainer>
    );
  }
}
