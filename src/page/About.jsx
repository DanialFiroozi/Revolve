import Breadcrumb from "../components/Breadcrumb";

import about from "/src/assets/images/about.jpg";
import news1 from "/src/assets/images/news/news-1.jpg";
import news2 from "/src/assets/images/news/news-2.jpg";
import news3 from "/src/assets/images/news/news-3.jpg";
import news4 from "/src/assets/images/news/news-4.jpg";

function About() {
  return (
    <>
      <Breadcrumb />

      <section className="pt-5 padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12">
                  <img src={about} className="img-fluid w-100" alt="" />
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-4">
                      <h5 className="text-uppercase letter-spacing mb-4">
                        Who is me?
                      </h5>
                      <p>
                        Duis sed odio sit amet nibh vulputate cursus a sit amet
                        mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                        odio tincidunt auctor a ornare odio. Sed non mauris
                        vitae erat consequat
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <h5 className="text-uppercase letter-spacing mb-4">
                        My vission
                      </h5>
                      <p>
                        Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis biben. Nam nec tellus a odio
                        tincidunt auctor a ornare odio. Sed non mauris vitae
                        erat consequat auctor eu in elit.
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <h5 className="text-uppercase letter-spacing mb-4">
                        Follow Me :
                      </h5>
                      <div className="follow-socials">
                        <a href="#" className="fb">
                          <i className="ti-facebook"></i>
                        </a>
                        <a href="#" className="twt">
                          <i className="ti-twitter"></i>
                        </a>
                        <a href="#" className="inst">
                          <i className="ti-instagram"></i>
                        </a>
                        <a href="#" className="youtube">
                          <i className="ti-youtube"></i>
                        </a>
                        <a href="#" className="pint">
                          <i className="ti-pinterest"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-3 mt-5">
                    I have travel 10+ more countries in this year.
                  </h3>
                  <p className="mb-5">
                    Poor Alice! It was as much as she could do, lying down on
                    one side, to look through into the garden with one eye; but
                    to get through was more hopeless than ever: she sat down and
                    began to cry again.
                  </p>

                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="about-widget mb-4 mb-lg-0">
                        <img
                          src={news1}
                          alt=""
                          className="img-fluid"
                        />
                        <h4 className="mt-3">Hill ward</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="about-widget mb-4 mb-lg-0">
                        <img
                          src={news2}
                          alt=""
                          className="img-fluid"
                        />
                        <h4 className="mt-3">Awesome ride</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="about-widget mb-4 mb-lg-0">
                        <img
                          src={news3}
                          alt=""
                          className="img-fluid"
                        />
                        <h4 className="mt-3">Newyork</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="about-widget mb-4 mb-lg-0">
                        <img
                          src={news4}
                          alt=""
                          className="img-fluid"
                        />
                        <h4 className="mt-3">Rising Sea</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
