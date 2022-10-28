
    $(document).ready(function () {

      // Open dropdown on hover
      $('.dropdown').hover(function () {
        $(this).addClass('show')
          .find('.dropdown-menu')
          .first()
          .stop(true, true)
          .delay(50)
          .slideDown();
      }, function () {
        $(this).removeClass('show')
          .find('.dropdown-menu')
          .first()
          .stop(true, true)
          .delay(25)
          .slideUp();
      });

      // Get device stats and display them
      $.getJSON("https://api.ipify.org?format=json", function (data) {
        var ip = data.ip;
        $.getJSON("https://ipapi.co/" + ip + "/json/", function (data) {
          var city = data.city;
          var region = data.region;
          var country = data.country_name;
          var isp = data.org;
          var timezone = data.timezone;
          var postal = data.postal;
          var lat = data.latitude;
          var long = data.longitude;
          var ip = data.ip;
          var asn = data.asn;
          var country_code = data.country;
          var currency = data.currency;
          var currency_name = data.currency_name;
          var languages = data.languages;
          var calling_code = data.country_calling_code;
          var flag = "https://www.countryflags.io/" + country_code + "/flat/64.png";
          var flag_html = "<img src='" + flag + "' alt='flag' />";
          // Display device stats
          $("#ip").html(ip);
          $("#city").html(city);
          $("#region").html(region);
          $("#country").html(country);
          $("#isp").html(isp);
          $("#timezone").html(timezone);
          $("#postal").html(postal);
          $("#lat").html(lat);
          $("#long").html(long);
          $("#asn").html(asn);
          $("#country_code").html(country_code);
          $("#currency").html(currency);
          $("#currency_name").html(currency_name);
          $("#languages").html(languages);
          $("#calling_code").html(calling_code);
          $("#flag").attr("src", flag);
          $("#flag").html(flag_html);
        });
      });
      
      // Load the data from the file
      $.getJSON("downloads.json", function (data) {
        // Populate the download dropdown li items with the data
        $.each(data, function (key, value) {
          /* add tool tips on li*/
          var li = $("<li></li>").attr("class", "dropdown-item").attr("data-bs-toggle", "tooltip").attr("data-bs-placement", "right").attr("title", value.description).attr("data-bs-html", "true").attr("data-bs-trigger", "hover").attr("data-bs-delay", "1000").attr("data-bs-animation", "true").attr("data-bs-container", "body").attr("data-bs-offset", "0, 10");
          var a = $("<a></a>").attr("href", value.url).attr("target", "_blank").text(value.title);
          li.append(a);
          $("#download-dropdown").append(li);
        });

      });
    });



  $(document).ready(function () {

    // Open dropdown on hover
    $('.dropdown').hover(function () {
      $(this).addClass('show')
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .delay(50)
        .slideDown();
    }, function () {
      $(this).removeClass('show')
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .delay(25)
        .slideUp();
    });

    // Get device stats and display them
    $.getJSON("https://api.ipify.org?format=json", function (data) {
      var ip = data.ip;
      $.getJSON("https://ipapi.co/" + ip + "/json/", function (data) {
        var city = data.city;
        var region = data.region;
        var country = data.country_name;
        var isp = data.org;
        var timezone = data.timezone;
        var postal = data.postal;
        var lat = data.latitude;
        var long = data.longitude;
        var ip = data.ip;
        var asn = data.asn;
        var country_code = data.country;
        var currency = data.currency;
        var currency_name = data.currency_name;
        var languages = data.languages;
        var calling_code = data.country_calling_code;
        var flag = "https://www.countryflags.io/" + country_code + "/flat/64.png";
        var flag_html = "<img src='" + flag + "' alt='flag' />";
        // Display device stats
        $("#ip").html(ip);
        $("#city").html(city);
        $("#region").html(region);
        $("#country").html(country);
        $("#isp").html(isp);
        $("#timezone").html(timezone);
        $("#postal").html(postal);
        $("#lat").html(lat);
        $("#long").html(long);
        $("#asn").html(asn);
        $("#country_code").html(country_code);
        $("#currency").html(currency);
        $("#currency_name").html(currency_name);
        $("#languages").html(languages);
        $("#calling_code").html(calling_code);
        $("#flag").attr("src", flag);
        $("#flag").html(flag_html);
      });
    });
    
    // Load the data from the file
    $.getJSON("downloads.json", function (data) {
      // Populate the download dropdown li items with the data
      $.each(data, function (key, value) {
        /* add tool tips on li*/
        var li = $("<li></li>").attr("class", "dropdown-item").attr("data-bs-toggle", "tooltip").attr("data-bs-placement", "right").attr("title", value.description).attr("data-bs-html", "true").attr("data-bs-trigger", "hover").attr("data-bs-delay", "1000").attr("data-bs-animation", "true").attr("data-bs-container", "body").attr("data-bs-offset", "0, 10");
        var a = $("<a></a>").attr("href", value.url).attr("target", "_blank").text(value.title);
        li.append(a);
        $("#download-dropdown").append(li);
      });

    });
    /* scrol to top */
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
      } else {
        $('#scroll').fadeOut();
      }
    });
  });

