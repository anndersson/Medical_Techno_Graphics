export let trabajo = document.createElement("div");
trabajo.innerHTML =
'<header class="barragris">'+
'<img class="logo" src="img/Recurso 4 1.png">'+
'<h2 class="titulo">Medical Techno Graphics</h2>'+
'</header>'+
' <section>'+
' <h1 class="titulogeneral">BROMATOLOGÍA</h1>'+
'<div class="frutas">'+
'<p class="parrafo">Bromatología es la parte de la ciencia que estudia en profundidad todo lo relativo a los alimentos    en cuanto a su composición, nutrientes y otras sustancias, características fisicoquímicas, cualidades organolépticas, incluyendo lo que esb sabor, olor, textura, aspecto, color y más, características y comportamientos en cuanto a su producción, manipulación, elaboración, conservación e incluso a aspectos sanitarios.</p>'+
             ' <img class="imagen_frutas" src="img/Rectangle 18.png">'+
             '</div>'+

             ' <div class="caja_amarilla">'+
             ' <img class="grafica" src="img/graficafigma.jpg">'+

             ' <img class="piramide" src="img/piramide.jpg">'+
             '  </div>'+

             '<div class="circulos">'+
             ' <div class="circulos01">'+
             '<img class="elipse" src="img/Ellipse 1.png">'+
             '  <a class="palabra" href="">Carbohidatros</a>'+
             '</div>'+
             '<div class="circulos01">'+
             '<img class="elipse" src="img/Ellipse 2.png">'+
             ' <a class="palabra" href="">Calorías</a>'+
             '  </div>'+
             ' <div class="circulos01">'+
             ' <img class="elipse" src="img/Ellipse 3.png">'+
             ' <a class="palabra" href="">Proteínas</a>'+
             '</div>'+
             '  <div class="circulos01">'+
             ' <img class="elipse" src="img/Ellipse 4.png">'+
             '   <a class="palabra" href="">Lípidos</a>'+
             '</div>'+
             '</div>'+


             '<header class="barrafinal">'+
             '<div class"telefono_configuracion">'+
             '<h1 class="subtitulo">Integrantes</h1>'+
             '  <img class="escudo" src="img/Recurso 4 1.png">'+
             '</div>'

             ' <div class="listado">'+
             ' <div class="nombres">'+
             ' <span> Drelyn Yasmin Santos Coc   </span> '+                
             '<span> Sandra Gabriela Sofía Salazar Lopez </span>'+
             '  <span> Andersson Odair Navas Hernández </span>'+
             
             '<span> José Carlos Mazariegos Luarca </span>'+
             ' <span> Mayra Daihly Ambrocio Monzón </span>'+
             ' <span> José Julian Sampuel Chinchilla </span>'+
             '<sapan> Ervin David Natareno Caceres </sapan>'+
             ' </div>'+
             '   </div>'+

            


             '</header>'+

             ' </section>';
             export function creartrabajo(){

                // ELEMENTOS DEL DOM
                let root = document.querySelector("#container");
            
            
                // INSERTAR FORMULARIO EN EL DOM
                root.appendChild(trabajo);
            
            };