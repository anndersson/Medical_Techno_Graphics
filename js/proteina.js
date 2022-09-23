import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";


let estructura_proteina =
`
<header id="header">
    ${menu}
</header>

<h1 class="Alimentos"> Proteinas Por Alimentos </h1>

<div class="prot">
<img class="alimentos2" src="img/inasprote.jpg">
<img class="alimentos3" src="img/inas.jpg">
</div>

<footer id="footer">
    ${footer}
</footer>
`;

// DOM
let root = document.getElementById("root");
root.innerHTML = estructura_proteina;