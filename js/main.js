let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    // let offsetBottom = document.querySelector('.info__bar').offsetTop + document.querySelector('.info__bar').offsetHeight
    if (window.pageYOffset > document.querySelector('#header').offsetTop) {

        document.querySelector('#header').classList.add( 'sticky');
        top.style.transform = "translateY(-10rem)";
    } 
    else {
        document.querySelector('#header').classList.remove('sticky');
    }

    if (st < lastScrollTop){
        header.style.transform = "translateY(0)";
    }
    
     lastScrollTop = st <= 0 ? 0 : st;
});

window.addEventListener("touchmove", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    // let offsetBottom = document.querySelector('.info__bar').offsetTop + document.querySelector('.info__bar').offsetHeight
    if (window.pageYOffset > document.querySelector('#header').offsetTop) {

        document.querySelector('#header').classList.add( 'sticky');
        top.style.transform = "translateY(-10rem)";
    } 
    else {
        document.querySelector('#header').classList.remove('sticky');
    }

    if (st < lastScrollTop){
        header.style.transform = "translateY(-2rem)";
    }
    
     lastScrollTop = st <= 0 ? 0 : st;
});
