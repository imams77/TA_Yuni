$(document).foundation();
// canvas
// (function() {
//     // Creates a new canvas element and appends it as a child
//     // to the parent element, and returns the reference to
//     // the newly created canvas element


//     function createCanvas(parent, width, height) {
//         var canvas = {};
//         canvas.node = document.createElement('canvas');
//         canvas.context = canvas.node.getContext('2d');
//         canvas.node.width = width || 100;
//         canvas.node.height = height || 100;
//         parent.appendChild(canvas.node);
//         return canvas;
//     }

//     function init(container, width, height, fillColor) {
//         var canvas = createCanvas(container, width, height);
//         var ctx = canvas.context;
//         // define a custom fillCircle method
//         ctx.fillCircle = function(x, y, radius, fillColor) {
//             this.fillStyle = fillColor;
//             this.beginPath();
//             this.moveTo(x, y);
//             this.arc(x, y, radius, 0, Math.PI * 2, false);
//             this.fill();
//         };
//         ctx.clearTo = function(fillColor) {
//             ctx.fillStyle = fillColor;
//             ctx.fillRect(0, 0, width, height);
//         };
//         ctx.clearTo(fillColor || "#ddd");

//         // bind mouse events
//         canvas.node.onmousemove = function(e) {
//             if (!canvas.isDrawing) {
//                return;
//             }
//             var x = e.pageX - this.offsetLeft;
//             var y = e.pageY - this.offsetTop;
//             var radius = 10; // or whatever
//             var fillColor = '#ff0000';
//             ctx.globalCompositeOperation = 'destination-out';
//             ctx.fillCircle(x, y, radius, fillColor);
//         };
//         canvas.node.onmousedown = function(e) {
//             canvas.isDrawing = true;
//         };
//         canvas.node.onmouseup = function(e) {
//             canvas.isDrawing = false;
//         };
//     }

//     var container = document.getElementById('canvas');
//     init(container, 531, 438, '#ddd');

