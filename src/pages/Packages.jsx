import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
function Packages() {
  return (
    <div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Packages
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Packages
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
      {/* Package Start */}
      <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Packages
          </h6>
          <h1 className="mb-5">International Destinations</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-1.jpg" alt="" />
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
                <h3 className="mb-0">$149.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam eos
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Indonesia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$139.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam eos
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-3.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Malaysia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$189.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam eos
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-xxl py-5">
  <div className="container">
    
    {/* Adventure Packages Section */}
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Adventure Packages
      </h6>
      <h1 className="mb-5">Thrilling & Exciting Experiences</h1>
    </div>
    <div className="row g-4 justify-content-center">
      
      {/* Rishikesh Adventure */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/desti/Untitled design (7).png" alt="Rishikesh Adventure" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Rishikesh
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />3 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$199.00</h3>
            <p>Experience river rafting, bungee jumping, and camping under the stars.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Jungle Safari */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/jungle-safari.jpg" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/desti/Untitled design (8).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/ladakh.jpg" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/desti/Untitled design (9).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/desti/Untitled design (10).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/desti/Untitled design (11).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/desti/Untitled design (12).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/desti/Untitled design (13).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jim Corbett
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$249.00</h3>
            <p>Spot tigers and enjoy a thrilling wildlife safari in the jungle.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>
     
    </div> {/* End Adventure Section */}

    {/* Spiritual Packages Section */}
    <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Spiritual Packages
      </h6>
      <h1 className="mb-5">Divine & Peaceful Journeys</h1>
    </div>
       <OwlCarousel className="owl-theme" {...options}>
       <div className="package-item">
                   <div className="overflow-hidden">
                     <img className="img-fluid" src="assets/img/ayodhya.jpg" alt="" style={{height:"235px"}} />
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
                     <h3 className="mb-0">$149.00</h3>
                     <div className="mb-3">
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                     </div>
                     <p>
                       Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                       diam amet diam eos
                     </p>
                     <div className="d-flex justify-content-center mb-2">
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3 border-end"
                         style={{ borderRadius: "30px 0 0 30px" }}
                       >
                         Read More
                       </a>
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3"
                         style={{ borderRadius: "0 30px 30px 0" }}
                       >
                         Book Now
                       </a>
                     </div>
                   </div>
                 </div>
   
                 <div className="package-item">
                   <div className="overflow-hidden">
                     <img className="img-fluid" src="assets/img/badrinath.webp" alt=""  style={{height:"235px"}} />
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
                     <h3 className="mb-0">$149.00</h3>
                     <div className="mb-3">
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                     </div>
                     <p>
                       Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                       diam amet diam eos
                     </p>
                     <div className="d-flex justify-content-center mb-2">
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3 border-end"
                         style={{ borderRadius: "30px 0 0 30px" }}
                       >
                         Read More
                       </a>
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3"
                         style={{ borderRadius: "0 30px 30px 0" }}
                       >
                         Book Now
                       </a>
                     </div>
                   </div>
                 </div>
   
                 <div className="package-item">
                   <div className="overflow-hidden">
                     <img className="img-fluid" src="assets/img/bnaraas.png" alt=""   style={{height:"235px"}}/>
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
                     <h3 className="mb-0">$149.00</h3>
                     <div className="mb-3">
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                     </div>
                     <p>
                       Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                       diam amet diam eos
                     </p>
                     <div className="d-flex justify-content-center mb-2">
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3 border-end"
                         style={{ borderRadius: "30px 0 0 30px" }}
                       >
                         Read More
                       </a>
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3"
                         style={{ borderRadius: "0 30px 30px 0" }}
                       >
                         Book Now
                       </a>
                     </div>
                   </div>
                 </div>
   
                 <div className="package-item">
                   <div className="overflow-hidden">
                     <img className="img-fluid" src="assets/img/Dwaraka (1).jpg" alt=""  style={{height:"235px"}} />
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
                     <h3 className="mb-0">$149.00</h3>
                     <div className="mb-3">
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                     </div>
                     <p>
                       Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                       diam amet diam eos
                     </p>
                     <div className="d-flex justify-content-center mb-2">
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3 border-end"
                         style={{ borderRadius: "30px 0 0 30px" }}
                       >
                         Read More
                       </a>
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3"
                         style={{ borderRadius: "0 30px 30px 0" }}
                       >
                         Book Now
                       </a>
                     </div>
                   </div>
                 </div>
   
                 <div className="package-item">
                   <div className="overflow-hidden">
                     <img className="img-fluid" src="assets/img/kedarnath.jpg" alt=""  style={{height:"235px"}} />
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
                     <h3 className="mb-0">$149.00</h3>
                     <div className="mb-3">
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                       <small className="fa fa-star text-primary" />
                     </div>
                     <p>
                       Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                       diam amet diam eos
                     </p>
                     <div className="d-flex justify-content-center mb-2">
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3 border-end"
                         style={{ borderRadius: "30px 0 0 30px" }}
                       >
                         Read More
                       </a>
                       <a
                         href="#"
                         className="btn btn-sm btn-primary px-3"
                         style={{ borderRadius: "0 30px 30px 0" }}
                       >
                         Book Now
                       </a>
                     </div>
                   </div>
                 </div>
       </OwlCarousel>
     {/* End Spiritual Section */}

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
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
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
    </div>
  )
}

export default Packages