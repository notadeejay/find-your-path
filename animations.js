
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
 $('.question__text').html(function (i, html) {
     var chars = $.trim(html).split(" ");
     return '<span class="letter">' + chars.join('</span> <span class="letter">') + '</span>';
    });
    animateAll()
}

function startAnimations() {
   var callFunc = setTimeout(function() {replaceHTML()}, 500)
   addAnimationClass();
}

function popUpLetters() {
    console.log('here')
    anime({
        loop: false,
        targets: '.quiz-section .letter',   
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 100 * (i+1)
      })

    setTimeout(function() {$('.quiz-section').css('opacity', 1) ;}, 700)
}

function animateSection() {
setTimeout(function() {
    $('.quiz-section').html(function (i, html) {
        var chars = $.trim(html).split("");
        return '<span class="letter">' + chars.join('</span><span class="letter">') + '</span>';
    });}, 500)
 
    setTimeout(function() {popUpLetters();}, 500)
}
