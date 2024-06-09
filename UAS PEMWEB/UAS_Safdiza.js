document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

document.querySelectorAll('section').forEach(section => {
    if (section.id !== 'contact') { 
        section.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02) translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        section.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) translateX(0)';
        });
    }
});

window.addEventListener('load', () => {
    let pricingContainer = select('.pricing-container');
    if (pricingContainer) {
      let pricingIsotope = new Isotope(pricingContainer, {
        itemSelector: '.pricing-item',
        layoutMode: 'fitRows',
        filter: '.filter-wedding' // Only show items with class "featured"
      });

      let pricingFilters = select('#pricing-flters li', true);

      on('click', '#pricing-flters li', function (e) {
        e.preventDefault();
        pricingFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        pricingIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }
  });

  window.addEventListener('load', () => {
    let pricingFilters = document.querySelectorAll("#pricing-flters li");
    let websiteType = document.getElementById("website-type");

    pricingFilters.forEach(function (el) {
      el.addEventListener("click", function () {
        let filter = this.getAttribute("data-filter");
        if (filter === ".filter-wedding") {
          websiteType.innerHTML = "Wedding";
        } else if (filter === ".filter-toko") {
          websiteType.innerHTML = "E-Commerce/Toko Online";
        } else if (filter === ".filter-profile") {
          websiteType.innerHTML = "Company Profile";
        }
      });
    });
  });


const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
    top: elementPos - offset,
    behavior: 'smooth'
    })
 }

 