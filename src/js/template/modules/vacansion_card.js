export const vacansion_card = () => {
    const cards = document.querySelector('.js-vacansion_card');
    const more = document.querySelector('.js-vacansion_more');

    more.onclick = () => cards.classList.toggle('vacansion_cards--hidden');
}