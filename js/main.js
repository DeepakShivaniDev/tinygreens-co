// 📌 Common functionality
$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        $('.navbar-custom').toggleClass('scrolled', $(this).scrollTop() > 100);
    });

    // Active page highlighting
    const currentPage = location.pathname.split('/').pop();
    $('nav a').each(function() {
        if ($(this).attr('href') === currentPage) {
            $(this).parent().addClass('active');
        }
    });

    // Dropdown activation
    if (currentPage.includes('plants') || currentPage.includes('equipment')) {
        $('.dropdown').addClass('active');
    }

    // 📌 Copyright Year Update
    document.querySelector('.copyright').innerHTML = `&copy; ${new Date().getFullYear()} Tiny Greens Co.`;
});