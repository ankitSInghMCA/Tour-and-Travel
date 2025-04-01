import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// Modal.setAppElement("#root");

const options = {
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1200,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};

const homes = {
  items: 1, // Display only one slide
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000, // Increases time between slide changes (default: 3000ms)
  smartSpeed: 1500, // Slows down the transition speed (default: 250-600ms)
  dots: true,
  nav: false,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
};




export default function Home() {
// modal open

const [show, setShow] = useState(false); // State to control modal visibility
const [numPeople, setNumPeople] = useState(1); // State for number of people

// Function to handle modal opening
const handleShow = (e) => {
  e.preventDefault(); // Prevent anchor tag default behavior
  setShow(true); // Show the modal
};

// Function to handle modal closing
const handleClose = () => setShow(false);

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted');
  console.log('Number of people:', numPeople);
  handleClose(); // Close modal after submission
};
// model end

  useEffect(() => {
    flatpickr("#datetime", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }, []);

  return (
    <div>
      <div className="container-fluid p-0" id="home-slider">
        <OwlCarousel className="owl-theme" {...homes}>
          {/* Slide 1 */}
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white mb-3 animated slideInDown">
                    Relax and Enjoy Your Vacation 
                  </h1>
                  <p className="fs-4 text-white mb-4 animated slideInDown">
                    Your dream vacation awaits. Unwind in beautiful destinations and experience true relaxation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white mb-3 animated slideInDown">
                    Explore Exotic Locations
                  </h1>
                  <p className="fs-4 text-white mb-4 animated slideInDown">
                    Experience the beauty of untouched locations and vibrant cultures that you won’t find anywhere else.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white mb-3 animated slideInDown">
                    Create Lasting Memories
                  </h1>
                  <p className="fs-4 text-white mb-4 animated slideInDown">
                    Come with us and embark on a journey of unforgettable adventures and cherished moments.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </OwlCarousel>

      </div>
      {/* Inquiry Form Modal */}

      {/* Bootstrap Modal */}
      <div className="modal fade"
        id="inquiryModal"
        tabIndex="-1"
        aria-labelledby="inquiryModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="inquiryModalLabel">
                Inquiry Form
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="inquiryForm">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your inquiry..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Inquiry Form Modal */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute mw-100 h-100"
                  src="assets/img/desti/about.png"
                  alt=""
                  
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Raghuwanshi Travel</span>
              </h1>
              <p className="mb-4">
                Experience the journey of a lifetime with us. From breathtaking destinations to unparalleled luxury, we bring you a travel experience like no other.
              </p>
              <p className="mb-4">
                Explore the world in comfort, style, and convenience with our exclusive services. Whether you're looking for a serene getaway or an adventurous escapade, we have everything you need.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-plane-departure text-primary me-2" />
                   Easy to move
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-hotel text-primary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-star text-primary me-2" />
                    5 Star Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-car text-primary me-2" />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-city text-primary me-2" />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-headset text-primary me-2" />
                    24/7 Service
                  </p>
                </div>
              </div>
              <a class="btn btn-primary mt-2" href="#">Read More</a>
            </div>

          </div>
        </div>
      </div>
      {/* About End */}
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4" />
                  <h5>WorldWide Tours</h5>
                  <p>
                    WorldWide Tours provides seamless travel experiences, offering customized packages, expert guides, and unforgettable destinations for a memorable journey around the globe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Hotel Reservation</h5>
                  <p>
                    Our hotel reservation service allows you to easily book accommodations of all types, whether luxury, or budget-friendly, ensuring comfort, convenience, and a hassle-free experience for your stay .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user text-primary mb-4" />
                  <h5>Travel Guides</h5>
                  <p>
                    Our expert travel guides provide insightful recommendations, local tips, and detailed itineraries, ensuring you experience the best of every destination with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cog text-primary mb-4" />
                  <h5>Event Management</h5>
                  <p>
                    From corporate conferences to personal celebrations, our event management team ensures seamless planning, coordination, and execution, delivering memorable events tailored to your vision.
                  </p>
                </div>
              </div>
            </div>


            {/* <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4" />
                  <h5>WorldWide Tours</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Hotel Reservation</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user text-primary mb-4" />
                  <h5>Travel Guides</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cog text-primary mb-4" />
                  <h5>Event Management</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Popular Destination</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/desti/ayodhya.png"
                      alt=""
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      30% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Ayodhya
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/desti/Amarnath.jpg"
                      alt=""
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      25% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Amarnath
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/desti/khatu shyam.jpg"
                      alt=""
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      35% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    khatu shyam
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/desti/vaishnodevi.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  20% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Vaishnodevi
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Start */}
      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              International
            </h6>
            <h1 className="mb-5">International Destinations</h1>
          </div>
          <OwlCarousel
  className="owl-theme"
  {...options}
  // nav
  // navText={[
  //   '<button class="owl-prev btn btn-primary">Prev</button>',
  //   '<button class="owl-next btn btn-primary">Next</button>',
  // ]}
  // navContainerClass="custom-nav-container"
>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/it1.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Bali
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹149.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Visit Tanah Lot Temple,through Ubud’s rice fields, enjoy Bali nightlife, and experience Bali’s culture with Raghuwanshi Travel.
                </p>
                <div className="d-flex justify-content-center mb-2">
                  {/* <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a> */}
                 <button
        href="#"
        className="btn btn-sm btn-primary px-3"
        style={{ borderRadius: "30px" }}
      
      >
        Book Now
      </button>
                </div>
              </div>
            </div>


            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/it2.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Thailand
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹139.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Visit Bangkok’s temples, relax on Phuket’s beaches, explore floating markets, and enjoy Thai street food with Raghuwanshi Travel .
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/it3.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                 Singapore
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹189.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Explore Marina Bay Sands, visit Sentosa Island, shop on Orchard Road, and enjoy Night Safari  with Raghuwanshi Travel.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/it4.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Maldives
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹139.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Relax on pristine beaches, explore coral reefs, stay in overwater villas, and enjoy luxury resorts with Raghuwanshi Travel.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/it5.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                Dubai
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹139.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                See Burj Khalifa, shop at Dubai Mall, experience desert safaris, and relax at Palm Jumeirah with Raghuwanshi Travel.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </OwlCarousel>

        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Domestic
            </h6>
            <h1 className="mb-5"> Domestic Destinations</h1>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/dt1.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Shimla
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹149.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Experience the charm of Shimla with Raghuwanshi Travel! Walk through Mall Road, visit the Ridge, and explore colonial architecture amidst the snow-capped Himalayas. Book your perfect trip today!

                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>


            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/dt2.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Agra
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹139.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Discover the mesmerizing beauty of the Taj Mahal with Raghuwanshi Travel. Explore Agra Fort and Fatehpur Sikri while enjoying a seamless, well-planned journey with us. Let history captivate you!
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/dt3.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Maharashtra
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹189.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                From Mumbai’s bustling streets to Ajanta-Ellora caves, Raghuwanshi Travel ensures an unforgettable Maharashtra tour. Explore beaches, forts, and Bollywood magic with our expert travel services!
                </p>
                <div className="d-flex justify-content-center mb-2">
                  {/* <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a> */}
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/dt4.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Kullu-Manali
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹139.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Enjoy the breathtaking valleys of Kullu-Manali with Raghuwanshi Travel. From adventure sports to scenic landscapes, experience the best of Himachal with our customized travel packages.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

          
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/dt6.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Kashmir
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹139.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Heaven on Earth awaits with Raghuwanshi Travel! Explore Srinagar’s Dal Lake, Gulmarg’s snow, and Pahalgam’s beauty. Book now for a mesmerizing Kashmir experience with us.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/desti/dt7.png" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                 Goa
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹139.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Golden beaches, vibrant nightlife, and Portuguese heritage—Raghuwanshi Travel makes your Goa trip extraordinary! Experience water sports, cruise parties, and relaxation like never before.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Spiritual
            </h6>
            <h1 className="mb-5">Spiritual destinations</h1>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/ayodhya.jpg" alt="" style={{ height: "235px" }} />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                 Ayodhya
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹149.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Explore the sacred city of Ayodhya with Raghuwanshi Travel. Visit the Ram Janmabhoomi, Hanuman Garhi, and immerse yourself in the spiritual essence of this holy land.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/badrinath.webp" alt="" style={{ height: "235px" }} />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Badrinath
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹149.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Embark on a divine journey to Badrinath with Raghuwanshi Travel. Seek blessings at the Badrinath Temple while enjoying the serene beauty of the Himalayas and Alaknanda river.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/bnaraas.png" alt="" style={{ height: "235px" }} />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Kashi
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹149.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Dive into spirituality in Kashi with Raghuwanshi Travel. Witness the Ganga Aarti, explore ancient temples, and experience the divine energy of Varanasi’s ghats.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/Dwaraka (1).jpg" alt="" style={{ height: "235px" }} />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Dwarka
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹149.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Visit the legendary Dwarkadhish Temple with Raghuwanshi Travel. Experience Lord Krishna’s divine abode, serene beaches, and  embrace the vibrant spirituality of this holy city.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/kedarnath.jpg" alt="" style={{ height: "235px" }} />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                 Kedarnath
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                {/* <h3 className="mb-0">₹149.00</h3> */}
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Experience the divine aura of Kedarnath with Raghuwanshi Travel. Trek to the revered temple, witness breathtaking Himalayan views, and seek blessings on this sacred pilgrimage.
                </p>
                <div className="d-flex justify-content-center mb-2">
                <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

    

      {/* Package End */}
      {/* Booking Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Online Booking</h1>
                <p className="mb-4">
                  Booking your next trip is easy and hassle-free. Choose from a wide range of destinations, accommodations, and activities, all at your fingertips.
                </p>
                <p className="mb-4">
                  This ensures a seamless travel experience from start to finish. Our online booking system is fast, secure, and user-friendly, allowing you to make reservations for flights, hotels, and tours quickly, ensuring you never miss out on the best deals or experiences.
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Book A Tour</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-white"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className=" form-control bg-white"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-white"
                          id="datetime"
                          placeholder="Date & Time"
                        />
                        <label htmlFor="datetime">Date & Time</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-control bg-white"
                          id="select1"
                        >
                          <option value={1}>Destination 1</option>
                          <option value={2}>Destination 2</option>
                          <option value={3}>Destination 3</option>
                        </select>
                        <label htmlFor="select1">Destination</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-white"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: 100 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-outline-light  w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Start */}
      {/* Process Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Process
            </h6>
            <h1 className="mb-5">3 Easy Steps</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-globe fa-3x text-white" />
                </div>
                <h5 className="mt-4">Choose A Destination</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Explore top destinations worldwide, from tropical beaches to historic cities, offering unique experiences in adventure, culture, and relaxation to suit every traveler’s desires.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-dollar-sign fa-3x text-white" />
                </div>
                <h5 className="mt-4">Pay Online</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Pay online securely through our easy-to-use payment system, offering multiple payment options, ensuring a smooth and safe transaction for your bookings and reservations.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-plane fa-3x text-white" />
                </div>
                <h5 className="mt-4">Get Ready, Travel</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Plan today and secure your next adventure with ease. Enjoy exclusive deals, flexible options, and a hassle-free booking experience for your flights, hotels, trains, and tours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Start */}
      {/* upcominf event section */}
     

      {/* upcominf event section */}
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



      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-1.jpg"
                alt="John Doe"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                Clita erat ipsum et lorem et sit.
              </p>
            </div>

            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-2.jpg"
                alt="John Doe"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                Clita erat ipsum et lorem et sit.
              </p>
            </div>

            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-3.jpg"
                alt="John Doe"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                Clita erat ipsum et lorem et sit.
              </p>
            </div>

            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-4.jpg"
                alt="John Doe"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </OwlCarousel>

        </div>
      </div>
      {/* Testimonial End */}


     {/* Modal  open book*/}
     {/* <div className={`modal fade ${show ? 'show' : ''}`} id="bookTripModal" tabIndex="-1" aria-labelledby="bookTripModalLabel" aria-hidden={!show}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookTripModalLabel">Book Your Trip</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="destination" className="form-label">
                    Trip Destination
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="destination"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    required
                  />
                </div>

               
                <div className="mb-3">
                  <label htmlFor="numPeople" className="form-label">
                    Number of People
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numPeople"
                    value={numPeople}
                    onChange={(e) => setNumPeople(e.target.value)}
                    min="1"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div> */}



    </div>
  )
}
