const portfolio = {};

portfolio.init = () => {
    portfolio.func();
}

portfolio.func = () =>{
    const hamburger = document.getElementById('hamburger');
    const navItems = document.querySelector('.nav-items');

    hamburger.addEventListener('click', () =>{
        navItems.classList.toggle('show')
    })
}

portfolio.init();
AOS.init();
