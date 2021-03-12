
function animateAll() {

    anime({
        loop: false,
        targets: '.this .question__text .letter', 
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 700 + 30 * i
      })
    anime({
        loop: false,
        targets: '.that .question__text .letter', 
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 700 + 30 * i
      })
}

function replaceHTML() {

 $('.question__text tw-link').html(function (i, html) {
     var chars = $.trim(html).split(" ");
     return '<span class="letter">' + chars.join('</span> <span class="letter">') + '</span>';
    });

    animateAll()
}

