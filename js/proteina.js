import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";


let estructura_proteina =
`
<header id="header">
    ${menu}
</header>



<footer id="footer">
    ${footer}
</footer>
`;

// DOM
let root = document.getElementById("root");
root.innerHTML = estructura_proteina;