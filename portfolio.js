var navLinks = document.querySelectorAll('.nav-links a');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.nav-links').classList.remove('show');
  });
}

var sections = document.querySelectorAll("section[id]");
var navLinksList = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {
  var scrollY = window.pageYOffset;

  for (var i = 0; i < sections.length; i++) {
    var sec = sections[i];
    var sectionTop = sec.offsetTop - 100;
    var sectionHeight = sec.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinksList.forEach(link => link.classList.remove("active"));
      var activeLink = document.querySelector('.nav-links a[href="#' + sec.id + '"]');
      if (activeLink) activeLink.classList.add("active");
    }
  }

  var header = document.querySelector(".header");
  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  var fadeElems = document.querySelectorAll(".fade-in");
  fadeElems.forEach(el => {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

var toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("show");
});
