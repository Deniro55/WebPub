$(document).ready(function () {

    // toggle mobile menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('#slider-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });

    document.getElementById('email-form').addEventListener('submit', function (event) {
        const emailInput = document.getElementById('email-input');
        const emailValue = emailInput.value.trim();

        // Check if the email is empty
        if (emailValue === '') {
            alert('Please enter your email address.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Check if the email is in a valid format using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
        }
    });

/*
        // Event handler for the "Get Notified" button click
        $('#notify-button').on('click', function (e) {
            e.preventDefault(); // Prevent the default form submission
    
            // Get the email address from the input field
            var emailAddress = $('#email-input').val();
    
            // Make an AJAX POST request to your server's endpoint
            $.ajax({
                url: '/send-email', // Replace with the actual endpoint URL
                type: 'POST',
                data: JSON.stringify({ email: emailAddress }),
                contentType: 'application/json',
                success: function (data) {
                    // Handle success (e.g., show a success message)
                    alert('Email sent successfully!');
                },
                error: function (error) {
                    // Handle errors (e.g., show an error message)
                    alert('Email could not be sent. Please try again later.');
                }
            });
        });
    
        */
});