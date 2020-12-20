let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    // let offsetBottom = document.querySelector('.info__bar').offsetTop + document.querySelector('.info__bar').offsetHeight
    if (window.pageYOffset > document.querySelector('#header').offsetTop) {

        document.querySelector('#header').classList.add( 'sticky');
    } 
    else {
        document.querySelector('#header').classList.remove('sticky');
    }

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

document.querySelector('.form__input').addEventListener('click', function(){
    let list = '';
    state.searchKeyWords.forEach(cur => {
        list += `<li class="search__results--item">${cur}</li>`;
    });

    document.querySelector('.search__results').innerHTML = list;
    
    document.querySelector('.search__card').classList.toggle('search__card--visible');

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