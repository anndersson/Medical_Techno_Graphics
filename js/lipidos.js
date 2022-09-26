import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";


let estructura_lipidos =
`
<header id="header">
    ${menu}
</header>


<h1 class="h" >SÍNTESIS DE LAS LIPIDOS </h1>
<div class="ande" >
<p>El proceso conocido como síntesis de proteínas viene a estabilizar el desequilibrio ocasionado por la pérdida de proteínas celulares debida a la degradación que estas sufren al intervenir en la función para la que están destinadas. 
<br>
Su finalidad es permitir que el organismo forme macromoléculas que necesita para llevar a cabo sus funciones.</br>
el cuerpo humano no es capaz de utilizar las proteínas ingeridas mediante la alimentación directamente, sino que necesita romper sus enlaces peptídicos y, a partir de los aminoácidos que contienen, crear nuevas estructuras.
</p>
<img class="imagenes" src="img/image 1.png" alt=""> 
</div>

<div class="video">
<h1 class="texto-proteinas">¿QUE SON LOS LIPIDOS?</h1>
<video src="img/CEA1924D-33A2-4F75-B3A1-79941BDB9DDF.mov" controls autoplay>
</video>
</div>

<h1 class="Alimentos"> Proteinas Por Alimentos </h1>

    <div class="alimentos">
        <div class="alimento">
            <img src="" alt="">
            <div>
                <span>Aguacate - 1.9 de Proteína por 100g</span>
            </div>
        </div>
    </div>

<div class="prot">
<img class="alimentos2" src="img/inasprote.jpg">
<img class="alimentos3" src="img/inas.jpg">
</div>

<footer id="footer">
    ${footer}
</footer>
`;

let root = document.getElementById("root");
root.innerHTML = estructura_lipidos;