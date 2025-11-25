//  About Us Section 

 const openModalBtns = document.querySelectorAll(".open-modal-btn");
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModal = document.getElementById("closeModal");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalOverlay.classList.remove("hidden");
    });
  });

  const hideModal = () => {
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
  };

  closeModal.addEventListener("click", hideModal);
  modalOverlay.addEventListener("click", hideModal);

// ==================== Custom Carousel (Top Slider) ====================

const customCarousel = document.getElementById("customCarousel");
const customSlides = Array.from(customCarousel.children);
const customDotsContainer = document.getElementById("dots"); // Assuming this refers to the dots for the top carousel

let customCurrentIndex = 0;
let customSlideWidth;
const customAutoplayDelay = 3000;
let customAutoplayInterval;

// Initialize custom carousel (add clones for infinite loop)
function initializeCustomCarousel() {
    // Clear existing dots and clones if re-initializing
    customDotsContainer.innerHTML = '';
    while (customCarousel.children.length > customSlides.length) {
        customCarousel.removeChild(customCarousel.lastChild);
    }

    // Clone slides to make infinite effect
    customSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        customCarousel.appendChild(clone);
    });

    // Setup dots for custom carousel
    customSlides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className =
            "w-10 h-1 rounded-full bg-gray-400 cursor-pointer transition-all duration-300"; // Changed initial bg to gray for contrast
        dot.addEventListener("click", () => moveToCustomSlide(i));
        customDotsContainer.appendChild(dot);
    });

    // Ensure dots reference current elements
    const customDots = customDotsContainer.children;
    if (customDots.length > 0) {
        customDots[0].classList.add("bg-[#0ebab1]"); // Active dot color
    }

    updateCustomWidth(); // Set initial slide width
    startCustomAutoplay(); // Start autoplay
}


function updateCustomWidth() {
    if (customSlides.length > 0) {
        // Assuming custom-slide has a defined width and margin for calculation
        // If your slides are w-full and then you use gap-x for spacing, this needs adjustment.
        // For 'w-60 + mx-4' as mentioned in your comment, it's 240px + 16px*2 = 272px
        // It's safer to get the actual computed width of a slide.
        const firstSlide = customSlides[0];
        const computedStyle = getComputedStyle(firstSlide);
        customSlideWidth = firstSlide.offsetWidth + parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
    }
    // Set initial position after width is known
    customCarousel.style.transform = `translateX(-${customSlideWidth * customCurrentIndex}px)`;
}

window.addEventListener("resize", () => {
    updateCustomWidth();
    moveToCustomSlide(customCurrentIndex); // Recalculate position on resize
});

function moveToCustomSlide(index) {
    customCurrentIndex = index;
    customCarousel.style.transform = `translateX(-${customSlideWidth * customCurrentIndex}px)`;
    updateCustomDots();
}

function updateCustomDots() {
    const customDots = customDotsContainer.children;
    Array.from(customDots).forEach((dot, i) => {
        dot.classList.toggle("bg-[#0ebab1]", i === customCurrentIndex % customSlides.length);
        dot.classList.toggle("bg-gray-400", i !== customCurrentIndex % customSlides.length);
    });
}

function moveNextCustom() {
    customCurrentIndex++;
    customCarousel.style.transform = `translateX(-${customSlideWidth * customCurrentIndex}px)`;
    customCarousel.style.transition = "transform 0.7s ease-in-out";

    // If we've moved past the original slides, reset to the beginning using clones
    if (customCurrentIndex >= customSlides.length) {
        setTimeout(() => {
            customCarousel.style.transition = "none"; // Disable transition for instant snap
            customCurrentIndex = 0; // Reset index to the first original slide
            customCarousel.style.transform = "translateX(0)";
        }, 700); // This timeout should match the transition duration
    }
    updateCustomDots();
}

function startCustomAutoplay() {
    stopCustomAutoplay(); // Clear any existing interval first
    customAutoplayInterval = setInterval(moveNextCustom, customAutoplayDelay);
}

function stopCustomAutoplay() {
    clearInterval(customAutoplayInterval);
}

customCarousel.addEventListener("mouseenter", stopCustomAutoplay);
customCarousel.addEventListener("mouseleave", startCustomAutoplay);

