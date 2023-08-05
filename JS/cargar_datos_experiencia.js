var lista_experiencia = [
    {imagen:"IMAGES/css.png",dominio:"Basico",nombre:"CSS"},
    {imagen:"IMAGES/html.png",dominio:"Intermedio",nombre:"HTML"},
    {imagen:"IMAGES/js.png",dominio:"Intermedio",nombre:"Java Script"},
    {imagen:"IMAGES/react.png",dominio:"Basico",nombre:"React"},
    {imagen:"IMAGES/java.png",dominio:"Intermedio",nombre:"Java"},
    {imagen:"IMAGES/mysql.png",dominio:"Intermedio",nombre:"My SQL"},
    {imagen:"IMAGES/spring.png",dominio:"Intermedio",nombre:"Spring"}

]
/*CREACION DE SECCION*/
var experiencia_contenedor = document.getElementById("experiencia_contenedor")
var seccion = document.querySelectorAll(".experiencia_card_habilidades")


/*CARGAR  EXPERIENCIA SECCION EXPERIENCIA*/

function informacion_seccion_experiencia(){
    lista_experiencia.forEach(element => {
    
        let  seccion_experiencia = document.createElement("section")
        seccion_experiencia.classList.add("experiencia_card_habilidades")
        let imagen_experiencia = document.createElement("img")
        imagen_experiencia.classList.add("card_imagen")
        let h3_experiencia = document.createElement("h3")
        let p_experiencia = document.createElement("p")
    
        imagen_experiencia.src = element.imagen
        h3_experiencia.textContent=element.nombre
        p_experiencia.textContent=element.dominio
    
        seccion_experiencia.appendChild(imagen_experiencia)
        seccion_experiencia.appendChild(h3_experiencia)
        seccion_experiencia.appendChild(p_experiencia)
        experiencia_contenedor.appendChild(seccion_experiencia)
    
    
    
    });

}

/*CARGAR INDEX SECCION EXPERIENCIA*/
function index_seccion_experiencia(){
    
    for (let index = 0; index < seccion.length; index++) {

        seccion[index].children[0].src = lista_experiencia[index].imagen
        seccion[index].children[1].textContent = lista_experiencia[index].nombre
        seccion[index].children[2].textContent = lista_experiencia[index].dominio
    }


}



/*CARGAR SECCION EXPERIENCIA INDEX*/

if(seccion.length === 0){
    informacion_seccion_experiencia()
}else{
    index_seccion_experiencia()
}




