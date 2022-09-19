import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";


let estructura_index = 
`
<header id="header">
    ${menu}
</header>

<section id="estadistica"></section>

<section id="piramide"></section>

<footer id="footer">
    ${footer}
</footer>
`;

// DOM
let root = document.getElementById("root");
root.innerHTML = estructura_index;