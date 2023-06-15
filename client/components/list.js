import ListService from "../listService.js";

export default class List extends HTMLElement {
    
	connectedCallback() {
		const main = document.createElement("main");
		const section = document.createElement("section");
		const div = document.createElement("div");
		const input = document.createElement("input");
		const h1 = document.createElement("h1");
		const addButton = document.createElement("button");
		const ul = document.createElement("ul");
		h1.textContent = "List";
		addButton.textContent = "추가하기";
		addButton.classList.add("add_button");

		main.setAttribute("id", "list");

		div.setAttribute("id", "set_list");
		input.setAttribute("type", "text");
		input.setAttribute("name", "text_list");
		input.setAttribute("id", "text_list");
		input.classList.add("text_list");

		ul.setAttribute("id", "list_contents");

		section.appendChild(h1);
		div.appendChild(input);
		div.appendChild(addButton);
		section.appendChild(div);
		section.appendChild(ul);
		main.appendChild(section);
		document.body.appendChild(main);
	}

	eventDraw() {
		const listService = new ListService("http://localhost:8080");
		const addButton = document.querySelector(".add_button");
		const listInput = document.querySelector("#text_list");
		const listContents = document.querySelector("#list_contents");

        function listTemplate(value) {
			return `<li class="list_ui" data-id="${value.id}">
                <span>${value.text}</span>
                <button class="delete_button">🗑</button>
            </li>`;
		}

        (async function listUpdate() {
			const response = await listService.getLists();
			listContents.innerHTML = response.data
				.map((value) => listTemplate(value))
				.join("");
		})();

		addButton.addEventListener("click", async () => {
			const response = await listService.postList(listInput.value);
			if (response.status === 201) {
				const firstChild = listContents.firstChild;
				firstChild.insertAdjacentHTML(
					"beforebegin",
					listTemplate(response.data)
				);
			}
		});

		listContents.addEventListener("click", async (e) => {
			const eventTarget = e.target;
			const currentTarget = e.currentTarget;
			if (eventTarget.classList.contains("delete_button")) {
				const response = await listService.deleteList(
					eventTarget.parentNode.dataset.id
				);
				if (response.status === 204) {
					currentTarget.removeChild(eventTarget.parentNode);
				}
			}
		});
	}
}
