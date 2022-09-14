import { useState } from "react";
import "../../app.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">
                Ready to start your next project with us? Send us a messages and
                we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              <form
                onSubmit={handleSubmit}
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
              >
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                    required
                  />
                  <label htmlFor="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                    required
                  />
                  <label htmlFor="email" required>
                    Email address
                  </label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="+2348084838268"
                    data-sb-validations="required"
                    required
                  />
                  <label htmlFor="phone" required>
                    Phone number
                  </label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                    defaultValue={""}
                  />
                  <label htmlFor="message" required>
                    Message
                  </label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-xl"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                {message && (
                  <span>Thanks, I 'll reply as soon as possible.</span>
                )}
              </form>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              {/* <i className="bi-phone fs-2 mb-3 text-muted" /> */}
              <a
                href="https://wa.me/+2348084838268"
                target="_link"
                rel="no referrer"
              >
                <img
                  src="./assets/whatsapp.png"
                  className="whatsapp"
                  alt="whatsapp"
                />
              </a>

              <div>+234 808 483 8268</div>
            </div>
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <a
                href="mailto:aliuajibade317@gmail.com"
                target="_link"
                rel="no referrer"
              >
                <img
                  src="./assets/gmail.png"
                  className="whatsapp"
                  alt="whatsapp"
                />
              </a>

              <div>Email</div>
            </div>
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <a
                href="https://mobile.facebook.com/home.php?tbua=1"
                target="_link"
                rel="no referrer"
              >
                <img
                  src="./assets/facebook.png"
                  className="whatsapp"
                  alt="whatsapp"
                />
              </a>

              <div>Facebook</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
