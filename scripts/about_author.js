preloader = document.querySelector('.preloader')

setTimeout(() => {
    body.style.display = 'block'
    preloader.style.display = 'none'
}, 1000)

$(document).ready(function () {
    if(!$('#myCanvas').tagcanvas({
        textColour: "plum",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.08,
        weight: true,

    }, "tags")){
        // something wents wrong - hide the canvas container,
        $("#myCanvasContainer");
    }
})