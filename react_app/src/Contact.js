import Dashheader from "./Dashheader";
import LandingHeader from "./LandingHeader";

const Contact = () => {
  return (
    <div>
      <div className="bg-dark text-light p-5 d-flex justify-content-between align-items-center">
        <LandingHeader />
      </div>
      <div className="contact-page">
        <main>
          <h1>Contact Pooltornem</h1>
          <p>Get in touch with us to get the ball rolling</p>
          <div className="contact-methods">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h2>EMAIL</h2>
              <a href="#">ken@pooltornem.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <h2>PHONE</h2>
              <a href="">+251 900000000</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-pencil-alt"></i>
              <h2>PROJECT PLANNER</h2>
              <a href="/">Launch it</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-twitter"></i>
              <h2>TWITTER</h2>
              <a href="/">Follow us</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-skype"></i>
              <h2>SKYPE</h2>
              <a href="/">Call us</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