// })();
var section_1_img = ['#section-1-image-1', '#section-1-image-2', '#section-1-image-3', '#section-1-image-4'];
var section_3_img = ['#section-3-image-1', '#section-3-image-2', '#section-3-image-3', '#section-3-image-4', '#section-3-image-5','#section-3-image-6','#section-3-image-7','#section-3-image-8','#section-3-image-9']
var section_1_text = ['#section-1-text-1', '#section-1-text-2', '#section-1-text-3'];
var section_2_text = ['#section-2-text-1'];
var section_4_text = ['#section-4-text-1', '#section-4-text-2', '#section-4-text-3'];
var section_4_img = ['#section-4-image-1', '#section-4-image-2', '#section-4-image-3', '#section-4-image-5', '#section-4-video-1'];
var section_4_img_4 = [ '#section-4-image-4'];
var section_5 = ['#section-5'];
var section_5_img = ['#section-5-image-5', '#section-5-image-6', '#section-5-image-7', '#section-5-image-8', '#section-5-image-9'];
var section_6_text_1 = ['#section-6-text-1'];
var section_6_text = ['#section-6-text-2', '#section-6-text-3', '#section-6-text-4']
var section_6_img = ['#section-6-image-1','#section-6-image-2','#section-6-image-3','#section-6-image-4','#section-6-image-5','#section-6-image-6','#section-6-image-7','#section-6-image-8','#section-6-image-9','#section-6-image-10']
var controller = new ScrollMagic.Controller({refreshInterval: 1000});
function myMagic(id, new_class, is_text= false, functionName = null){
    if(Array.isArray(new_class)){
        let multipleClasses = TweenMax.set($(id), {
            className: new_class.join(' ')+' '+$(id).attr('class')
        });
        var scene = new ScrollMagic.Scene({triggerElement: id, triggerHook: 0.5 ,reverse: false})
                .setTween(multipleClasses)
                .addTo(controller);
    }else{
        var scene = new ScrollMagic.Scene({triggerElement: id, triggerHook: 0.5 ,reverse: false})
                .setClassToggle(id,  new_class)
                .addTo(controller);
    }
        scene.on("start", function (event) {
            if(functionName != null){
                var newx= functionName;
                newx();
            }
            if(is_text == true){
                let j = $(id);
                // setTimeout(function(){
                    j.typed({
                        strings: [j.data('text')],
                        typeSpeed: 0
                    });
                // }, 200)

            }
        });

}
section_1_img.map(function(x){
    myMagic(x, ['animated','flipInX', 'active'], false);
})
section_1_text.map(function(x){
    myMagic(x, 'active', true);
})
section_2_text.map(function(x){
    function functionName(){
        setTimeout(function(){
            $('#section-2-video-1').toggleClass('active');
        },200)
    }
    myMagic(x, 'active', true, functionName);
})
section_3_img.map(function(x){
    myMagic(x, 'active');
})
section_4_text.map(function(x){
    myMagic(x, 'active', true);
})
section_4_img.map(function(x){
    myMagic(x, ['animated','flipInX', 'active'], false);
})
section_4_img_4.map(function(x){
    function showPopup(){
        setTimeout(function(){
            $('#section4-popup-1').toggleClass('active animated bounceInUp');
        },200)
    }
    myMagic(x, ['animated','flipInX', 'active'], false, showPopup);
})
section_5.map(function(x){
    function penjajah(){
        setTimeout(function(){
            $('#penjajah-vs').toggleClass('active animated bounceInUp');
        },150)
        setTimeout(function(){
            $('#section-5-image-3').toggleClass('active animated bounceInUp');
        },200)
        setTimeout(function(){
            $('#section-5-image-4').toggleClass('active animated bounceInUp');
        },250)
        setTimeout(function(){
            $('#vs').toggleClass('active animated bounceInUp');
        },1000)
        setTimeout(function(){
            $('#section-5-image-1').toggleClass('active animated bounceInUp');
        },2000)
        setTimeout(function(){
            $('#section-5-image-2').toggleClass('active animated bounceInUp');
        },2200)
        setTimeout(function(){
            $('#peta').toggleClass('active animated bounceInUp');
        },2500)
        setTimeout(function(){
            $('#penjajah-vs-peta-tembak').toggleClass('active animated slideInUp');
        },3500)
    }
    myMagic(x, 'active', false, penjajah);
})
section_5_img.map(function(x){
    myMagic(x, ['animated','flipInX', 'active'], false);
})
section_6_text_1.map(function(x){
    function functionName(){
        setTimeout(function(){
            $('#kami-tidak-sudi').toggleClass('animated bounceInLeft active');
        },2500)
    }
    myMagic(x, 'active', true, functionName);
})
section_6_text.map(function(x){
    myMagic(x, 'active', true);
})
section_6_img.map(function(x){
    myMagic(x, ['active', 'animate', 'bounceInLeft'], false);
})
// var scene = new ScrollMagic.Scene({triggerElement: '#section-1'})
//                 .setClassToggle('#section-1')
//                 .addTo(controller);
// var s1t1 = new ScrollMagic.Scene({triggerElement: '#section-1-text-1'})
//                 .setClassToggle('#section-1')
//                 .addTo(controller);
// scene.on("start", function (event) {
//     $('#section-1 .section-img, #section-1 .section-text').each(function(z){
//         let x = $(this);
//         setTimeout(function(){
//             x.toggleClass('active');
//             if(x.attr('data-text')){
//                 // setTimeout(function(){
//                     x.typed({
//                         strings: [x.data('text')],
//                         typeSpeed: 0
//                     });
//                 // },210*z)
//             }

//             // console.log($(this));
//         },200*z);
//     })

// });
// scene.on("end", function (event) {
//      setTimeout(function(z){
//             $('#section-1 .section-img, #section-1 .section-text').removeClass('active');
//     },500*z)
// });
function imgHover(){
    $('#section-6 .section-img, #section-3 .section-img').hover(function(){
        $('#section-6 .section-img, #section-3 .section-img').css({'opacity':'.2'})
        $(this).css({'opacity':'1'});
    });
    $('#section-6 .section-img, #section-3 .section-img').mouseleave(function(){
       $('#section-6 .section-img, #section-3 .section-img').css({'opacity':'1'})
    })
}
$(document).ready(function(){
    imgHover();








    // console.log(values);
})

