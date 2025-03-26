import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlane, FaSmile, FaMapMarkerAlt, FaBusinessTime } from "react-icons/fa";

function About() {
  const [counters, setCounters] = useState({
    completedTrips: 0,
    happyClients: 0,
    destinations: 0,
    yearsInBusiness: 0,
  });

  const counterRefs = useRef({
    completedTrips: false,
    happyClients: false,
    destinations: false,
    yearsInBusiness: false,
  });

  const targetValues = {
    completedTrips: 500,
    happyClients: 1200,
    destinations: 150,
    yearsInBusiness: 10,
  };

  const icons = {
    completedTrips: <FaPlane className="text-primary fs-3 text-6xl mb-3" />,
    happyClients: <FaSmile className="text-success fs-3 text-6xl mb-3" />,
    destinations: <FaMapMarkerAlt className="text-danger fs-3 text-6xl mb-3" />,
    yearsInBusiness: <FaBusinessTime className="text-warning fs-3 text-6xl mb-3" />,
  };

  const animateCounter = (key) => {
    const target = targetValues[key];
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;

    let currentStep = 0;
    const intervalId = setInterval(() => {
      setCounters((prev) => ({
        ...prev,
        [key]: Math.min(Math.round(increment * currentStep), target),
      }));

      currentStep++;
      if (currentStep > steps) {
        clearInterval(intervalId);
      }
    }, duration / steps);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = entry.target.getAttribute("data-key");
          if (key && !counterRefs.current[key]) {
            animateCounter(key);
            counterRefs.current[key] = true;
          }
        }
      });
    }, observerOptions);

    Object.keys(counters).forEach((key) => {
      const element = document.querySelector(`[data-key="${key}"]`);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5 text-center">
          <h1 className="display-3 text-white">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6" style={{ minHeight: 400 }}>
            <img
              className="img-fluid w-100 h-100"
              src="assets/img/about.jpg"
              alt="About Us"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">Welcome to <span className="text-primary">Raghuwanshi Travel</span></h1>
            <p>We offer premium travel experiences, curated to provide the best adventures for our clients.</p>
            <ul>
              <li>First Class Flights</li>
              <li>Handpicked Hotels</li>
              <li>5 Star Accommodations</li>
              <li>Latest Model Vehicles</li>
              <li>150 Premium City Tours</li>
              <li>24/7 Service</li>
            </ul>
            <a className="btn btn-primary mt-2" href="#">Read More</a>
          </div>
        </div>
      </div>

      <div className=" py-4">
        <div className="container ">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">Achievements</h6>
            <h1 className="mb-5">Milestones We Have Achieved</h1>
          </div>
          <div className="row">
            {Object.keys(targetValues).map((key) => (
              <div key={key} className="col-md-3 col-sm-6 mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card border-0 shadow-sm py-4 px-3 d-flex align-items-center"
                  data-key={key}
                >
                  {icons[key]}
                  <div className="fs-2 fw-bold font-bold text-primary mt-2">{counters[key]}+</div>
                  <div className="text-muted mt-2">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Travel Guide Section */}
        <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/mewt1.png" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/newt2.png" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/newt3.png" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/newt4.png" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
