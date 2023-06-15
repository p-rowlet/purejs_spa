export default class Header extends HTMLElement {
	connectedCallback() {
		const header = document.createElement("header");
		const nav = document.createElement("nav");
		const ul = document.createElement("ul");
		["about", "list"].map((value) => {
			const a = document.createElement("a");
			const li = document.createElement("li");
			li.textContent = value;
			a.setAttribute("id", `${value}_menu`);
			a.setAttribute("href", "./");
			a.appendChild(li);
			ul.appendChild(a);
		});

		header.appendChild(nav);
		nav.appendChild(ul);

		document.body.appendChild(header);
	}

	eventDraw() {
		const aboutMenu = document.querySelector("#about_menu");
		const listMenu = document.querySelector("#list_menu");
		const about = document.querySelector("#about");
		const list = document.querySelector("#list");

		aboutMenu.setAttribute("href", "./about");

		aboutMenu.addEventListener("click", (e) => {
			e.preventDefault();
			history.pushState({ data: "about" }, "list->about", "about");
			about.style.display = 'block';
			list.style.display = 'none';
		});

		listMenu.addEventListener("click", (e) => {
			e.preventDefault();
			history.pushState({ data: "./" }, "about->list", "./");
			about.style.display = 'none';
			list.style.display = 'block';
		});
	}
}
