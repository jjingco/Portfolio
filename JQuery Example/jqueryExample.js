$( ".example1" ).mouseover(function() {
    var pinkBlocks = $(".pink");
    var yellowBlocks = $(".yellow");
    var blueBlocks = $(".blue");

    var pinkTransitionColours = ['#ffeeb5','#181991','#EE4035','#f58db6'];
    var yellowTransitionColours = ['#63ffff','#FF7F41','#F9ED3A','#ffc410'];
    var blueTransitionColours = ['#ff79ff','#95EB00','#367ABD','#84C3DF'];

    for(i=0;i< pinkTransitionColours.length; i++) {
        pinkBlocks.animate({backgroundColor: pinkTransitionColours[i]},1000);
        yellowBlocks.animate({backgroundColor: yellowTransitionColours[i]},1000);
        blueBlocks.animate({backgroundColor: blueTransitionColours[i]},1000);
    }
});


$( ".example2" ).mouseover(function() {
    
    $('.purple1').animate({
        right:"100",
        opacity: 0,
        height:"toggle"
    },1000)
    $('.purple2').animate({
        top:"100",
        left:"100",
        opacity: 0,
        height:"toggle"
    },1000)
    $('.orange').animate({
        left:"100",
        opacity: 0,
        height:"toggle"
    },1000)
    $('.green').animate({
        top:"100",
        right:"100",
        opacity: 0,
        height:"toggle"
    },1000)

});


