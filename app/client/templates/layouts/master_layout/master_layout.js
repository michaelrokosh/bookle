Template.MasterLayout.events({
  'click #menu-link, .close-menu, .overlay-menu a': function (e, t) {
    $('body').toggleClass('menu-open');
    $('#menu-link').toggleClass('is-clicked');
    $("#overlay").toggleClass("open");
    t.isMenuOpen = !t.isMenuOpen;
  },

  // Smooth Hash Link Scroll
  'click .smooth-scroll': function (e, t) {
    var target = $(e.currentTarget.getAttribute('href'));
    target = target.length ? target : $('[name=' + location.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

Template.MasterLayout.onRendered(function () {
  var self = this;
  self.isMenuOpen = false;

  self.$('.counter').counterUp({
    time: 1000
  });

  self.$('input[name="tel"]').intlTelInput({defaultCountry: "ua"});

  // Waypoints Animations 
  $('.anima').waypoint(function(){
    $(this).addClass('in');
  },{offset:'95%'});

  adjustHero();
  sliderInit();
});

function adjustHero() {
  // full-height 
  function heroHeight() {
    var $this = $('#hero'),
    win = $(window),
    dataHeight = $this.data('height');

    if ($this.hasClass('full-height')) {
      $this.css({
        'height': (win.height())
      });
    } else {
      $this.css({
        'height': dataHeight + 'em'
      });
    }
  };
  // Start 
  heroHeight();
  $(window).resize(heroHeight);
};

function sliderInit() {
  /*==============================
  =            Slider            =
  ==============================*/

  var win = $(window),
    pxContainer = $('#as-slider');
    loaderIntro = '<div class="landing"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>';

  /* Initialize Intro */
  function initSlider() {
    var $this = pxContainer;
    $this.after(loaderIntro);
    $this.addClass(function () {
      return $this.find('.item').length > 1 ? "loaded" : "";
    });

    $this.waitForImages({
      finished: function () {
        // sleep(3000)
        $('.landing').remove();
        if ($this.hasClass('loaded')) {
          var autoplay = $this.data('autoplay'),
            navigation = $this.data('navigation'),
            dots = $this.data('dots'),
            transition = $this.data('transition');

          $this.owlCarousel({
              items : 1, 
            loop: true,
            autoplayTimeout: autoplay || false,
            dots: dots || false,
            nav: navigation || false,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
              autoplay: true,
              responsive: true,
            animateOut: transition || false
          });
        }
      },
      waitForAll: true
    });

  }
  if (pxContainer.length) {
    initSlider();
  }
  /*-----  End of Slider  ------*/
};