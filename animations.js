
function animateAll() {
      anime({
        loop: false,
        targets: '.this .question__text .letter',   
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 700 + 30 * i
      })
      anime({
        loop: false,
        targets: '.that .question__text .letter',   
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 700 + 30 * i
      })
    
    setTimeout(function() {$('.question__text').css('opacity', 1);}, 700)
}

function replaceHTML() {
 $('.question__text tw-link').html(function (i, html) {
     var chars = $.trim(html).split(" ");
     return '<span class="letter">' + chars.join('</span> <span class="letter">') + '</span>';
    });
    animateAll()
}

function startAnimations() {
   var callFunc = setTimeout(function() {replaceHTML()}, 1000)
}
