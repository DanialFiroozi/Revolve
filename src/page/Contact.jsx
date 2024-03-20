import Breadcrumb from "../components/Breadcrumb";

import contact from "/src/assets/images/contact.jpg";

function Contact() {
  return (
    <>
      <Breadcrumb />

      <section className="pt-5 padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12">
                  <img src={contact} alt="" className="img-fluid w-100" />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <p className="mt-5 mb-5">
                    Something splashing about in the pool a little way off, and
                    she swam nearer to make out what it was: at first she
                    thought it must be a walrus or hippopotamus, but then she
                    remembered how small she was now, and she soon made out that
                    it was only a mouse that had slipped in like herself.
                  </p>

                  <h2 className="mb-4">Get In Touch</h2>

                  <form id="contact-form" className="contact-form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="name">Your Name (required)</label>
                          <input
                            className="form-control form-control-name"
                            name="name"
                            id="name"
                            type="text"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label for="email">Your Email (required)</label>

                          <input
                            className="form-control form-control-email"
                            name="email"
                            id="email"
                            type="email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label for="message">Your Message</label>
                          <textarea
                            className="form-control form-control-message"
                            name="message"
                            id="message"
                            rows="7"
                            required
                          ></textarea>
                        </div>

                        <button
                          className="btn btn-primary solid blank mt-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
