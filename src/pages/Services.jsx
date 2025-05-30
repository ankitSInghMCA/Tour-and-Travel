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

function Services() {
  return (
    <div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Services
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
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
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
    </div>
  )
}

export default Services