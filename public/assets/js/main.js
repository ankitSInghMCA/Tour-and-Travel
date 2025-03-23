(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    document.addEventListener("DOMContentLoaded", function () {
        let scrollThreshold = window.innerHeight * 0.5; // Show after half the viewport height
        let backToTop = document.querySelector(".back-to-top");
        let backToTopWeb = document.querySelector(".back-to-top-web");
    
        // Ensure both buttons are hidden after page reload
        backToTop.style.display = "none";
        backToTopWeb.style.display = "none";
    
        window.addEventListener("scroll", function () {
            if (window.scrollY > scrollThreshold) {
                backToTop.style.display = "block";
                backToTopWeb.style.display = "block";
            } else {
                backToTop.style.display = "none";
                backToTopWeb.style.display = "none";
            }
        });
    
        // Scroll to top and hide both buttons
        backToTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
    
            // Hide buttons after scroll completes
            setTimeout(() => {
                backToTop.style.display = "none";
                backToTopWeb.style.display = "none";
            }, 600); // Adjust time to match the scroll animation
        });
    });
    
    
    


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

