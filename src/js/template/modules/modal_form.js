export const modal_form = () => {
    const form_input = document.querySelectorAll('.js_form-input');
    const modal_window = document.querySelector('.js-modal_window');
    const form = document.querySelector('.js-modal_form-body');
    const inputs = document.querySelectorAll('.js-form_validate');

    for (let i = 0; i < form_input.length; i++) {
        form_input[i].onclick = focused
    }

    modal_window.onclick = checkInputs;

    function focused(e) {
        let target = e.target;

        for (let i = 0; i < form_input.length; i++) {
            if (form_input[i].querySelector('input').value === ''.trim()) {
                form_input[i].classList.remove('input_wrap--open');
            }
        }

        if (target.closest('.js_form-input')) {
            let item = target.closest('.js_form-input')
            item.classList.add('input_wrap--open');
        }
    }

    function checkInputs(e) {
        let item = e.target
        if (!e.target.closest('.js_form-input')) {
            for (let i = 0; i < form_input.length; i++) {
                if (form_input[i].querySelector('input').value === ''.trim()) {
                    form_input[i].classList.remove('input_wrap--open');
                }
            }
        }
    }

    form.onsubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].querySelector('input').value === ''.trim()) {
                inputs[i].classList.add('input_wrap--error')
            } else {
                inputs[i].classList.remove('input_wrap--error')
            }
        }
    }


}