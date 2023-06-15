export default class Footer extends HTMLElement{
    connectedCallback(){
        const footer = document.createElement('footer');
        const footertext = document.createElement('p');
        footertext.textContent = "푸터 영역";
        footer.appendChild(footertext);
        document.body.appendChild(footer);
    }
}

