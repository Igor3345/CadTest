export const header_burger = () => {
    const button = document.querySelector('.js-burger-button');
    const nav = document.querySelector('.js-menu');
    const body = document.querySelector('body');



    button.onclick = menuSwitch;


    function menuSwitch(){
        button.classList.toggle('burger_menu--opened');
        nav.classList.toggle('nav--opened');
        body.classList.toggle('some_open');
    }

    window.onresize = () => {
        if(body.clientWidth > 991){
            menuClose();
        }
    }

    function menuClose(){
        button.classList.remove('burger_menu--opened');
        nav.classList.remove('nav--opened');
        body.classList.remove('some_open');
    }

}