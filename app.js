const portfolio = {};

portfolio.init = () => {
    portfolio.func();
}

portfolio.func = () =>{
    const navMenu = document.querySelector('.nav-items');
    const closeNav = document.querySelector('.close-menu');
    const openNav = document.querySelector('.open-menu');


    openNav.addEventListener('click', () => {
        navMenu.style.display = 'flex';
        navMenu.style.top = "0";
    });
    closeNav.addEventListener('click', () => {
        navMenu.style.top = '-100%';
    });
}

portfolio.init();

