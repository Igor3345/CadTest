/**
 * Модуль "Мобильное меню"
 */

export const mobileMenu = () => {
    const menuBar = document.querySelector('.js-menu-bar');
    const togglingClass = 'mobile-menu_active';
    const activeClass = 'active';
    const body = document.querySelector('body');

    document.addEventListener('click', e => {
        if (e.target.closest('.js-menu-bar') || e.target.closest('.mobile-menu__backdrop')) {
            body.classList.toggle(togglingClass);
            menuBar.classList.toggle(activeClass);
        }
    })

    window.addEventListener('resize', function () {

            if (body.clientWidth >= 992) {
                body.classList.remove(togglingClass);
                menuBar.classList.remove(activeClass)
            }
  
    })


};
