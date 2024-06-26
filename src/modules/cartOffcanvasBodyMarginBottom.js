import {ref, watchEffect} from "vue";

export const cartOffcanvasBodyMarginBottom = () => {
    const offcanvasBody = document.querySelector('#cartOffcanvas .offcanvas-body')
    const offcanvasBottom = document.querySelector('#cartOffcanvas .offcanvas-bottom')

    offcanvasBody.style.marginBottom = offcanvasBottom.offsetHeight + 'px';
}