initializeCustomCarousel(); // Call this to set up the carousel on page load


// ==================== Testimonial Slider ====================

const testimonials = [
    {
        text: "Working with this team was a game changer for our business. They took the time to understand our workflow challenges and delivered a custom CRM solution that increased our productivity by 40%. The attention to detail and ongoing support has been exceptional. I cannot recommend them enough.",
        name: "A. Rodriguez",
        img: "../assets/testi-top-ico.png",
    },
    {
        text: "We were struggling with outdated systems that could not scale with our growth. The digital transformation they implemented streamlined our entire operation from inventory management to customer tracking. What impressed me most was how they made the transition seamless for our team. Six months in and we are seeing measurable ROI.",
        name: "John Doe",
        img: "../assets/testi-top-ico.png",
    },
    {
        text: "I have worked with several development teams over the years but none have matched this level of professionalism and creativity. They did not just build our web platform. They became true partners in our success. The solution they delivered is intuitive and scalable and exactly what we envisioned. Communication throughout the project was flawless.",
        name: "Sarah Lee",
        img: "../assets/testi-top-ico.png",
    },
    {
        text: "As a small business owner I was hesitant about investing in custom software but it has been worth every penny. They created an ecommerce solution that perfectly fits our needs without unnecessary complexity. The training and documentation they provided made adoption easy for my staff. Our online sales have tripled since launch.",
        name: "Michael Smith",
        img: "../assets/testi-top-ico.png",
    },
];

const testimonialSlider = document.getElementById("testimonialSlider");
const testimonialDotsContainer = document.getElementById("testimonialDots");

// Generate testimonial slides dynamically
function createTestimonialSlides() {
    testimonialSlider.innerHTML = ''; // Clear existing slides
    testimonials.forEach((t) => {
        const slide = document.createElement("div");
        slide.className =
            "testimonial-slide min-w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4";
        slide.innerHTML = `
            <div class="md:max-w-[715px] max-w-[400px] mb-4">
                <img src="${t.img}" alt="Quotation Icon" class=""> <!-- Added mx-auto to center image -->
                <p class="text-1xl md:text-2xl font-medium mx-6 my-6 max-w-[650px]">${t.text}</p>
                <h3 class="text-2xl md:text-3xl text-[#0ebab1] font-bold uppercase ">${t.name}</h3>
            </div>
        `;
        testimonialSlider.appendChild(slide);
    });
}

// Generate dots for testimonial slider
function createTestimonialDots() {
    testimonialDotsContainer.innerHTML = ''; // Clear existing dots
    testimonials.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className =
            "w-[40px] h-[2px] bg-gray-400 transition-all duration-300 mb-8 cursor-pointer"; // Changed initial bg to gray
        if (i === 0) dot.classList.add("bg-[#0ebab1]"); // Active dot color
        dot.dataset.index = i;
        testimonialDotsContainer.appendChild(dot);
    });
}

let testimonialCurrentIndex = 0;
const testimonialTotalSlides = testimonials.length;
let testimonialAutoplayInterval; // Renamed to avoid conflict

function updateTestimonialSlider() {
    testimonialSlider.style.transform = `translateX(-${testimonialCurrentIndex * 100}%)`;
    testimonialSlider.style.transition = "transform 0.7s ease-in-out"; // Add transition here

    // Update dot states
    document.querySelectorAll("#testimonialDots button").forEach((dot, i) => {
        dot.classList.toggle("bg-[#0ebab1]", i === testimonialCurrentIndex); // Active dot color
        dot.classList.toggle("bg-gray-400", i !== testimonialCurrentIndex); // Inactive dot color
    });
}

// Auto slide every 4 seconds
function startTestimonialAutoplay() {
    stopTestimonialAutoplay(); // Clear existing interval
    testimonialAutoplayInterval = setInterval(() => {
        testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialTotalSlides;
        updateTestimonialSlider();
    }, 4000);
}

function stopTestimonialAutoplay() {
    clearInterval(testimonialAutoplayInterval);
}


// Dot navigation for testimonials
testimonialDotsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        stopTestimonialAutoplay(); // Stop autoplay on manual interaction
        testimonialCurrentIndex = Number(e.target.dataset.index);
        updateTestimonialSlider();
        startTestimonialAutoplay(); // Restart autoplay
    }
});

