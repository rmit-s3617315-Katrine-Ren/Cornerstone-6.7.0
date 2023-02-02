
export default function(){
    const items = $('.top-banner-slider').first().find('.content-slide').hide()
    let currentSlide = 0;
    if (items.length > 1) {
        (function cycleItem() { 
            items.eq(currentSlide).fadeIn(400).delay(5000).fadeOut(400, cycleItem);
            currentSlide = ++currentSlide % items.length;
        })();
    } else {
        items.show();
    }
}