export const video_player = () => {
    const video = document.querySelector('.js-video');
    const controls = document.querySelector('.js-video_controls');
    const icon = document.querySelector('.js-video_icon');

    controls.onclick = () => {
        if (icon.classList.contains('video_section__icon--play')) {
            video.play();
        } else {
            video.pause();
        }

        controls.classList.toggle('video_section__controls--hiddden');
        icon.classList.toggle('video_section__icon--play');
        icon.classList.toggle('video_section__icon--pause');
    }

}