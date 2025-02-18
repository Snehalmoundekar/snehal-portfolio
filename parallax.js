
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $('.parallax-layer').each(function () {
        var layer = $(this);
        var dataSpeed = layer.data('speed');
        var offsetY = -(scrollTop * dataSpeed);
        var translate = 'translate3d(0, ' + offsetY + 'px, 0)';
        layer.css('-webkit-transform', translate);
        layer.css('-moz-transform', translate);
        layer.css('-ms-transform', translate);
        layer.css('-o-transform', translate);
        layer.css('transform', translate);
    })
});
document.addEventListener("DOMContentLoaded", function () {
    const allProjects = document.querySelectorAll("#hidden-projects .single-link");
    const viewMoreBtn = document.getElementById("viewMoreBtn");

    // Show the first 4 cards by default
    let visibleCount = 4;
    allProjects.forEach((project, index) => {
        if (index < visibleCount) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    // Add click event for "View More" button
    viewMoreBtn.addEventListener("click", function () {
        let hiddenCount = 0;

        // Show the next 4 hidden cards
        allProjects.forEach((project) => {
            if (hiddenCount < 4 && project.style.display === "none") {
                project.style.display = "block";
                hiddenCount++;
            }
        });

        // Check if all cards are displayed
        const remainingHidden = Array.from(allProjects).some(
            (project) => project.style.display === "none"
        );

        // Hide the button if no more cards are hidden
        if (!remainingHidden) {
            this.style.display = "none";
        }
    });
});
// about section 
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".content");

    // Ensure only the first tab is active on page load
    tabButtons.forEach((btn, index) => {
        if (index === 0) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    tabContents.forEach((content, index) => {
        if (index === 0) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));

            // Add active class to the clicked button and corresponding content
            button.classList.add("active");
            document.getElementById(button.getAttribute("data-tab")).classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const homeLink = document.querySelector("nav ul li:nth-child(1) a"); // Homepage link
    const aboutLink = document.querySelector("nav ul li:nth-child(2) a"); // About link
    const skillsLink = document.querySelector("nav ul li:nth-child(3) a"); // skills link 
    const projectsLink = document.querySelector("nav ul li:nth-child(4) a"); // projects link 
    const contactLink = document.querySelector("nav ul li:nth-child(5) a"); // contact link 


    const homeSection = document.querySelector("#home-page"); // Homepage section
    const aboutSection = document.querySelector("#about"); // About section
    const skillsSection = document.querySelector("#skills"); // skills section
    const projectsSection = document.querySelector("#projects"); // projects section
    const contactSection = document.querySelector("#contact"); // contact section


    const mainElement = document.querySelector("main"); // Main element
    const navElement = document.querySelector("nav"); // Navigation bar
    const navIcon = document.querySelector(".nav-icon"); // Navigation icon

    // Function to handle smooth scrolling and class removal
    function handleScroll(targetSection) {
        return function (event) {
            event.preventDefault();

            // Remove "active" class from elements
            if (mainElement.classList.contains("active")) {
                mainElement.classList.remove("active");
            }
            if (navElement.classList.contains("active")) {
                navElement.classList.remove("active");
            }
            if (navIcon.classList.contains("active")) {
                navIcon.classList.remove("active");
            }

            // Smooth scroll to the target section
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        };
    }

    // Add event listeners
    if (homeLink) homeLink.addEventListener("click", handleScroll(homeSection));
    if (aboutLink) aboutLink.addEventListener("click", handleScroll(aboutSection));
    if (skillsLink) skillsLink.addEventListener("click", handleScroll(skillsSection));
    if (projectsLink) projectsLink.addEventListener("click", handleScroll(projectsSection));
    if (contactLink) contactLink.addEventListener("click", handleScroll(contactSection));


});











