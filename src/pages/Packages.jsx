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
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.1s">
          <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid w-100" src="assets/img/desti/it1.png" alt="" />
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

           
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.3s">
          <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid w-100" src="assets/img/desti/it5.png" alt="" />
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
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.5s">
          <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid w-100" src="assets/img/desti/it4.png" alt="" />
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
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.7s">
          <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid w-100" src="assets/img/desti/it2.png" alt="" />
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
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.9s">
                    

            

            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid w-100" src="assets/img/desti/it3.png" alt="" />
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
                Explore Marina Bay Sands, visit Sentosa Island, shop on Orchard Road, and enjoy Night Safari and adventure with Raghuwanshi Travel.
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
      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.1s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/desti/Untitled design (7).png" alt="Rishikesh Adventure" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
             ATV Ride
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />3 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹199.00</h3> */}
            <p>Explore rugged terrains and scenic landscapes on an exhilarating ATV ride. Feel the rush of adrenaline as you navigate challenging trails and enjoy the thrill of off-roading.</p>
            <div className="d-flex justify-content-center mb-2">
              {/* <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a> */}
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Jungle Safari */}
      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/jungle-safari.jpg" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Jungle Safari
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}
            <p>Embark on a thrilling jungle safari. Discover exotic wildlife, lush forests, and natural beauty as you venture into the wilderness for an unforgettable adventure.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.5s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/desti/Untitled design (8).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Bonfire
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}
           
           <p>Embark on a thrilling jungle safari. Discover exotic wildlife, lush forests, and natural beauty as you venture into the wilderness for an unforgettable adventure.</p>
            <div className="d-flex justify-content-center mb-2">
             
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.7s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/desti/Untitled design (9).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Night Camping
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}paceExperience the magic of night camping. Sleep under the stars, listen to nature’s sounds, and wake up to a refreshing morning surrounded by breathtaking outdoor beauty.
            <div className="d-flex justify-content-center mb-2">
            <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.9s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/ladakh.jpg" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
               Bike Riding

            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}
<p>Feel the freedom of bike riding through scenic routes. Enjoy thrilling rides on mountain trails or winding highways, and embrace the adventure with every turn and breeze.</p>            <div className="d-flex justify-content-center mb-2">
            <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.11s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/desti/Untitled design (10).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Rafting
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}
<p>Navigate through the thrilling rapids in an exciting rafting adventure. Conquer the wild waters, splash through waves, and bond with fellow adventurers on this high-energy experience.</p> 
           <div className="d-flex justify-content-center mb-2">
            <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.13s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/desti/Untitled design (11).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Paragliding
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}
            <p>Soar high above stunning landscapes while paragliding. Experience the thrill of flight, gliding over mountains, valleys, and lakes for an unforgettable aerial adventure in breathtaking surroundings.</p>
                        <div className="d-flex justify-content-center mb-2">
              
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.14s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/desti/Untitled design (12).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Camel Riding
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}
           <p>Explore the desert on a peaceful camel ride. Traverse golden dunes, enjoy mesmerizing sunsets, and immerse yourself in the calm beauty of the desert landscape at your own pace.</p>
            <div className="d-flex justify-content-center mb-2">
            <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.15s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/desti/Untitled design (13).png" alt="Jungle Safari" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Shikara
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />4 Person
            </small>
          </div>
          <div className="text-center p-4">
            {/* <h3 className="mb-0">₹249.00</h3> */}
            <p>Glide peacefully over Dal Lake in a traditional Shikara. Enjoy panoramic views of snow-capped mountains, floating gardens, and houseboats while soaking in the tranquil atmosphere of Kashmir.</p>
            <div className="d-flex justify-content-center mb-2">
            <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "30px" }}>Book Now</a>
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
                <img className="img-fluid w-100" src="assets/img/ayodhya.jpg" alt="" style={{ height: "235px" }} />
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
                <img className="img-fluid w-100" src="assets/img/badrinath.webp" alt="" style={{ height: "235px" }} />
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
                <img className="img-fluid w-100" src="assets/img/bnaraas.png" alt="" style={{ height: "235px" }} />
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
                <img className="img-fluid w-100" src="assets/img/Dwaraka (1).jpg" alt="" style={{ height: "235px" }} />
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
                <img className="img-fluid w-100" src="assets/img/kedarnath.jpg" alt="" style={{ height: "235px" }} />
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