import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="page-footer font-small indigo">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              About{" "}
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">About Rajasthan</a>
              </li>
              <li>
                <a href="#!">Fair and Festivals</a>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Explore
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Museums</a>
              </li>
              <li>
                <a href="#!">Forts</a>
              </li>
              <li>
                <a href="#!">Lakes</a>
              </li>
              <li>
                <a href="#!">Restaurants</a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Contact Us
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <a href="/"> Travelli</a>
      </div>
    </footer>
  );
}
export default Footer;
