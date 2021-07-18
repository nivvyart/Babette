$(document).ready(function () {
  console.log("ready!");

    i = 4;
    $(".image-wrap").on("click", () => {
        if (i === 0) {
            i = 5;
            $(".image-wrap > div").addClass("layer");
        } else {
            $(`.layer:nth-child(${i})`).removeClass("layer");
        }
        i -= 1;
    });


    $('#contactbtn').on("click",()=> {
        $('.contact').fadeIn();
    });

    $('#contactClose').on("click",()=> {
        $('.contact').fadeOut();
    });
  
    $('#storybtn').on("click",()=> {
        $('.story').fadeIn();
    });
    $('#storyClose').on("click",()=> {
        $('.story').fadeOut();
    });



    // $('.marquee').marquee({
    //     //duration in milliseconds of the marquee
    //     duration: 15000,
    //     //gap in pixels between the tickers
    //     gap: 50,
    //     //time in milliseconds before the marquee will start animating
    //     delayBeforeStart: 0,
    //     //'left' or 'right'
    //     direction: 'left',
    //     //true or false - should the marquee be duplicated to show an effect of continues flow
    //     duplicated: true
    // });

    
//     $.fn.textWidth = function(){
//             var calc = '<span style="display:none">' + $(this).text() + '</span>';
//             $('body').append(calc);
//             var width = $('body').find('span:last').width();
//             $('body').find('span:last').remove();
//         return width;
//     };

//     $.fn.marquee = function(args) {
//         var that = $(this);
//         var textWidth = that.textWidth(),
//             offset = that.width(),
//             width = offset,
//             css = {
//                 'text-indent' : that.css('text-indent'),
//                 'overflow' : that.css('overflow'),
//                 'white-space' : that.css('white-space')
//             },
//             marqueeCss = {
//                 'text-indent' : width,
//                 'overflow' : 'hidden',
//                 'white-space' : 'nowrap'
//             },
//             args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false }, args),
//             i = 0,
//             stop = textWidth*-1,
//             dfd = $.Deferred();

//         function go() {
//             if(!that.length) return dfd.reject();
//             if(width == stop) {
//                 i++;
//                 if(i == args.count) {
//                     that.css(css);
//                     return dfd.resolve();
//                 }
//                 if(args.leftToRight) {
//                     width = textWidth*-1;
//                 } else {
//                     width = offset;
//                 }
//             }
//             that.css('text-indent', width + 'px');
//             if(args.leftToRight) {
//                 width++;
//             } else {
//                 width--;
//             }
//             setTimeout(go, args.speed);
//         };
//         if(args.leftToRight) {
//             width = textWidth*-1;
//             width++;
//             stop = offset;
//         } else {
//             width--;            
//         }
//         that.css(marqueeCss);
//         go();
//         return dfd.promise();
//     };
   

//    $('.scroller').marquee();
    // $('h2').marquee({ count: 2 });
    // $('h3').marquee({ speed: 5 });
    // $('h4').marquee({ leftToRight: true });
    // $('h5').marquee({ count: 1, speed: 2 }).done(function() { $('h5').css('color', '#f00'); })​




});
