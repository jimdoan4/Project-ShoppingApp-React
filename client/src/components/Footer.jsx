import React, { Component } from "react";
import { FooterContainer } from "./styled-components/FooterStyles";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <footer>
          <div className="container-fluid pt-5">
            <div className="row">
              <div className="col-md-6 col-12 pl-5">
                <p className="mt-2 p-0 text-black">
                © EQUIS Men Apparel 1818 Apple Ave, Atlanta, Georgia 30324
                </p>
              </div>
              <div className="col-md-4 col-12 my-md-0 my-3 pl-md-0 pl-5">
                <input
                  type="text"
                  className="form-control border-0 bg-light"
                  placeholder="Enter Your email Address"
                />
              </div>
              <div className="col-md-2 col-12 my-md-0 my-3 pl-md-0 pl-5">
                <button className="btn bg-white text-black">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="container text-center">
            <p className="pt-5">
            Privacy Policy | Terms of Use | Text Terms
            </p>
            <small className="py-4 text-black">
              © 2018 - 2020 EQUIS Men Apparel, LLC. All Rights
              Reserved.
            </small>
          </div>
        </footer>
      </FooterContainer>
    );
  }
}
