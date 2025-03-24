import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  useEffect(() => {
    const showFirstModal = () => {
      const modalElement = document.getElementById("inquiryModal");
      if (modalElement) {
        const modal = window.bootstrap ? new window.bootstrap.Modal(modalElement) : null;
        modal?.show();

        modalElement.addEventListener("hidden.bs.modal", () => {
          setTimeout(() => {
            const nextModalElement = document.getElementById("nextTripModal");
            if (nextModalElement) {
              const nextModal = new window.bootstrap.Modal(nextModalElement);
              nextModal.show();
            }
          }, 5000);
        });
      }
    };

    const timer = setTimeout(showFirstModal, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                123 Street, New York, USA
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +012 345 6789
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#">
                <i className="fab fa-youtube fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Tourist
            </h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link text-dark">
                Home
              </Link>
              <Link to="/About" className="nav-item nav-link text-dark">
                About
              </Link>
              <Link to="/Services" className="nav-item nav-link text-dark">
                Services
              </Link>
              <Link to="/Packages" className="nav-item nav-link text-dark">
                Packages
              </Link>
              <Link to="/Contact" className="nav-item nav-link text-dark">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}

      {/* Inquiry Modal */}
      <div className="modal fade" id="inquiryModal" tabIndex="-1" aria-labelledby="inquiryModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="inquiryModalLabel">Inquiry Form</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="inquiryForm">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label fw-semibold">Phone Number</label>
                  <input type="number" className="form-control" id="number" placeholder="Enter your number" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your inquiry..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Inquiry Modal End */}

      {/* Next Trip Modal */}
      <div className="modal fade" id="nextTripModal" tabIndex="-1" aria-labelledby="nextTripModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg"> {/* Use modal-lg for a larger modal */}
    <div className="modal-content">
      <div className="modal-header bg-success text-white">
        <h5 className="modal-title" id="nextTripModalLabel">Upcoming Trip</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          {/* Left side - Image */}
          <div className="col-md-6">
            <img className="img-fluid rounded" src="assets/img/desti/sawariyaseth.jpg" alt="Sawariya Seth Trip" />
          </div>

          {/* Right side - Text */}
          <div className="col-md-6 text-center">
            <h5>Our next trip is to Sawariya Seth!</h5>
            <p>Book now to secure your spot.</p>
            <button className="btn btn-success">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Next Trip Modal End */}
    </div>
  );
}

export default Header;
