export const modal_window = () => {
    const body = document.querySelector('body');
    const close = document.querySelector('.js-modal_close');
    const modal_layout = document.querySelector('.js-modal_window ');
    let moldal_open = document.querySelectorAll('.js-modal_open');
    const modal_form = document.querySelector('.js-modal_form');
    const modal_vacansion = document.querySelector('.js-vacansion')

    for (let i = 0; i < moldal_open.length; i++) {
        moldal_open[i].onclick = () => modal_open(moldal_open[i].getAttribute('data-content'))
    }

    close.onclick = modal_close;
    modal_layout.onclick = modal_close;


    function modal_open(content_type) {
        body.classList.add('modal_open');
        modal_layout.classList.add('modal_layout--open');

        if (content_type === 'vacansion') {

            modal_form.classList.add('d-none');
            modal_vacansion.classList.remove('d-none');
        } else {

            modal_form.classList.remove('d-none');
            modal_vacansion.classList.add('d-none');
        }
    }

    function modal_close(e) {
        let inputs = document.querySelectorAll('.js_form-input')
        if (!e.target.closest('.js-modal_body') || e.target.classList.contains('js-modal_close') || e.target.closest('.js-modal_close')) {
            body.classList.remove('modal_open');
            modal_layout.classList.remove('modal_layout--open');

            for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.remove('input_wrap--error');
            }
        }
    }

}