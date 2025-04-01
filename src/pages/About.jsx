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
              className="img-fluid mw-100 h-100"
              src="assets/img/desti/about.png"
              alt="About Us"
              // style={{ objectFit: "cover" }}
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

      <div class="container">
        {/* <h2 class="text-center mb-4">Why Choose <span class="text-primary"></span></h2> */}
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
            Why Choose?
            </h6>
            <h1 className="mb-5"> Raghuwanshi Travel</h1>
          </div>
          <div class="row g-4">
    <div class="col-md-4 d-flex wow fadeInUp" data-wow-delay="0.3s">
        <div class="card shadow text-center p-3 h-100">
            <i class="fas fa-shield-alt fa-3x text-primary mb-3"></i>
            <div class="card-body">
                <h5 class="card-title">Experienced & Trusted</h5>
                <p class="card-text">With years of experience, we ensure a seamless and memorable travel journey.</p>
            </div>
        </div>
    </div>

    <div class="col-md-4 d-flex wow fadeInUp" data-wow-delay="0.5s">
        <div class="card shadow text-center p-3 h-100">
            <i class="fas fa-car fa-3x text-primary mb-3"></i>
            <div class="card-body">
                <h5 class="card-title">Comfortable & Safe Rides</h5>
                <p class="card-text">Our well-maintained fleet and professional drivers prioritize safety and comfort.</p>
            </div>
        </div>
    </div>

    <div class="col-md-4 d-flex wow fadeInUp" data-wow-delay="0.7s">
        <div class="card shadow text-center p-3 h-100">
            <i class="fas fa-money-bill-wave fa-3x text-primary mb-3"></i>
            <div class="card-body">
                <h5 class="card-title">Affordable Pricing</h5>
                <p class="card-text">We offer budget-friendly travel options with no hidden charges.</p>
            </div>
        </div>
    </div>

    <div class="col-md-4 d-flex wow fadeInUp" data-wow-delay="0.9s">
        <div class="card shadow text-center p-3 h-100">
            <i class="fas fa-clock fa-3x text-primary mb-3"></i>
            <div class="card-body">
                <h5 class="card-title">24/7 Customer Support</h5>
                <p class="card-text">Our support team is available round the clock for all your travel needs.</p>
            </div>
        </div>
    </div>

    <div class="col-md-4 d-flex wow fadeInUp" data-wow-delay="0.11s">
        <div class="card shadow text-center p-3 h-100">
            <i class="fas fa-globe fa-3x text-primary mb-3"></i>
            <div class="card-body">
                <h5 class="card-title">Wide Range of Services</h5>
                <p class="card-text">From local trips to corporate and pilgrimage tours, we cover it all!</p>
            </div>
        </div>
    </div>

    <div class="col-md-4 d-flex wow fadeInUp" data-wow-delay="0.13s">
        <div class="card shadow text-center p-3 h-100">
            <i class="fas fa-users fa-3x text-primary mb-3"></i>
            <div class="card-body">
                <h5 class="card-title">Customized Travel Plans</h5>
                <p class="card-text">We personalize travel experiences to match your unique needs.</p>
            </div>
        </div>
    </div>
</div>

    </div>
         {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Travel Guide
            </h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/mewt1.png" alt="" />
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
                  <h5 className="mb-0">Deepak raghuwanshi </h5>
                  <small>owner </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/newt2.png" alt="" />
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
                  <h5 className="mb-0"> Kavita Raghuvanshi 
                  </h5>
                  <small>Guides </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/newt3.png" alt="" />
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
                  <h5 className="mb-0"> Ankit raghuwanshi </h5>
                  <small>Trip planner</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/newt4.png" alt="" />
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
                  <h5 className="mb-0"> Vineet Raghuvanshi 
                  </h5>
                  <small>Guides</small>
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
