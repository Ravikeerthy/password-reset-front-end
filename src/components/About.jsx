import React from "react";
import "./styles/footerstyle.css";
import "./styles/contentstyle.css";

const About = () => {
  return (
    <div>
      <div className="container" id="banner-image">
        <img
          src="https://images.pexels.com/photos/8436746/pexels-photo-8436746.jpeg?auto=compress&cs=tinysrgb&w=800"
          className="img-fluid rounded mx-auto d-block m-5"
          id="img-design"
          alt="yoga-img"
        />
        <span className="centered">Journey to Wellness!</span>
      </div>

      <div className="container text-center" id="text-design">
        <p>Your online yoga studio</p>
        <div>
          <p>Over 5,000 yoga and meditation classes and guided programs.</p>
        </div>
        <button className="btn btn-success rounded">
          Try our 14 days free Yoga class
        </button>
      </div>

      <div className="why-choose-pure-aura">
        <h2>Why Choose PureAura Yoga?</h2>

        <div className="feature">
          <h3>Experienced Instructors</h3>
          <p>
            Our certified and passionate instructors bring years of experience
            and a wealth of knowledge to each class, ensuring you receive
            personalized attention and guidance.
          </p>
        </div>

        <div className="feature">
          <h3>Variety of Classes</h3>
          <p>
            From gentle Hatha and calming Yin Yoga to dynamic Vinyasa and
            intense Power Yoga, we offer a wide range of classes to suit all
            levels and preferences.
          </p>
        </div>

        <div className="feature">
          <h3>Holistic Approach</h3>
          <p>
            We incorporate mindfulness, meditation, and breathing techniques
            into our practices, helping you achieve a balanced and harmonious
            lifestyle.
          </p>
        </div>

        <div className="feature">
          <h3>Community and Connection</h3>
          <p>
            Join a supportive and friendly community where you can connect with
            like-minded individuals, share your experiences, and grow together.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <footer>
          <div className="footer">
            <div className="container text-center m-3">
              <p>
                <b>Join Us Today</b>
              </p>
              Ready to embark on your yoga journey? Explore our class schedule,
              meet our instructors, and sign up for a class today. Whether
              you're looking to unwind, get fit, or find balance, PureAura Yoga
              is here to help you achieve your wellness goals.
            </div>
            <div className="container">
              <p>
                <b>Stay Connected</b>
              </p>
              <p>
                Follow us on social media for the latest updates, tips, and
                inspiration.{" "}
              </p>
            </div>
            <div className="d-flex justify-content-evenly fw-bold m-2">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-youtube"></i>
              <i className="fa fa-twitter"></i>
            </div>

            <div className="row">
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>

            <div className="row">
              Copyright © 2024 - All rights reserved || Designed By: Keerthana
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
