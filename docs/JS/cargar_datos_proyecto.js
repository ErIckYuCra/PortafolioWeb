var lista_proyectos = [
    {imagen:"IMAGES/proyectoPortafolio.png",repositorio:"https://github.com/ErIckYuCra/PortafolioWeb/tree/main/docs",link:"https://erickyucra.github.io/PortafolioWeb/index.html",titulo:"Portafolio Web"}

]

/*VARIABLES*/

const div_proyecto = document.getElementById("proyectos_contenedor")
var proyectos_card = document.querySelectorAll(".proyectos_card");

/*FUNCIONES MODAL*/



function mostrar_informacion(){


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
        let imagen_proyecto = document.createElement("img")
        let titulo_proyecto = document.createElement("h4")
        let div_links_proyecto  = document.createElement("div")
        let a_proyecto = document.createElement("a")
        let a_repositorio = document.createElement("a")

        seccion_proyecto.classList.add("proyectos_card")
        div_links_proyecto.classList.add("card_links_proyecto")
        a_proyecto.classList.add("a_redireccion")
        a_repositorio.classList.add("a_redireccion")
        
        imagen_proyecto.src = element.imagen
        titulo_proyecto.textContent=element.titulo
        a_proyecto.textContent = "Ver Proyecto"
        a_repositorio.textContent = "Ver el Repositorio"
        a_proyecto.href = element.link
        a_repositorio.href = element.repositorio
        
        div_links_proyecto.appendChild(a_proyecto)
        div_links_proyecto.appendChild(a_repositorio)
        seccion_proyecto.appendChild(imagen_proyecto)
        seccion_proyecto.appendChild(titulo_proyecto)
        seccion_proyecto.appendChild(div_links_proyecto)
        div_proyecto.appendChild(seccion_proyecto)
    
    
    });
}

/*MODIFICAR SECCION*/

function modificar_proyectos_card(){


    for (let index = 0; index < proyectos_card.length; index++) {

        proyectos_card[index].children[0].src = lista_proyectos[index].imagen
        proyectos_card[index].children[1].textContent = lista_proyectos[index].titulo

        proyectos_card[index].children[2].children[0].href = lista_proyectos[index].link
        proyectos_card[index].children[2].children[1].href = lista_proyectos[index].repositorio
        
    }
    

    
}



/*GESTIONAR MODAL Y ASIGNAR INFORMACION*/


if(proyectos_card.length == 0){
    
    crear_proyectos_card()


} else{

    modificar_proyectos_card()
}





