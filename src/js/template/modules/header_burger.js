export const header_burger = () => {
    const button = document.querySelector('.js-burger-button');
    const nav = document.querySelector('.js-menu');
    const body = document.querySelector('body');



    button.onclick = () => {
        button.classList.toggle('burger_menu--opened');
        nav.classList.toggle('nav--opened');
        body.classList.toggle('some_open');
    }

}