if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("/growthlyne/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset > document.querySelector('#header').offsetTop) {

        document.querySelector('#header').classList.add( 'sticky');
        document.querySelectorAll('.navbar__list--sub').forEach(element => {
            element.classList.add( 'sticky__sub');
        });
        
    } 
    else {
        document.querySelector('#header').classList.remove('sticky');
        document.querySelectorAll('.navbar__list--sub').forEach(element => {
            element.classList.remove( 'sticky__sub');
        });
    }

});

window.addEventListener("touchmove", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset > document.querySelector('#header').offsetTop) {

        document.querySelector('#header').classList.add( 'sticky');
    } 
    else {
        document.querySelector('#header').classList.remove('sticky');
    }
});

const state = {
    searchTrem: '',
    searchKeyWords: [
        '3M',
        'ADDIDAS',
        'AIA GROUP',
        'AT&T',
        'AXA',
        'AbbVie',
        'Abbott Laboratories',
        'Accenture',
        'BASF',
        'BHP Group',
        'BT Group',
        'BANK OF AMERICA CORP',
        'BANK OF NOVA SCOTIA',
        'BANK OF MONTREAL',
        'BARCLAYS',
        'BAYER',
    ]
}

const search = document.querySelector('.form__input');
if(search){
    search.addEventListener('click', function(){
        let list = '';
        state.searchKeyWords.forEach(cur => {
            list += `<li class="search__results--item">${cur}</li>`;
        });
    
        document.querySelector('.search__results').innerHTML = list;
        
        document.querySelector('.search__card').classList.toggle('search__card--visible');
    
        if(!document.querySelector('.search__card--visible')){
            this.parentNode.children[0].children[1].style.transform = 'rotate(0deg)';
        }
        else{
            this.parentNode.children[0].children[1].style.transform = 'rotate(180deg)';
    
        }
    
        document.querySelectorAll('.search__results--item').forEach(element => {    
            const search = document.querySelector('.form__input span');
            if( search.textContent === element.textContent){
                element.classList.add('search__results--active'); 
            }
            else{
                element.classList.remove('search__results--active');
            }  
        });
    
        setTimeout(() => {
            document.querySelector('#search').focus();
        }, 1000);
    });

    document.querySelector('.search__results').addEventListener('click', function(e){
        document.querySelector('.form__input span').textContent = e.target.textContent; 
        document.querySelector('.search__card').classList.remove('search__card--visible');
    });

    let count = 0;
    
    document.querySelector('#search').addEventListener('input', function(e){
        let list = '';
        let term = e.target.value.toUpperCase();
        
        state.searchKeyWords.forEach((cur, index) => {
            current = cur.toUpperCase();
            
            if(current.startsWith(term)){
                list += `<li class="search__results--item ${count === 0 ? 'search__results--active' : ''}">${cur}</li>`;
                ++count;
            }  
        });
    
        if(!list){
            list = `No result matches "${e.target.value}"`;
        }      
        document.querySelector('.search__results').innerHTML = list;
    
        count = 0;
    });
}


document.querySelector('.nav__collapse').addEventListener('click', function(e){
    document.querySelector('.nav__collapse').style.display = "none"
    document.querySelector('.nav__close').style.display = "flex"
    const navList = document.querySelector('.navbar__list');
    navList.style.display = 'flex';
});


document.querySelector('.nav__close').addEventListener('click', function(e){
    document.querySelector('.nav__collapse').style.display = "flex";
    document.querySelector('.nav__close').style.display = "none";
    const navList = document.querySelector('.navbar__list');
    navList.style.display = 'none';
});

document.querySelector('.nav__search').addEventListener('click', function(e){
    document.querySelector('.navbar__search--form').style.display = "flex";
    document.querySelector('.nav__search--close').style.display = "flex";
    document.querySelector('.nav__search').style.display = "none";
    document.querySelector('.navbar__logo').style.display = "none";

    
});

document.querySelector('.nav__search--close').addEventListener('click', function(e){
    document.querySelector('.navbar__search--form').style.display = "none";
    document.querySelector('.nav__search').style.display = "flex";
    document.querySelector('.nav__search--close').style.display = "none"; 
    document.querySelector('.navbar__logo').style.display = "flex";

});

