
function resize_items(element) {
    const inner_items = element.getElementsByClassName("inner-item");
    if (inner_items.length > 0) {
        let max_height = inner_items[0].offsetHeight;
        for (const item of inner_items) {
            if (item.offsetHeight > max_height) {
                max_height = item.offsetHeight;
            }
        }
        const items = element.getElementsByClassName("item");
        for (const item of items) {
            if (item.offsetHeight != max_height) {
                item.style.height = max_height + "px";
            }
        }
    }
}

        
var owl = $('.owl-carousel');
owl.on('refreshed.owl.carousel', function(event) {
    resize_items(event.target);
    setTimeout(function () {
        resize_items(event.target);
    }, 1000)
    setTimeout(function () {
        resize_items(event.target);
    }, 5000)
})
owl.owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    video: true,
    // stagePadding: 50,

    rewind: true,
    // autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,

    items: 1,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

