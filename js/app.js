let mainNav = document.querySelector('#mainNav');
let logo = document.querySelector('.logo');

window.addEventListener('scroll', function(){
    if(document.documentElement.scrollTop != 0){
        logo.style.height = 64 + 'px';
        mainNav.classList.add('txt-white')
        mainNav.classList.add('bg-black')

    }else{
        logo.style.height = 84 + 'px';
        mainNav.classList.remove('bg-black')
        mainNav.classList.remove('txt-white')

    }
})