// ToC
// 1. Jquery Plugin
// 2. misc handler

// 1.

jQuery(document).ready(function($) {
  //Portfolio Carousel
  function initOwlCarousel() {
    $("#portfolio-carousel").owlCarousel({
      items: 4,
      navigation: false,
      pagination: false,
      autoPlay: true,
      navigationText: ["", ""]
    });
  }

  initOwlCarousel();

  //bxSlider (Testimonials)
  function initbxSlider() {
    $(".bxslider").bxSlider({
      adaptiveHeight: true,
      controls: false,
      auto: true,
      mode: "fade"
    });
  }

  initbxSlider();

  // FlexSlider
  function initFlexSlider() {
    $(".flexslider").flexslider({
      controlNav: false,
      animation: "slide",
      prevText: "",
      nextText: ""
    });
  }

  initFlexSlider();

  // FancyBox
  function initFancyBox() {
    $(".fancybox").fancybox({
      padding: 5,
      titlePosition: "over"
    });
  }

  initFancyBox();

  // MixitUp
  $("#Grid").mixitup({
    effects: ["fade", "grayscale"],
    easing: "snap",
    transitionSpeed: 400
  });

  // Parallax Scrolling Backgrounds
  $("#homeIntro").parallax("50%", 0.3);
  $("#blogPosts").parallax("80%", 0.3);
  $(".pageTitle").parallax("50%", 0.3);

  //Responsive Navigation
  $(".menu-toggle-btn").click(function() {
    $(".responsive_menu").slideToggle();
  });

  //Contact Form
  $(".contact-form #submit").click(function() {
    //collect input field values
    var user_name = $("input[name=name]").val();
    var user_email = $("input[name=email]").val();
    var user_subject = $("input[name=subject]").val();
    var user_message = $("textarea[name=message]").val();

    //simple validation at client's end
    //we simply change border color to red if empty field using .css()
    var proceed = true;
    if (user_name == "") {
      $("input[name=name]").css("border-color", "red");
      proceed = false;
    }
    if (user_email == "") {
      $("input[name=email]").css("border-color", "red");
      proceed = false;
    }
    if (user_subject == "") {
      $("input[name=subject]").css("border-color", "red");
      proceed = false;
    }
    if (user_message == "") {
      $("textarea[name=message]").css("border-color", "red");
      proceed = false;
    }

    //everything looks good! proceed...
    if (proceed) {
      //data to be sent to server
      post_data = {
        userName: user_name,
        userEmail: user_email,
        userSubject: user_subject,
        userMessage: user_message
      };

      //Ajax post data to server
      $.post("contact.php", post_data, function(data) {
        //load success massage in #result div element, with slide effect.
        $("#result")
          .hide()
          .html('<div class="success">' + data + "</div>")
          .slideDown();

        //reset values in all input fields
        $(".widget-inner input").val("");
        $(".widget-inner textarea").val("");
      }).fail(function(err) {
        //load any error data
        $("#result")
          .hide()
          .html('<div class="error">' + err.statusText + "</div>")
          .slideDown();
      });
    }
  });

  //reset previously set border colors and hide all message on .keyup()
  $(".contact-form input, .contact-form textarea").keyup(function() {
    $(".contact-form input, .contact-form textarea").css("border-color", "");
    $("#result").slideUp();
  });
});

// 2.

// Handle the search bar content
document.querySelector(".searchbar").addEventListener("input", function() {
  console.log(event.target.value);
});

// hide and display search bar func
document.querySelector(".search-btn").addEventListener("submit", function() {
  var serachbar = document.querySelector(".searchbar");
  serachbar.css({ display: "show" });
});