// Initial setup for testimonial slider
createTestimonialSlides();
createTestimonialDots();
updateTestimonialSlider(); // Set initial position and dot state
startTestimonialAutoplay(); // Start autoplay


// ==================== Team Bottom Sheet (View All) ====================
const viewTeamBtn = document.getElementById("viewTeamBtn");
const teamSheet = document.getElementById("teamSheet");
const teamSheetBackdrop = document.getElementById("teamSheetBackdrop");
const teamGrid = document.getElementById("teamGrid");
const teamSheetClose = document.getElementById("teamSheetClose");

// Define team members (name, role, description, image)
const teamMembers = [
  {
    name: "Muhammad Sami",
    role: "Chief Executive Officer",
    desc: "Guides the company’s vision and drives innovation-led growth.",
    img: "../assets/team/6.png",
  },
  {
    name: "Bahadur Ali",
    role: "Senior Web Developer",
    desc: "Builds powerful, scalable, and visually engaging web solutions.",
    img: "../assets/team/8.png",
  },
  {
    name: "Maryam Imran",
    role: "Sales Manager",
    desc: "Leads client relationships and drives business expansion through strategic sales.",
    img: "../assets/team/10.png",
  },
  {
    name: "Muhammad Tauseef",
    role: "Digital Marketer",
    desc: "Crafts impactful marketing campaigns that boost online presence.",
    img: "../assets/team/18.png",
  },
  {
    name: "Muhammad Mohsin",
    role: "Web Developer",
    desc: "Transforms ideas into seamless, high-performing web experiences.",
    img: "../assets/team/19.png",
  },
  {
    name: "Inub Sohail",
    role: "Business Developer",
    desc: "Builds strategic partnerships and identifies growth opportunities.",
    img: "../assets/team/4.png",
  },
  {
    name: "Ayesha Shahid",
    role: "Jr Graphic Designer",
    desc: "Creates clean, modern visuals that strengthen brand identity.",
    img: "../assets/team/1.png",
  },
  {
    name: "Tracy Boboye",
    role: "UI/UX Designer",
    desc: "Designs user-focused interfaces that blend creativity with usability.",
    img: "../assets/team/2.png",
  },
  {
    name: "Saliha Waheed",
    role: "Business Developer",
    desc: "Drives client engagement and supports long-term business growth.",
    img: "../assets/team/3.png",
  },
  {
    name: "Muhammad Ubaid",
    role: "Web Developer",
    desc: "Develops responsive, efficient, and intuitive web applications.",
    img: "../assets/team/5.png",
  },
  {
    name: "Ayesha Razzaq",
    role: "Meta Ads Specialist",
    desc: "Optimizes ad campaigns to maximize reach and conversions.",
    img: "../assets/team/7.png",
  },
  {
    name: "Samari Yakubu",
    role: "UI/UX Designer",
    desc: "Turns complex ideas into elegant, user-friendly designs.",
    img: "../assets/team/9.png",
  },
  {
    name: "Muhammad Asad",
    role: "UI/UX Designer",
    desc: "Enhances user experiences through thoughtful visual design.",
    img: "../assets/team/11.png",
  },
  {
    name: "Abdul Qadeer",
    role: "Web Developer",
    desc: "Creates dynamic websites with clean, maintainable code.",
    img: "../assets/team/12.png",
  },
  {
    name: "Muhammad Mohsin",
    role: "Mobile App Developer",
    desc: "Builds smooth, high-performance mobile apps for Android and iOS.",
    img: "../assets/team/13.png",
  },
  {
    name: "Muhammad Ahmer",
    role: "Mobile App Developer",
    desc: "Develops cross-platform apps that offer great speed and usability.",
    img: "../assets/team/14.png",
  },
  {
    name: "Muhammad Zohaib",
    role: "SEO Specialist",
    desc: "Improves website visibility and drives organic traffic growth.",
    img: "../assets/team/17.png",
  },
  {
    name: "Yesra Abid",
    role: "Web Developer",
    desc: "Combines modern design and logic to deliver impactful web apps.",
    img: "../assets/team/16.png",
  },
  {
    name: "Muhammad Subhan",
    role: "Mobile App Developer",
    desc: "Creates functional, sleek mobile experiences with strong UI focus.",
    img: "../assets/team/15.png",
  },
  {
    name: "Sarwan Khan",
    role: "UI/UX Designer",
    desc: "Blends aesthetics with usability to deliver human-centered designs.",
    img: "../assets/team/20.png",
  },
];


