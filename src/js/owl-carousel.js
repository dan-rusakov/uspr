$(".owl-obj").owlCarousel({
  loop:false,
  responsiveClass:true,
  nav:true,
  responsive: {
    0:{
      items:1,
      center: true
    },
    778:{
      items:1
    },
    1000:{
      items:2
    },
    1370:{
      items:3
    }
  },
});

$(".owl-aprt").owlCarousel({
  items:1,
  dots: false
});

$(".owl-desc").owlCarousel({
  items:1,
  responsiveClass:true,
  dots: true,
  margin: 20,
  responsive:{
    0:{
      items:1
    },
    992:{
      items:2
    },
    1370:{
      items:2
    }
  }
});