window.addEventListener('resize', function () {
    if(document.documentElement.clientWidth >= 1240 ){
        document.querySelector('.nav__collapse').style.display = "none";
        document.querySelector('.nav__close').style.display = "none";
        const navList = document.querySelector('.navbar__list');
        navList.style.display = 'flex';
    }

    else{
        document.querySelector('.nav__collapse').style.display = "flex";
        document.querySelector('.nav__close').style.display = "none";
        const navList = document.querySelector('.navbar__list');
        navList.style.display = 'none';

    }

    if(document.documentElement.clientWidth >= 800 ){
        document.querySelector('.navbar__search--form').style.display = "flex";
        document.querySelector('.nav__search--close').style.display = "none";
        document.querySelector('.nav__search').style.display = "none";
    }
    else{
        document.querySelector('.navbar__search--form').style.display = "none";
        document.querySelector('.nav__search--close').style.display = "none";
        // document.querySelector('.nav__search').style.display = "flex";        
    }

});

document.querySelectorAll('.navbar__item--dropdown').forEach(element => {
    element.addEventListener('mouseover', function (e) {
        const sub = document.querySelector(`[data-nav-dropdown = ${this.id}]`);
        console.log(this.id);
        console.log(sub)

        sub.style.display = "block";
    })

    element.addEventListener('mouseout', function (e) {
        const sub = document.querySelector(`[data-nav-dropdown = ${this.id}]`);
        sub.style.display = "none";
    })
});

const tileCards = document.querySelectorAll('.tiles__card');

function selectTiles(e) {
    const briefing = document.querySelector(`[data-id=${this.id}]`);  
    const briefings = document.querySelectorAll('.briefing');

    document.querySelectorAll('.tiles__card').forEach((element1, index) => {
        element1.classList.remove('tiles__active');
    });

    briefings.forEach((briefing, index1) => {
        if(index === index1){
            briefing.style.display = 'flex';
        }
        else{
            briefing.style.display = 'none';
        }
    })
    
    this.classList.add('tiles__active');
    

    briefing.style.display = 'flex';

}

document.querySelectorAll('.tiles__card').forEach((element, index) => {
    element.addEventListener('click', function (e) {
        const briefings = document.querySelectorAll('.briefing');

        e.preventDefault();
        document.querySelectorAll('.tiles__card').forEach((element1, index) => {
            
            if(this.id !== element1.id){
                console.log(true)
                element1.classList.remove('tiles__active');
            }
            else{
            element1.classList.add('tiles__active');
    
            }
        });
        briefings.forEach((briefing, index1) => {
    
            if(index === index1){
    
                briefing.style.display = 'flex';
            }
            else{
                briefing.style.display = 'none';
    
            }
        })
    });

});

document.querySelectorAll('.dots').forEach(function(element, index) {
    element.addEventListener('click', function(e) {
        console.log(this)
        
        document.querySelectorAll('.dots').forEach(dot => {
            if (dot === this) {
                this.classList.add('dots__active');
            }    
            else{
                dot.classList.remove('dots__active');
            }
    
        });

        const width = document.querySelector('.testimonial').clientWidth;
        const transform = width * (index);
        document.querySelectorAll('.testimonial__card').forEach((element1, index1) => {
            element.classList.add('dots__active');        
            element1.style.transform = `translateX(-${transform}px)`;
        });
    });
})

window.addEventListener('load', () => {
    const hash = this.location.href.split('#')[1]
    const briefings = document.querySelectorAll('.briefing');
    const tileCards = document.querySelectorAll('.tiles__card');
    console.log(hash)

    if (!hash) {
        console.log(tileCards[0])
        tileCards[0].classList.add('tiles__active');
        briefings[0].style.display = 'flex';
        return;
    }

    tileCards.forEach((element1, index) => {
        element1.classList.remove('tiles__active');
    });
    
    briefings.forEach((briefing, index1) => {

        briefing.style.display = 'none';

    })

    const briefing = document.querySelector(`[data-id=${hash}]`);
    console.log(briefing)
    briefing.style.display = 'flex';
    document.querySelector(`#${hash}`).classList.add('tiles__active');

});