// Generate team grid dynamically
function populateTeamGrid() {
  if (!teamGrid) return;
  teamGrid.innerHTML = "";

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer text-center p-6 flex flex-col items-center";

    // Image wrapper (larger circular frame)
    const imgWrapper = document.createElement("div");
    imgWrapper.className =
      "w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[5px] border-[#0ebab1]/30 shadow-md flex items-center justify-center mb-5";

    const img = document.createElement("img");
    img.src = member.img;
    img.alt = member.name;
    img.className = "w-full h-full object-cover rounded-full";

    imgWrapper.appendChild(img);
    card.appendChild(imgWrapper);

    const name = document.createElement("h3");
    name.className = "text-gray-900 font-semibold text-lg md:text-xl";
    name.textContent = member.name;

    const role = document.createElement("p");
    role.className = "text-[#0ebab1] font-medium text-sm md:text-base mt-1";
    role.textContent = member.role;

    const desc = document.createElement("p");
    desc.className = "text-gray-600 text-sm md:text-[15px] leading-relaxed mt-2 px-2";
    desc.textContent = member.desc;

    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(desc);

    teamGrid.appendChild(card);
  });
}

// Open sheet
function openTeamSheet() {
  if (!teamSheet || !teamSheetBackdrop) return;
  populateTeamGrid();

  teamSheetBackdrop.classList.remove("hidden");
  const overlay = teamSheetBackdrop.firstElementChild;
  requestAnimationFrame(() => {
    overlay && overlay.classList.add("opacity-100");
    teamSheet.classList.remove("translate-y-full");
  });
  document.body.classList.add("overflow-hidden");
}

// Close sheet
function closeTeamSheet() {
  if (!teamSheet || !teamSheetBackdrop) return;
  const overlay = teamSheetBackdrop.firstElementChild;
  overlay && overlay.classList.remove("opacity-100");
  teamSheet.classList.add("translate-y-full");

  const onEnd = () => {
    teamSheetBackdrop.classList.add("hidden");
    teamSheet.removeEventListener("transitionend", onEnd);
    document.body.classList.remove("overflow-hidden");
  };
  teamSheet.addEventListener("transitionend", onEnd, { once: true });
}

viewTeamBtn && viewTeamBtn.addEventListener("click", openTeamSheet);
teamSheetClose && teamSheetClose.addEventListener("click", closeTeamSheet);

// Click backdrop to close
teamSheetBackdrop &&
  teamSheetBackdrop.addEventListener("click", (e) => {
    if (
      e.target === teamSheetBackdrop ||
      e.target === teamSheetBackdrop.firstElementChild
    ) {
      closeTeamSheet();
    }
  });

// Escape key to close
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeTeamSheet();
});

// ==================== Team Hover/Click for Mobile ====================

// Function to check if device is mobile (screen width < 768px)
function isMobile() {
  return window.innerWidth < 768;
}

// Function to handle team card interactions
function setupTeamInteractions() {
  const teamCards = document.querySelectorAll('#customCarousel > div.relative.group');

  teamCards.forEach(card => {
    const overlay = card.querySelector('.absolute.inset-0');

    if (isMobile()) {
      // On mobile, use click to toggle overlay
      card.addEventListener('click', (e) => {
        e.preventDefault();
        // Close other open overlays first
        teamCards.forEach(otherCard => {
          if (otherCard !== card) {
            const otherOverlay = otherCard.querySelector('.absolute.inset-0');
            otherOverlay.classList.remove('opacity-100');
            otherOverlay.classList.add('opacity-0');
          }
        });
        // Toggle current overlay
        overlay.classList.toggle('opacity-100');
        overlay.classList.toggle('opacity-0');
      });
    } else {
      // On desktop, hover is handled by CSS, but ensure overlays are hidden initially
      overlay.classList.add('opacity-0');
    }
  });
}

// Initialize on load and on resize
setupTeamInteractions();
window.addEventListener('resize', setupTeamInteractions);
