var lista_proyectos = [
    {imagen:"IMAGES/proyectoPortafolio.png",descripcion:"Este proyecto consiste en el desarrollo de un sitio web de portafolio personal, implementado utilizando tecnologías web fundamentales: JavaScript, HTML y CSS. La página web actúa como una plataforma centralizada para exponer mi información profesional y una selección de los proyectos que he llevado a cabo. Aprovechando las capacidades de JavaScript, se ha creado una interfaz interactiva que permite a los visitantes explorar mi trabajo de manera eficiente. El diseño y la presentación se logran mediante la manipulación de CSS, garantizando una experiencia visualmente atractiva y coherente. El resultado es un sitio web de portafolio pulido y receptivo que destaca mis habilidades técnicas y mi enfoque en la programación y el diseño web",link:"file:///C:/Users/Erick/Documents/Estudios/Proyecto%20Portafolio/PortafolioWeb/proyectos.html",titulo:"Portafolio Web"}

]

/*VARIABLES*/
const modal_cerrar = document.querySelector("#modal_cerrar")
const modal = document.querySelector("#modal")
const div_proyecto = document.getElementById("proyectos_contenedor")
var proyectos_card = document.querySelectorAll(".proyectos_card");

/*FUNCIONES MODAL*/
function mostrar_modal(index){
    
    mostrar_informacion(index)
    modal.style.display = "flex";

}

function cerrar_modal(){
    modal.style.display = "none"
}

function mostrar_informacion(index){

    let proyecto = lista_proyectos[index]
    document.getElementById("modal_proyecto").children[0].textContent = proyecto.titulo
    document.getElementById("banner_modal").style.backgroundImage = "url("+proyecto.imagen+")"
    let lista_detalle_modal = document.getElementById("detalle_modal").children
    lista_detalle_modal[1].textContent = proyecto.descripcion
    lista_detalle_modal[2].href = proyecto.link

}


/*CREAR SECCION*/


function crear_proyectos_card(){
    lista_proyectos.forEach(element => {
    
        let seccion_proyecto = document.createElement("section")
        seccion_proyecto.classList.add("proyectos_card")
        let imagen_proyecto = document.createElement("img")
    
        imagen_proyecto.src = element.imagen
    
        seccion_proyecto.appendChild(imagen_proyecto)
        div_proyecto.appendChild(seccion_proyecto)
    
    
    });
}

/*MODIFICAR SECCION*/

function modificar_proyectos_card(){


    for (let index = 0; index < proyectos_card.length; index++) {

        proyectos_card[index].children[0].src = lista_proyectos[index].imagen
        
    }
    

    
}



/*GESTIONAR MODAL Y ASIGNAR INFORMACION*/


if(proyectos_card.length == 0){
    
    crear_proyectos_card()
    proyectos_card = document.querySelectorAll(".proyectos_card");


} else{

    modificar_proyectos_card()
}



proyectos_card.forEach((element,index) => {
        element.addEventListener("click", ()=>{mostrar_modal(index)})
        
});

modal_cerrar.addEventListener("click",cerrar_modal)


