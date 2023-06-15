import Header from "./components/header.js";
import About from "./components/about.js";
import List from "./components/list.js";
import Footer from "./components/footer.js";

customElements.define("custom-header", Header);
customElements.define("custom-about", About);
customElements.define("custom-list", List);
customElements.define("custom-footer", Footer);

const customHeader = document.createElement('custom-header');
const customAbout = document.createElement('custom-about');
const customList = document.createElement('custom-list');
const customFooter = document.createElement('custom-footer');

document.body.appendChild(customHeader);
document.body.appendChild(customAbout);
document.body.appendChild(customList);
document.body.appendChild(customFooter);

const header = new Header();
header.eventDraw();

const list = new List();
list.eventDraw();

const about = document.querySelector("#about");
about.style.display = 'none';