import styled from 'styled-components'

export const HomeContainer = styled.div`

.main-front-img {
    max-height: 600px;
    box-shadow: 1px 3px 12px 0px #b3b3b3;
}

.img-fluid {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
}

.middle-img {
    max-height: 330px;
}

.col-md-2 img {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
}
.site-slider {
    position: relative;
  }
  
  .position-top {
    position: absolute;
    top: 45%;
  }
  
  .site-slider .slider-btn .prev,
  .site-slider .slider-btn .next {
    background-color: var(--primary-color);
    padding: 1rem 1.5rem;
    border-radius: 10rem;
    color: white;
    margin: 0 1rem;
    opacity: 0;
    transition: opacity 1s ease;
  }
  
  .site-slider:hover .slider-btn .prev,
  .site-slider:hover .slider-btn .next {
    opacity: 1;
  }
  
  .right-0 {
    right: 0;
  }
  
  /* Slick Dots */
  
  .slick-dots {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    list-style-type: none;
    position: absolute;
    bottom: 0;
    right: 50%;
  }
  
  .slick-dots li {
    margin: 0 0.6rem;
  }
  
  .slick-dots button {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    padding: 0;
    border: none;
    background-color: white;
    text-indent: -99999px;
    border-radius: 100%;
  }
  
  .slick-dots li.slick-active button {
    transform: scale(2.5);
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.205);
  }

  /* Second Slider */

.site-slider-two {
  position: relative;
  height: 30%;
}

.site-slider-two .product {
  height: 23rem;
  position: relative;
  overflow: hidden;
}

.site-slider-two .product img {
  width: 90%;
  margin: auto;
}

.site-btn.btn-span {
  padding: 0.8rem 1.9rem;
  border-radius: 2px;
  border: .5px solid black!important;
  background-color: white;
  transition: 0.3s all ease-out;
  color: black;
}

.site-btn.btn-span:hover {
  padding: 0.8rem 1.9rem;
  border-radius: 2px;
  border: .5px solid black!important;
  background-color: black;
  transition: 0.3s all ease-out;
  color: white;
}


.hr {
  border: 1px dotted var(--border);
}

/* Features Sections */

.mid-section {
    max-height: 340px;
}

.return-section {
    max-height: 340px;
}
.mid-section img {
    height: 55vh;
}

.container .features {
  padding: 3rem 0;
}

.container .features h1 {
  font-family: var(--gugi);
}

.container .features p {
  padding: 0.5% 25%;
  font-size: 0.9em;
}


/* Slider Four */
.site-slider-four {
  position: relative;
  margin-top: 3rem;

}

.slider-four {
  padding: 0 0.4rem;
}

.slider-four .product img {
  width: 80%;
  border: 1px solid var(--border);
}


.slider-brand {
  position: relative;
  margin: 4rem 0;
}


.slider-box {
  width: 85%;
  height: 100%;
  background: rgba(255, 255, 255, 0.35);
  margin: auto;
  border-radius: 0.4rem;
}

.collection-img {
    max-height: 320px;
}
.site-info {
  margin-top: 0rem;
}

/* Iphone X */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .site-slider-four {
  position: relative;
  margin-top: 19rem;
}

.main-front-img {
   height: 360px;
    box-shadow: 1px 3px 12px 0px #b3b3b3;
}

.site-slider-two .product {
  height: 28rem;
  position: relative;
  overflow: hidden;
}

.collection-img {
    margin-right: -30px;
}

}

  `