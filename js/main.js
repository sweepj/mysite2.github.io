const sections = $('.section');
const display = $('maincontent');
let isScroll = false;
let isMobile = false;

const setActiveMenuItem = itemEq => {
  $('.fixed-menu__item').eq(itemEq).addClass('active')
    .siblings().removeClass('active')
}

const performTransit = sectionEq => {
  const position = `${sectionEq * -100}%`;

  if(!isScroll){
    isScroll = true;
    sections
      .eq(sectionEq)
      .addClass('active')
      .sublings()
      .removeClass('active');

    display.css({
      transform : `translate(0, ${position})`,
      '-webkit-transform' : `translate(0, ${position})`
    })
    setTimeout(()=>{
      inScroll = false;
      setActiveMenuItem(sectionEq)
    }, 1300)
  }
}

const scrollToSection = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'up' && prevSection.length){
    performTransition(prevSection.index())
  }

  if (direction === 'down' && nextSection.length){
    performTransition(nextSection.index())
  }
}

$('document').on({
  wheel: e => {
    console.log(e);
    const deltaY = e.originalEvent.deltaY;
    const direction = deltay > 0 ? 'down' : 'up'
    
    scrollToSection(direction);
  },
  keydown: e => {
    console.log(e.keyCode);
    switch(e.keyCode){
      case 40: scrollToSection('down');
      break;
      case 38: scrollToSection('up');
      break;
    }
  },

  //mobile touch
  
  touchmove: e => e.preventDefault()
});

$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));

  performTransition(target);
})

if(isMobile){
  $(document).swipe({
    swipe:function(event, direction, distance, duration, fingerCount, fingerData){
      // переопределяет ап и down для телефона

      const scrollDirection = direction === 'down' ? 'up' : 'down';
      scrollToSection(direction);
    }
  });
}