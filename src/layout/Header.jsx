import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => setIsOpen((prev) => !prev);

  return (
    <header className="header-top bg-grey justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-4 text-center d-none d-lg-block">
            <Link className="navbar-brand " to="/">
              <img src={logo} alt="" className="img-fluid" />
            </Link>
          </div>

          <div className="col-lg-8 col-md-12">
            <nav className="navbar navbar-expand-lg navigation-2 navigation">
              <Link className="navbar-brand text-uppercase d-lg-none" to="#">
                <img src={logo} alt="" className="img-fluid" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={menuHandler}
              >
                <span className="ti-menu"></span>
              </button>

              <div
                className={`collapse navbar-collapse ${isOpen && "show"}`}
                id="navbar-collapse"
              >
                <ul id="menu" className="menu navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact-me" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about-me" className="nav-link">
                      About
                    </Link>
                  </li>
                </ul>

                <ul className="list-inline mb-0 d-block d-lg-none">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ti-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ti-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="header-socials-2 text-right d-none d-lg-block">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ti-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
