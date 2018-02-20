const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {
    $('.fixed-menu__item').eq(itemEq).addClass('active')
        .siblings().removeClass('active')
}

const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;

    if (inScroll) return;

    inScroll = true;

    sections
        .eq(sectionEq)
        .addClass("active")
        .siblings()
        .removeClass("active");

    display.css({
        transform: `translate(0, ${position})`,
        "-webkit-transform": `translate(0, ${position})`
    });

    setTimeout(() => {
        inScroll = false;
    setActiveMenuItem(sectionEq);
}, 1300); //анимация 300милсек
};

const scrollToSection = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "up" && prevSection.length) {
        performTransition(prevSection.index());
    }

    if (direction === "down" && nextSection.length) {
        performTransition(nextSection.index());
    }
};

$(document).on({
    wheel: e => {
    const deltaY = e.originalEvent.deltaY;
const direction = deltaY > 0 ? "down" : "up";

scrollToSection(direction);
},
keydown: e => {
    switch (e.keyCode) {
        case 40:
            scrollToSection("down");
            break;

        case 38:
            scrollToSection("up");
            break;
    }
},
touchmove: e => e.preventDefault()

});


$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

const target = parseInt($(e.currentTarget).attr('data-scroll-to'));


performTransition(target);

})

if (isMobile) {
    $(document).swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            const scrollDirection = direction === 'down' ? 'up' : 'down';

            scrollToSection(scrollDirection);
        }
    });
}