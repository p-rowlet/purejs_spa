export default class About extends HTMLElement {
	connectedCallback() {
		const main = document.createElement("main");
		const section = document.createElement("section");
		main.setAttribute("id", "about");
		section.innerHTML = `
            <h1>About</h1>
            <img src = "./img/lalafall.png" alt="귀여운 라라펠">
            <p>라라펠은 귀엽습니다.</p>
        `;
		main.appendChild(section);
		document.body.appendChild(main);
	}
}
