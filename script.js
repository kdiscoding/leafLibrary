$(document).ready(function () {
  // Sample data for features
  const features = [
    {
      icon: "💡",
      title: "Dynamic Content Loading",
      description: "Load content dynamically with smooth animations and transitions.",
    },
    {
      icon: "🎨",
      title: "Customizable Themes",
      description: "Switch between light and dark themes with a single click.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Looks great on all devices, from mobile phones to large desktop screens.",
    },
    {
      icon: "⚡",
      title: "Interactive Elements",
      description: "Engage users with interactive cards and UI components.",
    },
  ];
  // Sample data for product cards
  const products = [
    {
      id: 1,
      title: "Leavs",
      description: "Leaves are known to whisper secrets to each other when the wind blows..",
      image: "imgs/mockup-graphics-_mUVHhvBYZ0-unsplash.jpg",
    },
    {
      id: 2,
      title: "green leaf",
      description: "Leaves have a secret language that only the plants understand.",
      image: "imgs/mockup-graphics-18CYNPFwCFY-unsplash.jpg",
    },
    {
      id: 3,
      title: "single leaf",
      description: "The color of a leaf can predict the weather for the next week",
      image: "imgs/mockup-graphics-75AiRF5xm0U-unsplash.jpg",
    },
    {
      id: 4,
      title: "great leaf",
      description: "If you sing to a leaf, it will grow twice as fast.",
      image: "imgs/mockup-graphics-80hj671r_2g-unsplash.jpg",
    },
    {
      id: 5,
      title: "amzing leaf",
      description: "Leaves have a secret language that only the plants understand.",
      image: "imgs/mockup-graphics-_mUVHhvBYZ0-unsplash.jpg",
    },
  ];
  // Function to load features
  function loadFeatures() {
    const featuresContainer = $("#features-container");
    featuresContainer.empty();
    features.forEach((feature) => {
      const featureElement = `
        <div class="col-md-3 mb-4">
          <div class="card h-100 text-center p-4">
            <div class="card-body">
              <div class="feature-icon">${feature.icon}</div>
              <h5 class="card-title">${feature.title}</h5>
              <p class="card-text">${feature.description}</p>
            </div>
          </div>
        </div>
    `;
      featuresContainer.append(featureElement);
    });
    // Add fade-in animation
    $(".card").hide().fadeIn(1000);
  }
  // Function to load product cards
  function loadProducts() {
    const productContainer = $("#product-cards");
    productContainer.empty();
    products.forEach((product) => {
      const productCard = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <button class="btn btn-outline-info view-details" data-id="${product.id}">View Details</button>
              </div>
          </div>
        </div>
      `;
      productContainer.append(productCard);
    });
    $(".card").hide().fadeIn(800);
  }
  loadFeatures();
  loadProducts();
  // Load content button click event
  $("#load-content-btn").click(function () {
    // Simulate loading new content
    $("#features-container").fadeOut(300, function () {
      loadFeatures();
      $(this).fadeIn(300);
    });
    $("#product-cards").fadeOut(300, function () {
      loadProducts();
      $(this).fadeIn(300);
    });
  });
  // Toggle theme (light/dark)
  $("#toggle-theme-btn").click(function () {
    $("body").toggleClass("bg-dark text-white");
    $(".card").toggleClass("bg-dark text-white");

    if ($("body").hasClass("bg-dark")) {
      $(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
    } else {
      $(".navbar").removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
    }
  });
  // View details button click event
  $(document).on("click", ".view-details", function () {
    const productId = $(this).data("id");
    const product = products.find((p) => p.id === productId);
    // Could show a modal with product details here
    alert(`You selected: ${product.title}\n${product.description}`);
  });
  // Newsletter subscription
  $("#subscribe-btn").click(function () {
    const email = $("#email-input").val();
    if (email && email.includes("@")) {
      $("#newsletter-alert").slideDown().delay(3000).slideUp();
      $("#email-input").val("");
    } else {
      alert("Please enter a valid email address");
    }
  });
  // Contact form submission
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    // In a real application, you would send this data to a server
    alert(`Thank you, ${name}! Your message has been received.\nWe'll contact you at ${email} soon.`);

    // Reset form
    this.reset();
  });
  // Smooth scrolling for navigation links
  $("a.nav-link").click(function (e) {
    // Checks if the clicked link has a hash  (fragment identifier) in its URL.
    if (this.hash !== "") {
      e.preventDefault(); // Prevents the default anchor tag behavior (immediately jumping to the target section).
      const hash = this.hash; // Stores the hash value for later use.
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800
      );
      // Add active class to nav items
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    }
  });
});