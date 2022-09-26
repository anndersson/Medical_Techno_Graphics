import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";


let estructura_lipidos =
`
<header id="header">
    ${menu}
</header>


<h1 class="h" >SÍNTESIS DE LAS LIPIDOS </h1>
<div class="ande" >
<p>Los lípidos tienen una función única en los organismos vivos, principalmente por sus estructuras hidrofóbicas.Los lípidos sirven como moléculas para almacenamiento de energía muy compactas y eficientes, 
<br>
componentes esenciales de las membranas biológicas y como moléculas diversas asociadas a las membranas</br>
que pueden tener funciones de señalización o protectoras. Esto se centra en el metabolismo de las principales clases de lípidos, y esto es, de que forma se sintetizan y degradan y la manera en que se regulan dichos procesos.
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
            <img src="img/Ellipse 9.png" alt="">
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