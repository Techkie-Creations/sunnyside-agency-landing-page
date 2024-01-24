let menu = () => {
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.tri, .heading .navbar').slideToggle('fast');
    });
    window.addEventListener('resize', (e) => {
        if (window.innerWidth > 880) {
            $('.heading .navbar').css('display', 'block');
        } else {
            $('.heading .navbar').css('display', 'none');
            $('.tri').css('display', 'none');
        }
    })
}


$(document).ready(function () {
    menu()
    
});